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

    // Log the generation process
    this.logger.log('Generating content via OpenAI...');
    const text = await this.contentSettingsService.generate({
      prompt: contentSetting?.promptText,
      type: ContentType.TEXT,
    });

    const imageUrl = await this.contentSettingsService.generate({
      prompt: contentSetting.promptImage || '',
      type: ContentType.IMAGE,
    });

    const hashtags = await this.contentSettingsService.generate({
      prompt: contentSetting.promptHashtags || '',
      type: ContentType.HASHTAGS,
    });

    // Log generated content
    this.logger.log('Generated content:', text.result);
    this.logger.log('Generated image URL:', imageUrl.result);

    // Create post
    const post = await this.prisma.post.create({
      data: {
        accountId,
        content: text.result,
        imageUrl: imageUrl.result,
        hashtags: hashtags.result,
        targetUrl: contentSetting.targetUrl,
        promoted: contentSetting.promotedOnly || undefined,
      },
    });

    // Log post creation
    this.logger.log('Post created with ID:', post.id);

    // Schedule post
    const scheduledPost = await this.prisma.scheduledPost.create({
      data: {
        accountId,
        scheduledAt: getNextDateFromCron(cronExpression),
        status: 'pending',
        postId: post.id,
      },
    });

    this.logger.log(`Scheduled post for ${scheduledPost.scheduledAt}`);

    // Setup cron job
    const task = cron.schedule(cronExpression, async () => {
      try {
        this.logger.log(
          `Executing scheduled post with ID: ${scheduledPost.id}`,
        );
        await this.puppeteerService.submitPost(
          {
            accountId,
            content: post.content,
            hashtags: post.hashtags,
            imageUrl: post.imageUrl,
            promoted: post.promoted,
            targetUrl: post.targetUrl,
          },
          userAgent,
        );
        this.logger.log('Post successfully submitted via Puppeteer');
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

    return { success: true, postId: post.id };
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
