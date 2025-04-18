import { IsString, IsOptional, IsBoolean, IsEnum, IsUrl, IsNotEmpty, IsUUID, Matches } from 'class-validator';
import { Type } from 'class-transformer';

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
  imageSource?: string;

  @IsUrl()
  @IsNotEmpty()
  targetUrl: string;

  @IsBoolean()
  autoPost: boolean;

  @Matches(/^(?:0|1|2) \d{1,2} \d{1,2} \d{1,2} \d{1,2} \d{1,2} \d{1,2}$/, {
    message: 'Invalid cron expression format',
  })
  cronExpression: string;

  @IsBoolean()
  promotedOnly: boolean;

  @IsOptional()
  @IsBoolean()
  useAiOnImage?: boolean;
}
