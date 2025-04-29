import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import * as cron from 'node-cron';
import { ContentType } from 'src/content-settings/content-settings.dto';
import { ContentSettingsService } from '../content-settings/content-settings.service';
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
    private contentSettingsService: ContentSettingsService,
  ) {}

  async schedulePost(dto: SchedulePostDto, userAgent: string) {
    const { accountId, cronExpression } = dto;
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

    const contentSetting = await this.prisma.contentSetting.findUnique({
      where: { accountId },
    });

    if (!contentSetting) {
      this.logger.error('Content setting not found for account:', accountId);
      throw new NotFoundException(
        'Content setting not found, create ручной пост',
      );
    }

    if (!contentSetting.promptText) {
      this.logger.error(
        'Content settings promptText empty for account:',
        accountId,
      );
      throw new Error('Content settings promptText empty');
    }

    // Сохраняем запланированную задачу без поста сразу
    const scheduledPost = await this.prisma.scheduledPost.create({
      data: {
        accountId,
        scheduledAt: getNextDateFromCron(cronExpression),
        status: 'pending',
      },
    });

    this.logger.log(
      `Scheduled post created for future executions at ${scheduledPost.scheduledAt}`,
    );

    // Крон задача
    const task = cron.schedule(cronExpression, async () => {
      try {
        this.logger.log(`Executing scheduled post for account: ${accountId}`);

        const freshContentSetting = await this.prisma.contentSetting.findUnique(
          {
            where: { accountId },
          },
        );

        if (!freshContentSetting || !freshContentSetting.promptText) {
          this.logger.error('Content setting missing or invalid');
          return;
        }

        // Генерация контента
        const newText = await this.contentSettingsService.generate({
          prompt: freshContentSetting.promptText,
          type: ContentType.TEXT,
        });

        const newImage = await this.contentSettingsService.generate({
          prompt: freshContentSetting.promptImage || '',
          type: ContentType.IMAGE,
        });

        const newHashtags = await this.contentSettingsService.generate({
          prompt: freshContentSetting.promptHashtags || '',
          type: ContentType.HASHTAGS,
        });

        // Создание нового поста
        const newPost = await this.prisma.post.create({
          data: {
            accountId,
            content: newText.result,
            imageUrl: newImage.result,
            hashtags: newHashtags.result,
            targetUrl: freshContentSetting.targetUrl,
            promoted: freshContentSetting.promotedOnly || undefined,
          },
        });

        this.logger.log(`New post created with ID: ${newPost.id}`);

        // Обновляем запланированную задачу, добавляя postId
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: {
            postId: newPost.id,
          },
        });

        // Публикация поста через Puppeteer
        const result = await this.puppeteerService.submitPost(
          {
            accountId,
            content: newPost.content,
            hashtags: newPost.hashtags,
            imageUrl: newPost.imageUrl,
            promoted: newPost.promoted,
            targetUrl: newPost.targetUrl,
          },
          userAgent,
        );
        
        this.logger.log('Post successfully submitted via Puppeteer');

        if (result.captchaDetected) {
          this.logger.warn('🚨 Капча обнаружена — требуется ручное вмешательство');
        
          await this.prisma.scheduledPost.update({
            where: { id: scheduledPost.id },
            data: {
              status: 'captcha_required',
            },
          });
        
          // Можно уведомить через Telegram, Email или добавить поле для UI
          return;
        }

        // Обновляем статус задачи
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'done' },
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
      include: { post: true },
    });
  }
}
