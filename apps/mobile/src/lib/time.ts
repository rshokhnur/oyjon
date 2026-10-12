// Pure time helpers. Times are stored as UTC ISO strings and shown in the device time zone.

export const MINUTE = 60_000;
export const HOUR = 60 * MINUTE;

export type DurationParts = { hours: number; minutes: number };

export function durationParts(ms: number): DurationParts {
  const total = Math.max(0, Math.floor(ms / MINUTE));
  return { hours: Math.floor(total / 60), minutes: total % 60 };
}

/** Time since an ISO timestamp, in whole hours and minutes. Null when under a minute. */
export function timeSince(iso: string, now: Date): DurationParts | null {
  const ms = now.getTime() - new Date(iso).getTime();
  if (ms < MINUTE) return null;
  return durationParts(ms);
}

export function nowIso(): string {
  return new Date().toISOString();
}

export function startOfLocalDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addMinutes(iso: string, minutes: number): string {
  return new Date(new Date(iso).getTime() + minutes * MINUTE).toISOString();
}

/** Parses 'YYYY-MM-DD' as a local calendar date. */
export function parseLocalDate(ymd: string): Date {
  const [y, m, d] = ymd.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function toLocalYmd(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function daysInMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate();
}

/** Adds months to a calendar date, clamping to the month's last day (Jan 31 + 1 month = Feb 28/29). */
function addMonthsClamped(date: Date, months: number): Date {
  const y = date.getFullYear();
  const m = date.getMonth() + months;
  const target = new Date(y, m, 1);
  const day = Math.min(date.getDate(), daysInMonth(target.getFullYear(), target.getMonth()));
  return new Date(target.getFullYear(), target.getMonth(), day);
}

export type BabyAge = { months: number; days: number };

/** Baby age in completed months plus days, by calendar. Born on the 31st counts the month's last day as the monthly birthday. */
export function babyAge(birthYmd: string, now: Date): BabyAge {
  const birth = parseLocalDate(birthYmd);
  const today = startOfLocalDay(now);
  if (today < birth) return { months: 0, days: 0 };
  let months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
  let anchor = addMonthsClamped(birth, months);
  if (anchor > today) {
    months -= 1;
    anchor = addMonthsClamped(birth, months);
  }
  // Round to absorb DST hour shifts.
  const days = Math.round((today.getTime() - anchor.getTime()) / (24 * HOUR));
  return { months, days };
}
