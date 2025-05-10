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
  // Если это просто ID (без ссылки)
  if (/^[\w-]{10,}$/.test(link)) return link;

  // Попробуем найти ID в разных форматах ссылок
  const patterns = [
    /\/folders\/([\w-]+)/,
    /[?&]id=([\w-]+)/,
    /\/d\/([\w-]+)/,
  ];

  for (const pattern of patterns) {
    const match = link.match(pattern);
    if (match) return match[1];
  }

  return null;
}

