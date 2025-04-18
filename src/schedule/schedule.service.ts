import { Injectable } from '@nestjs/common';
import * as cron from 'node-cron';
import { ContentType } from 'src/content-settings/content-settings.dto';
import { ContentSettingsService } from '../content-settings/content-settings.service';
import { PrismaService } from '../prisma/prisma.service';
import { PuppeteerService } from '../puppeteer/puppeteer.service';
import { SchedulePostDto } from './schedule.dto';
import { getNextDateFromCron } from './schedule.utils';

@Injectable()
export class ScheduleService {
  constructor(
    private prisma: PrismaService,
    private puppeteerService: PuppeteerService,
    private contentSettingsService: ContentSettingsService,
  ) {}

  async schedulePost(dto: SchedulePostDto) {
    const { accountId, cronExpression } = dto;
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
    });

    if (!account) {
      throw new Error('Account not found');
    }

    const contentSetting = await this.prisma.contentSetting.findUnique({
      where: { accountId },
    });

    if (!contentSetting) {
      throw new Error('Content setting not found');
    }

    // Сгенерируем контент через OpenAI
    const text = await this.contentSettingsService.generate({
      prompt: contentSetting.promptText,
      type: ContentType.TEXT,
    });
    const imageUrl = await this.contentSettingsService.generate({
      prompt: contentSetting.promptImage || '',
      type: ContentType.IMAGE,
    });

    // Создадим пост в базе данных
    const post = await this.prisma.post.create({
      data: {
        accountId,
        content: text.result,
        imageUrl: imageUrl.result,
        hashtags: contentSetting.promptHashtags || '',
        targetUrl: contentSetting.targetUrl,
        promoted: contentSetting.promotedOnly,
      },
    });

    const scheduledPost = await this.prisma.scheduledPost.create({
      data: {
        accountId,
        scheduledAt: getNextDateFromCron(cronExpression), // можно просто new Date() если разово
        status: 'pending',
        postId: post.id,
      },
    });

    // Настроим cron задачу
    cron.schedule(cronExpression, async () => {
      try {
        await this.puppeteerService.submitPost({
          content: post.content,
          hashtags: post.hashtags,
          imageUrl: post.imageUrl,
          promoted: post.promoted,
          extraTags: post.hashtags,
          targetUrl: post.targetUrl
        });
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'done' },
        });
      } catch (e) {
        await this.prisma.scheduledPost.update({
          where: { id: scheduledPost.id },
          data: { status: 'failed' },
        });
      }
    });

    return { success: true, postId: post.id };
  }

  async index(accountId: string) {
    return this.prisma.scheduledPost.findMany({
      where: { accountId },
      include: { post: true },
    });
  }
}
