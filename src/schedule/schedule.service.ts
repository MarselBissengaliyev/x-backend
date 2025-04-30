import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger
} from '@nestjs/common';
import * as cron from 'node-cron';
import { ContentType } from 'src/content-generation/content-generation.dto';
import { ContentGenerationService } from 'src/content-generation/content-generation.service';
import { PrismaService } from '../prisma/prisma.service';
import { PuppeteerService } from '../puppeteer/puppeteer.service';
import { SchedulePostDto } from './schedule.dto';
import { getNextDateFromCron } from './schedule.utils';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);

  private readonly cronJobs = new Map<string, cron.ScheduledTask>();

  constructor(
    private prisma: PrismaService,
    private puppeteerService: PuppeteerService,
    private contentSettingsService: ContentGenerationService,
  ) {}

  async schedulePost(dto: SchedulePostDto, userAgent: string) {
    const {
      accountId,
      cronExpression,
      promotedOnly,
      promptText,
      targetUrl,
      promptImage,
      promptHashtags,
    } = dto;
    this.logger.log(
      `Scheduling post for account: ${accountId} with cron: ${cronExpression}`,
    );

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

    this.logger.log(
      `Scheduled post created for future executions at ${scheduledPost.scheduledAt}`,
    );

    // Крон задача
    const task = cron.schedule(cronExpression, async () => {
      try {
        this.logger.log(`Executing scheduled post for account: ${accountId}`);
    
        const existingAccount = await this.prisma.account.findUnique({
          where: { id: accountId },
        });
    
        if (!existingAccount) {
          this.logger.warn(
            `Account ${accountId} not found. Stopping cron job.`,
          );
    
          // Удаляем cron-задачу и запись в scheduledPost
          task.stop();
          this.cronJobs.delete(scheduledPost.id);
    
          await this.prisma.scheduledPost.delete({
            where: { id: scheduledPost.id },
          });
          return;
        }
    
        // Параллельная генерация контента
        const tasks = [
          this.contentSettingsService.generate({
            prompt: dto.promptText,
            type: ContentType.TEXT,
          }),
        ];
        
        if (dto.promptImage) {
          tasks.push(
            this.contentSettingsService.generate({
              prompt: dto.promptImage,
              type: dto.method === ContentType.IMAGE_ANALYSIS
                ? ContentType.IMAGE_ANALYSIS
                : ContentType.IMAGE,
              imageUrl: dto.promptImage,
            })
          );
        }
        
        if (dto.promptHashtags) {
          tasks.push(
            this.contentSettingsService.generate({
              prompt: dto.promptHashtags,
              type: ContentType.HASHTAGS,
            })
          );
        }

        const [newText, newImage, newHashtags] = await Promise.all(tasks);
    
        // Попытка отправить пост
        const result = await this.puppeteerService.submitPost(
          {
            accountId,
            content: newText.result,
            hashtags: newHashtags ? newHashtags.result : null,
            imageUrl: newImage ? newImage.result : null,
            promoted: dto.promotedOnly || false,
            targetUrl: dto.targetUrl,
          },
          userAgent,
        );
    
        if (result.captchaDetected) {
          this.logger.warn(
            '🚨 Капча обнаружена — требуется ручное вмешательство',
          );
          await this.prisma.scheduledPost.update({
            where: { id: scheduledPost.id },
            data: { status: 'captcha_required' },
          });
          return;
        }
    
        if (!result.success) {
          this.logger.warn('🚨 Ошибка при отправке поста', result.message);
          throw new Error("Ошибка при создании поста");
        }

        
    
        // Успешная публикация — теперь создаём пост
        const newPost = await this.prisma.post.create({
          data: {
            accountId,
            content: newText.result,
            imageUrl: newImage ? newImage.result : "",
            hashtags: newHashtags ? newHashtags.result : "",
            targetUrl: dto.targetUrl,
            promoted: dto.promotedOnly || undefined,
          },
        });
    
        this.logger.log(`New post created with ID: ${newPost.id}`);
    
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: {
            status: 'done',
          },
        });
      } catch (e) {
        this.logger.error('Post submission failed:', e);
    
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'failed' },
        });
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
