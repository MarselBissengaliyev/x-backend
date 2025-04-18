export class SchedulePostDto {
  accountId: string;
  cronExpression: string; // Например: "*/5 * * * *" (каждые 5 минут)
  sessionId: string;
}
