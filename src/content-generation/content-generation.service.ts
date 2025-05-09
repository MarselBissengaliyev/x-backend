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
