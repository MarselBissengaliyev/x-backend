import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
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

@ValidatorConstraint({ name: 'contentLength', async: false })
export class ContentLengthValidator implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const { content, hashtags } = args.object as any;

    const pieces = [
      content?.trim(),
      hashtags?.trim(),
    ].filter(Boolean);

    const finalText = pieces.join('\n');
    return finalText.length <= 279;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Total post content including hashtags and targetUrl must be 279 characters or fewer.';
  }
}

export class PostDto {
  @IsString()
  accountId: string;

  @IsString({ message: 'Content must be a string.' })
  @IsNotEmpty({ message: 'Content cannot be empty.' })
  @Validate(ContentLengthValidator) // <<< вот сюда
  content: string;

  @IsOptional()
  @IsString({ message: 'Image URL must be a string if provided.' })
  @IsUrl({})
  imageUrl?: string | null;

  @IsOptional()
  @IsString({ message: 'Hashtags must be a string if provided.' })
  hashtags?: string | null;

  @IsOptional()
  @IsString({ message: 'Target URL must be a string if provided.' })
  @IsUrl({})
  targetUrl?: string | null;

  
  @IsBoolean({ message: 'Promoted must be a boolean value.' })
  promoted: boolean ;
}

export interface PostWithMediaParserDto {
  accountId: string;
  content: string;
  hashtags?: string;
  targetUrl?: string;
  promoted?: boolean;
  imageSource?: string;
  isImageProcessed?: boolean;
  isAutoPost?: boolean;
}
