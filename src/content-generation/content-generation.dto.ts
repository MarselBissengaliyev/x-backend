import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, Matches, ValidateIf } from 'class-validator';

export enum ContentType {
  TEXT = 'text',
  IMAGE = 'image',
  HASHTAGS = 'hashtags',
  IMAGE_ANALYSIS = 'image_analysis',
}

export class GenerateDto {
  @IsString()
  @IsNotEmpty()
  prompt: string;

  @IsEnum(ContentType)
  type: ContentType;

  // Поле обязательно, только если тип — image_analysis
  @ValidateIf(o => o.type === ContentType.IMAGE_ANALYSIS)
  @IsUrl({}, { message: 'imageUrl должен быть валидным URL' })
  imageUrl?: string;
}

export class CreateContentSettingDto {
  @IsUUID()
  @IsNotEmpty()
  accountId: string;
}
