import { CronExpressionParser } from 'cron-parser';

export function getNextDateFromCron(cronExpression: string): Date {
  try {
    const interval = CronExpressionParser.parse(cronExpression); // Парсим cron выражение
    return interval.next().toDate(); // Получаем следующую дату
  } catch (error) {
    throw new Error('Invalid cron expression');
  }
}

export function extractFolderId(link: string): string | null {
  const match = link.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}
