import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, Matches } from 'class-validator';

export enum ContentType {
  TEXT = 'text',
  IMAGE = 'image',
  HASHTAGS = 'hashtags',
}

export class GenerateDto {
  @IsString()
  @IsNotEmpty()
  prompt: string;

  @IsEnum(ContentType)
  type: ContentType;
}

export class CreateContentSettingDto {
  @IsUUID()
  @IsNotEmpty()
  accountId: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  promptText?: string;

  @IsOptional()
  @IsString()
  promptImage?: string;

  @IsOptional()
  @IsString()
  promptHashtags?: string;

  @IsOptional()
  @IsString()
  imageSource?: string;

  @IsUrl()
  @IsOptional()
  @IsNotEmpty()
  targetUrl: string;

  @IsBoolean()
  autoPost: boolean = false;

  @Matches(/^(\*|([0-5]?\d)|\*\/[0-9]+) (\*|([0-1]?\d|2[0-3])|\*\/[0-9]+) (\*|([1-2]?\d|3[0-1])) (\*|(0?[1-9]|1[0-2])) (\*|[0-6])$/, {
    message: 'Неверный формат CRON. Пример: */5 * * * *',
  })
  @IsOptional()
  cronExpression: string;

  @IsBoolean()
  promotedOnly: boolean;

  @IsOptional()
  @IsBoolean()
  useAiOnImage?: boolean;
}
