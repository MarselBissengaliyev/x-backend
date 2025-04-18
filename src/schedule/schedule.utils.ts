import { CronExpressionParser } from 'cron-parser';

export function getNextDateFromCron(cronExpression: string): Date {
  try {
    const interval = CronExpressionParser.parse(cronExpression); // Парсим cron выражение
    return interval.next().toDate(); // Получаем следующую дату
  } catch (error) {
    throw new Error('Invalid cron expression');
  }
}
