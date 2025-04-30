import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, Matches, ValidateIf } from 'class-validator';

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
}
