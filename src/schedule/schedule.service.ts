import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as cron from 'node-cron';
import { ContentType } from 'src/content-generation/content-generation.dto';
import { ContentGenerationService } from 'src/content-generation/content-generation.service';
import { GoogleDriveService } from 'src/google-drive/google-drive.service';
import { PrismaService } from '../prisma/prisma.service';
import { PuppeteerService } from '../puppeteer/puppeteer.service';
import { SchedulePostDto } from './schedule.dto';
import { extractFolderId, getNextDateFromCron } from './schedule.utils';
import * as fs from 'fs';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);

  private readonly cronJobs = new Map<string, cron.ScheduledTask>();

  constructor(
    private prisma: PrismaService,
    private puppeteerService: PuppeteerService,
    private contentSettingsService: ContentGenerationService,
    private googleDriveService: GoogleDriveService,
  ) {}

  async schedulePost(dto: SchedulePostDto, userAgent: string) {
    const { accountId, cronExpression, promotedOnly, promptText, targetUrl, promptImage, promptHashtags } = dto;
  
    this.logger.log(`Scheduling post for account: ${accountId} with cron: ${cronExpression}`);
  
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
    });
  
    if (!account) {
      this.logger.error('Account not found');
      throw new Error('Account not found');
    }
  
    if (!cronExpression) {
      throw new Error('Cron expression not found');
    }
  
    // Сохраняем запланированную задачу без поста сразу
    const scheduledPost = await this.prisma.scheduledPost.create({
      data: {
        accountId,
        scheduledAt: getNextDateFromCron(cronExpression),
        status: 'pending',
        cronExpression,
        promotedOnly,
        promptText,
        targetUrl,
        promptImage,
        promptHashtags,
      },
    });
  
    this.logger.log(`Scheduled post created for future executions at ${scheduledPost.scheduledAt}`);
  
    // Крон задача
    const task = cron.schedule(cronExpression, async () => {
      let downloadedImagePath: string | null = null;
      try {
        this.logger.log(`Executing scheduled post for account: ${accountId}`);
  
        // Параллельная генерация контента
        const generateContentTasks = [
          this.contentSettingsService.generate({ prompt: dto.promptText, type: ContentType.TEXT })
        ];
  
        if (dto.imagesSource) {
          const folderId = extractFolderId(dto.imagesSource);
          if (!folderId) {
            this.logger.warn('Invalid Google Drive folder URL');
            return;
          }
  
          const imageIds = await this.googleDriveService.getImagesFromFolder(folderId);
          if (imageIds.length > 0) {
            const selectedId = imageIds[Math.floor(Math.random() * imageIds.length)];
            downloadedImagePath = await this.googleDriveService.downloadFile(selectedId);
          } else {
            this.logger.warn('Folder is empty or inaccessible');
          }
        }
  
        if (dto.promptImage) {
          generateContentTasks.push(this.contentSettingsService.generate({ prompt: dto.promptImage, type: ContentType.IMAGE }));
        }
  
        if (dto.promptHashtags) {
          generateContentTasks.push(this.contentSettingsService.generate({ prompt: dto.promptHashtags, type: ContentType.HASHTAGS }));
        }
  
        const [newText, newImage, newHashtags] = await Promise.all(generateContentTasks);
  
        // Попытка отправить пост
        const result = await this.puppeteerService.submitPost(
          {
            accountId,
            content: newText.result,
            hashtags: newHashtags?.result ?? null,
            imageUrl: downloadedImagePath || (newImage ? newImage.result : null),
            promoted: dto.promotedOnly || false,
            targetUrl: dto.targetUrl,
          },
          userAgent,
        );
  
        if (result.captchaDetected) {
          this.logger.warn('🚨 Captcha detected — requires manual intervention');
          await this.prisma.scheduledPost.update({
            where: { id: scheduledPost.id },
            data: { status: 'captcha_required' },
          });
          return;
        }
  
        if (!result.success) {
          this.logger.warn('🚨 Error posting', result.message);
          throw new Error('Error creating post');
        }
  
        // Успешная публикация — теперь создаём пост
        const newPost = await this.prisma.post.create({
          data: {
            accountId,
            content: newText.result,
            imageUrl: newImage ? newImage.result : '',
            hashtags: newHashtags ? newHashtags.result : '',
            targetUrl: dto.targetUrl,
            promoted: dto.promotedOnly || undefined,
          },
        });
  
        this.logger.log(`New post created with ID: ${newPost.id}`);
  
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'done' },
        });
      } catch (e) {
        this.logger.error(`Post submission failed at step: ${e.message}`, e);
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'failed' },
        });
      } finally {
        if (downloadedImagePath) {
          fs.unlink(downloadedImagePath, (err) => {
            if (err) {
              this.logger.warn(`Failed to delete file ${downloadedImagePath}:`, err.message);
            } else {
              this.logger.log(`Temporary file deleted: ${downloadedImagePath}`);
            }
          });
        }
      }
    });
  
    this.cronJobs.set(scheduledPost.id, task);
  
    return { success: true, scheduledPostId: scheduledPost.id };
  }
  

  async removeScheduledPostJob(scheduledPostId: string) {
    // Если хочешь удалять и запись из базы:
    try {
      await this.prisma.scheduledPost.delete({
        where: { id: scheduledPostId },
      });
      const task = this.cronJobs.get(scheduledPostId);

      if (task) {
        task.stop();
        this.cronJobs.delete(scheduledPostId);
        this.logger.log(
          `Stopped and removed cron job for post ID: ${scheduledPostId}`,
        );
      } else {
        this.logger.warn(
          `No active cron job found for post ID: ${scheduledPostId}`,
        );
      }
      return {
        success: true,
        message: `Scheduled post ${scheduledPostId} removed`,
      };
    } catch (error) {
      throw new HttpException(
        `Scheduled post ${scheduledPostId} not found in DB`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async getActiveScheduledJobs() {
    return Array.from(this.cronJobs.keys());
  }

  async index(accountId: string) {
    this.logger.log(`Fetching scheduled posts for account: ${accountId}`);
    return this.prisma.scheduledPost.findMany({
      where: { accountId },
    });
  }
}
