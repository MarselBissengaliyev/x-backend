export function isToday(date: Date): boolean {
  const now = new Date();
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfToday.getDate() + 1);

  return date >= startOfToday && date < startOfTomorrow;
}
