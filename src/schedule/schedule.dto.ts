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

  @IsString()
  @IsNotEmpty()
  promptText: string;

  @IsOptional()
  @IsString()
  promptImage?: string;

  @IsOptional()
  @IsString()
  promptHashtags?: string;

  @IsOptional()
  @IsString()
  imagesSource?: string;

  @IsUrl()
  @IsOptional()
  @IsNotEmpty()
  targetUrl: string;

  @IsBoolean()
  promotedOnly: boolean;
}
