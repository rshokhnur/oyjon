import type { TFunction } from 'i18next';

import type { LogEntry } from '@/db/payloads';
import { formatDurationMs } from '@/lib/format';
import { totalMs } from './breastTimer';

export function typeLabel(t: TFunction, type: LogEntry['type']): string {
  return t(`log.${type}`);
}

export function whoLogged(t: TFunction, e: Pick<LogEntry, 'caregiverIsMe' | 'caregiverName'>): string {
  return e.caregiverIsMe ? t('caregiver.me') : (e.caregiverName ?? '');
}

/** One-line detail for an entry: side and duration, amount, or diaper kind. */
export function describeEntry(t: TFunction, e: LogEntry, now: Date): string {
  switch (e.type) {
    case 'feed': {
      const p = e.payload;
      if (p.method === 'bottle') return t('log.bottleAmount', { amount: p.amountMl });
      const side = p.lastSide ? t('log.breastSide', { side: t(`log.${p.lastSide}`) }) : t('log.breast');
      return `${side} · ${formatDurationMs(t, totalMs(p, e.endedAt ? new Date(e.endedAt) : now))}`;
    }
    case 'sleep': {
      const end = e.endedAt ? Date.parse(e.endedAt) : now.getTime();
      return t('log.sleepRange', { duration: formatDurationMs(t, end - Date.parse(e.startedAt)) });
    }
    case 'diaper':
      return t(`log.${e.payload.kind}`);
  }
}

/** The moment "time since" counts from: feeds and diapers from the start, sleep from waking up. */
export function sinceAnchor(e: LogEntry): string | null {
  if (e.type === 'sleep') return e.endedAt;
  return e.startedAt;
}
