import { IsString, IsNotEmpty, Matches, IsOptional } from 'class-validator';

export class SchedulePostDto {
  @IsString()
  @IsNotEmpty()
  accountId: string;

  @Matches(/^(\*|([0-5]?\d)|\*\/[0-9]+) (\*|([0-1]?\d|2[0-3])|\*\/[0-9]+) (\*|([1-2]?\d|3[0-1])) (\*|(0?[1-9]|1[0-2])) (\*|[0-6])$/, {
    message: 'Неверный формат CRON. Пример: */5 * * * *',
  })
  @IsOptional()
  cronExpression: string;

  @IsOptional()
  @IsString()
  @Matches(/^https?:\/\/[^\s/$.?#].[^\s]*$/, { message: 'Invalid URL format' })
  postUrl?: string; // Опционально: URL для поста, если необходимо указать

  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9,#@_+\-\.\*\s]+$/, { message: 'Invalid characters in post caption' })
  postCaption?: string; // Опционально: описание или заголовок для поста
}
