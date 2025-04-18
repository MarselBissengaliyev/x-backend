import { IsString, IsInt, IsEnum, IsOptional, Length, IsUrl } from 'class-validator';

// Перечисление для методов
enum Method {
  METHOD_1 = 1,
  METHOD_2 = 2,
}

export class CreateAccountDto {
  @IsString()
  @Length(3, 50)
  login: string;

  @IsString()
  @Length(6, 100)
  password: string;

  @IsString()
  @IsOptional() // Прокси может быть необязательным
  @Length(3, 255)
  proxy?: string;

  @IsEnum(Method)
  method: Method;

  @IsString()
  @Length(3, 255)
  userAgent: string;

  @IsUrl()
  @IsOptional() // Если нужно, можно сделать URL опциональным
  targetUrl?: string;
}
