import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches
} from 'class-validator';

export enum GenerationMethod {
  TextOnly = 1,
  ImageAnalysis = 2,
}

export class SchedulePostDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @Matches(
    /^(\*|([0-5]?\d)|\*\/[0-9]+) (\*|([0-1]?\d|2[0-3])|\*\/[0-9]+) (\*|([1-2]?\d|3[0-1])) (\*|(0?[1-9]|1[0-2])) (\*|[0-6])$/,
    {
      message: 'Неверный формат CRON. Пример: */5 * * * *',
    },
  )
  cronExpression: string;

  @IsOptional()
  @IsString()
  @Matches(/^https?:\/\/[^\s/$.?#].[^\s]*$/, { message: 'Invalid URL format' })
  postUrl?: string; // Опционально: URL для поста, если необходимо указать

  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9,#@_+\-\.\*\s]+$/, {
    message: 'Invalid characters in post caption',
  })
  postCaption?: string; // Опционально: описание или заголовок для поста

  @IsString()
  @IsNotEmpty()
  promptText: string;

  @IsOptional()
  @IsString()
  promptImage?: string;

  @IsOptional()
  @IsString()
  promptHashtags?: string;

  @IsUrl()
  @IsOptional()
  @IsNotEmpty()
  targetUrl: string;

  @IsBoolean()
  promotedOnly: boolean;

  @IsOptional()
  @IsString()
  @Matches(/^(image|image_analysis)$/, {
    message: 'method должен быть либо "image", либо "image_analysis"',
  })
  method?: 'image' | 'image_analysis'; // Optional, default to 'image' if not provided
}
