import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentSettingDto, GenerateDto } from './content-settings.dto';

@Injectable()
export class ContentSettingsService {
  private openai: OpenAI;
  private readonly logger = new Logger(ContentSettingsService.name);

  constructor(private prisma: PrismaService) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not defined in environment variables');
    }

    this.openai = new OpenAI({ apiKey });
  }

  async create(data: CreateContentSettingDto) {
    this.logger.log('Создание или обновление content setting...');
    try {
      const result = await this.prisma.contentSetting.upsert({
        where: {
          accountId: data.accountId,  // Уникальное поле для поиска записи
        },
        update: data,  // Если запись существует, она будет обновлена
        create: {
          promptText: data.promptText,
          promptImage: data.promptImage,
          promptHashtags: data.promptHashtags,
          imageSource: data.imageSource,
          targetUrl: data.targetUrl,
          autoPost: data.autoPost,
          cronExpression: data.cronExpression,
          promotedOnly: data.promotedOnly,
          useAiOnImage: data.useAiOnImage,
          account: {
            connect: { id: data.accountId }, // Устанавливаем связь с существующим аккаунтом
          },
        },
      });
      this.logger.log('Content setting успешно обработан');
      return result;
    } catch (error) {
      this.logger.error('Не удалось обработать content setting', error.stack);
      throw error;
    }
  }
  
  async generate({ prompt, type }: GenerateDto): Promise<{ result: string }> {
    this.logger.log(
      `Генерация контента типа "${type}" с промптом: "${prompt}"`,
    );

    try {
      if (type === 'image') {
        const res = await this.openai.images.generate({
          prompt,
          n: 1,
          size: '512x512',
        });

        const imageUrl = res.data[0]?.url;
        if (!imageUrl) {
          throw new Error('Не получен URL изображения от OpenAI');
        }

        this.logger.log(`Изображение сгенерировано успешно: ${imageUrl}`);
        return { result: imageUrl };
      }

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
      });

      const text = completion.choices[0]?.message?.content;
      if (!text) {
        throw new Error('Не получен текст от OpenAI');
      }

      this.logger.log('Текст сгенерирован успешно');
      return { result: text };
    } catch (error) {
      this.logger.error('Ошибка при генерации контента', error.stack);
      throw error;
    }
  }

  async findByAccountId(accountId: string) {
    this.logger.log(`Поиск настроек контента для аккаунта: ${accountId}`);
    try {
      const setting = await this.prisma.contentSetting.findUnique({
        where: { accountId },
      });

      if (!setting) {
        this.logger.warn(`Настройки для аккаунта ${accountId} не найдены`);
      } else {
        this.logger.log(`Настройки найдены`);
      }

      return setting;
    } catch (error) {
      this.logger.error('Ошибка при получении настроек контента', error.stack);
      throw error;
    }
  }
}
