import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class LoginDto {
  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  proxy?: string;

  @IsString()
  userAgent: string;
}

export class CodeDto {
  @IsString()
  code: string; // Предположим, что код имеет длину 6 символов (например, для 2FA)
}

export class PostDto {
  @IsString({ message: 'Content must be a string.' })
  @IsNotEmpty({ message: 'Content cannot be empty.' })
  content: string;

  @IsOptional()
  @IsString({ message: 'Image URL must be a string if provided.' })
  @IsUrl({})
  imageUrl?: string | null; // Можно передавать null или undefined

  @IsOptional()
  @IsString({ message: 'Hashtags must be a string if provided.' })
  hashtags?: string | null; // Можно передавать null или undefined

  @IsOptional()
  @IsString({ message: 'Target URL must be a string if provided.' })
  @IsUrl({})
  targetUrl?: string | null; // Можно передавать null или undefined

  @IsOptional()
  @IsBoolean({ message: 'Promoted must be a boolean value.' })
  promoted?: boolean | null; // Можно передавать null или undefined

  @IsOptional()
  @IsArray({ message: 'Extra tags must be an array of strings.' })
  @IsString({ each: true, message: 'Each extra tag must be a string.' })
  extraTags?: string | null; // Можно передавать null или undefined
}
