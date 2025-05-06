import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as cron from 'node-cron';
import { ContentType } from 'src/content-generation/content-generation.dto';
import { ContentGenerationService } from 'src/content-generation/content-generation.service';
import { GoogleDriveService } from 'src/google-drive/google-drive.service';
import { PrismaService } from '../prisma/prisma.service';
import { PuppeteerService } from '../puppeteer/puppeteer.service';
import { SchedulePostDto } from './schedule.dto';
import { extractFolderId, getNextDateFromCron } from './schedule.utils';

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
    if (!account) throw new Error('Account not found');
    if (!cronExpression) throw new Error('Cron expression not provided');

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

    if (this.cronJobs.has(scheduledPost.id)) {
      this.logger.warn(`Cron for post ${scheduledPost.id} already exists`);
      return { success: false, message: 'Job already scheduled' };
    }

    const task = cron.schedule(cronExpression, async () => {
      let downloadedImagePath: string | null = null;

      try {
        this.logger.log(`Executing scheduled post for account: ${accountId}`);

        const generateContentTasks = [
          this.contentSettingsService.generate({
            prompt: promptText,
            type: ContentType.TEXT,
          }),
        ];

        // 📌 Атомарный выбор и пометка isUsed
        if (dto.imagesSource) {
          let image = await this.prisma.$transaction(async (tx) => {
            const candidate = await tx.image.findFirst({
              where: { isUsed: false },
              orderBy: { id: 'asc' },
            });
            if (!candidate) return null;
            const updated = await tx.image.update({
              where: { id: candidate.id },
              data: { isUsed: true },
            });
            return updated;
          });

          if (!image && dto.imagesSource) {
            const folderId = extractFolderId(dto.imagesSource);

            if (!folderId) {
              this.logger.warn('Invalid Google Drive folder link');
              await this.prisma.scheduledPost.update({
                where: { id: scheduledPost.id },
                data: { status: 'no_images' },
              });
              return;
            }

            const googleImageIds =
              await this.googleDriveService.getImagesFromFolder(folderId);

            if (!googleImageIds.length) {
              this.logger.warn('No images found in the folder');
              await this.prisma.scheduledPost.update({
                where: { id: scheduledPost.id },
                data: { status: 'no_images' },
              });
              return;
            }

            await Promise.all(
              googleImageIds.map((id) => {
                return this.prisma.image.create({
                  data: {
                    url: `https://drive.google.com/uc?id=${id}`,
                    scheduledPostId: scheduledPost.id,
                  },
                });
              }),
            );

            // Повторная попытка: атомарно
            image = await this.prisma.$transaction(async (tx) => {
              const candidate = await tx.image.findFirst({
                where: {
                  isUsed: false,
                  scheduledPost: {
                    id: scheduledPost.id,
                  },
                },
                orderBy: { id: 'asc' },
              });
              if (!candidate) return null;
              const updated = await tx.image.update({
                where: { id: candidate.id },
                data: { isUsed: true },
              });
              return updated;
            });
          }

          if (!image) {
            this.logger.warn('Still no unused images after inserting');
            await this.prisma.scheduledPost.update({
              where: { id: scheduledPost.id },
              data: { status: 'no_images' },
            });
            return;
          }
          const fileId = new URL(image.url).searchParams.get('id');
          if (!fileId) throw new Error('Invalid image URL: missing file ID');
          downloadedImagePath =
            await this.googleDriveService.downloadFile(fileId);
        }

        if (promptImage) {
          generateContentTasks.push(
            this.contentSettingsService.generate({
              prompt: promptImage,
              type: ContentType.IMAGE,
            }),
          );
        }

        if (promptHashtags) {
          generateContentTasks.push(
            this.contentSettingsService.generate({
              prompt: promptHashtags,
              type: ContentType.HASHTAGS,
            }),
          );
        }

        const [newText, newImage, newHashtags] =
          await Promise.all(generateContentTasks);

        const result = await this.puppeteerService.submitPost(
          {
            accountId,
            content: newText.result,
            hashtags: newHashtags?.result ?? null,
            imageUrl: downloadedImagePath || newImage?.result || null,
            promoted: promotedOnly || false,
            targetUrl: targetUrl ?? null,
          },
          userAgent,
        );

        if (result.captchaDetected) {
          await this.prisma.scheduledPost.update({
            where: { id: scheduledPost.id },
            data: { status: 'captcha_required' },
          });
          return;
        }

        if (!result.success) throw new Error(result.message || 'Post failed');

        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'done' },
        });
      } catch (e) {
        this.logger.error(`Scheduled post failed: ${e.message}`);
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'failed' },
        });
      } finally {
        if (downloadedImagePath) {
          fs.unlink(downloadedImagePath, (err) => {
            if (err) this.logger.warn(`File cleanup failed: ${err.message}`);
            else this.logger.log(`Deleted temp file: ${downloadedImagePath}`);
          });
          const allUsed = await this.prisma.image.count({
            where: {
              scheduledPost: {
                id: scheduledPost.id,
              },
              isUsed: false,
            },
          });

          if (allUsed === 0) {
            this.logger.warn(
              `No more images for post ${scheduledPost.id}. Waiting for new ones.`,
            );

            const cronJob = this.cronJobs.get(scheduledPost.id);
            if (cronJob) {
              cronJob.stop();
              this.cronJobs.delete(scheduledPost.id);
              this.logger.log(
                `All images used. Stopped cron job for post ${scheduledPost.id}`,
              );
            }

            // Обновляем статус, чтобы видно было, что задача "ждёт"
            await this.prisma.scheduledPost.update({
              where: { id: scheduledPost.id },
              data: { status: 'google_drive_done' },
            });

            // ❗ Не останавливаем cron — он будет снова пытаться на следующей итерации
            return;
          }
        }
      }
    });

    this.cronJobs.set(scheduledPost.id, task);

    return { success: true, scheduledPostId: scheduledPost.id };
  }

  async removeScheduledPostJob(scheduledPostId: string) {
    // Если хочешь удалять и запись из базы:
    try {
      await this.prisma.image.deleteMany({
        where: { scheduledPostId },
      });
      
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
