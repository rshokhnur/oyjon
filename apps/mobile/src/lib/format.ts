import type { TFunction } from 'i18next';

import { babyAge, durationParts, timeSince, type DurationParts } from './time';

export function formatDuration(t: TFunction, parts: DurationParts): string {
  const out: string[] = [];
  if (parts.hours > 0) out.push(t('duration.hours', { count: parts.hours }));
  if (parts.minutes > 0 || parts.hours === 0) out.push(t('duration.minutes', { count: parts.minutes }));
  return out.join(' ');
}

export function formatDurationMs(t: TFunction, ms: number): string {
  return formatDuration(t, durationParts(ms));
}

export function formatTimeSince(t: TFunction, iso: string, now: Date): string {
  const parts = timeSince(iso, now);
  if (!parts) return t('time.justNow');
  return t('time.ago', { duration: formatDuration(t, parts) });
}

export function formatAge(t: TFunction, birthYmd: string, now: Date): string {
  const { months, days } = babyAge(birthYmd, now);
  return t('age.format', {
    months: t('age.months', { count: months }),
    days: t('age.days', { count: days }),
  });
}

export function formatClock(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
}

/** Elapsed timer as m:ss or h:mm:ss. */
export function formatElapsed(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const ss = String(s).padStart(2, '0');
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${ss}`;
  return `${m}:${ss}`;
}
