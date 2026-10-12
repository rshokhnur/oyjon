import { z } from 'zod';

import type { LogType } from './schema';

export const BOTTLE_MIN_ML = 1;
export const BOTTLE_MAX_ML = 500;

const isoDate = z.iso.datetime({ offset: true });

export const breastFeedSchema = z.object({
  method: z.literal('breast'),
  leftMs: z.number().int().min(0),
  rightMs: z.number().int().min(0),
  // Side whose timer is running now, and since when. Both null once the feed is finished.
  activeSide: z.enum(['left', 'right']).nullable(),
  activeSince: isoDate.nullable(),
  lastSide: z.enum(['left', 'right']).nullable(),
});

export const bottleFeedSchema = z.object({
  method: z.literal('bottle'),
  amountMl: z.number().int().min(BOTTLE_MIN_ML).max(BOTTLE_MAX_ML),
});

export const feedPayloadSchema = z.discriminatedUnion('method', [breastFeedSchema, bottleFeedSchema]);

export const sleepPayloadSchema = z.object({});

export const diaperPayloadSchema = z.object({
  kind: z.enum(['wet', 'dirty', 'both']),
});

// TODO(M2, M5): real schemas for growth, pump, note, milestone and photo.
const laterPayloadSchema = z.object({}).loose();

export const payloadSchemas = {
  feed: feedPayloadSchema,
  sleep: sleepPayloadSchema,
  diaper: diaperPayloadSchema,
  growth: laterPayloadSchema,
  pump: laterPayloadSchema,
  note: laterPayloadSchema,
  milestone: laterPayloadSchema,
  photo: laterPayloadSchema,
} satisfies Record<LogType, z.ZodType>;

export type BreastFeedPayload = z.infer<typeof breastFeedSchema>;
export type BottleFeedPayload = z.infer<typeof bottleFeedSchema>;
export type FeedPayload = z.infer<typeof feedPayloadSchema>;
export type SleepPayload = z.infer<typeof sleepPayloadSchema>;
export type DiaperPayload = z.infer<typeof diaperPayloadSchema>;

export type LogEntryInput =
  | { type: 'feed'; startedAt: string; endedAt: string | null; payload: FeedPayload }
  | { type: 'sleep'; startedAt: string; endedAt: string | null; payload: SleepPayload }
  | { type: 'diaper'; startedAt: string; endedAt: null; payload: DiaperPayload };

export type LogEntry = LogEntryInput & {
  id: string;
  babyId: string;
  caregiverId: string;
  caregiverName: string | null;
  caregiverIsMe: boolean;
  syncStatus: 'pending' | 'synced';
};

export type LogEntryError = 'endBeforeStart' | 'inFuture' | 'amountInvalid' | 'invalidPayload';

// Small clock skew allowance so "now" from a slightly earlier render still passes.
const FUTURE_SLACK_MS = 60_000;

/** Validates a log entry before it is written. Returns the first problem, or null if it's fine. */
export function validateLogEntry(entry: LogEntryInput, now: Date): LogEntryError | null {
  const start = Date.parse(entry.startedAt);
  if (Number.isNaN(start)) return 'invalidPayload';
  if (start > now.getTime() + FUTURE_SLACK_MS) return 'inFuture';
  if (entry.endedAt !== null) {
    const end = Date.parse(entry.endedAt);
    if (Number.isNaN(end)) return 'invalidPayload';
    if (end > now.getTime() + FUTURE_SLACK_MS) return 'inFuture';
    if (end < start) return 'endBeforeStart';
  }
  if (entry.type === 'feed' && entry.payload.method === 'bottle') {
    const ml = entry.payload.amountMl;
    if (!Number.isInteger(ml) || ml < BOTTLE_MIN_ML || ml > BOTTLE_MAX_ML) return 'amountInvalid';
  }
  const parsed = payloadSchemas[entry.type].safeParse(entry.payload);
  return parsed.success ? null : 'invalidPayload';
}

/** Parses a stored row's payload. Unknown or broken payloads return null so one bad row can't crash a screen. */
export function parsePayload<T extends 'feed' | 'sleep' | 'diaper'>(
  type: T,
  payload: unknown,
): z.infer<(typeof payloadSchemas)[T]> | null {
  const parsed = payloadSchemas[type].safeParse(payload);
  return parsed.success ? (parsed.data as z.infer<(typeof payloadSchemas)[T]>) : null;
}
