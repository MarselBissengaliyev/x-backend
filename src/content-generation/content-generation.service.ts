import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import { PrismaService } from '../prisma/prisma.service';
import { GenerateDto } from './content-generation.dto';

@Injectable()
export class ContentGenerationService {
  private openai: OpenAI;
  private readonly logger = new Logger(ContentGenerationService.name);

  constructor(private prisma: PrismaService) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not defined in environment variables');
    }

    this.openai = new OpenAI({ apiKey });
  }

  async generate({
    prompt,
    type,
    imageUrl,
  }: GenerateDto): Promise<{ result: string }> {
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

        if (!res.data) {
          throw new Error('Не получен URL изображения от OpenAI');
        }

        const imageUrl = res.data[0]?.url;
        if (!imageUrl) {
          throw new Error('Не получен URL изображения от OpenAI');
        }

        this.logger.log(`Изображение сгенерировано успешно: ${imageUrl}`);
        return { result: imageUrl };
      }

      if (type === 'image_analysis') {
        if (!imageUrl) {
          throw new Error('imageUrl обязателен для анализа изображения');
        }

        // Скачиваем изображение
        const response = await fetch(imageUrl);
        const buffer = await response.arrayBuffer();

        // Преобразуем в Base64
        const base64Image = Buffer.from(buffer).toString('base64');

        // Получаем описание изображения с помощью vision
        const visionCompletion = await this.openai.chat.completions.create({
          model: 'gpt-4-turbo',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text:
                    prompt || 'Что изображено и как это можно визуализировать?',
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: `data:image/jpeg;base64,${base64Image}`,
                  },
                },
              ],
            },
          ],
        });

        const description = visionCompletion.choices[0]?.message?.content;
        if (!description) {
          throw new Error('Не удалось получить описание изображения');
        }

        this.logger.log(`AI описание изображения: ${description}`);

        // Генерируем новое изображение по описанию
        const imageGen = await this.openai.images.generate({
          prompt: description,
          n: 1,
          size: '512x512',
        });

        const generatedImageUrl = imageGen.data[0]?.url;
        if (!generatedImageUrl) {
          throw new Error('Не удалось сгенерировать новое изображение');
        }

        this.logger.log(
          `Новое изображение успешно сгенерировано: ${generatedImageUrl}`,
        );
        return { result: generatedImageUrl };
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
}
