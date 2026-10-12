import { and, desc, eq, gte, isNull, or } from 'drizzle-orm';

import { newId } from '@/lib/ids';
import { nowIso } from '@/lib/time';
import { db } from './client';
import { parsePayload, validateLogEntry, type LogEntry, type LogEntryError, type LogEntryInput } from './payloads';
import { caregivers, logs, type CaregiverRow, type LogRow } from './schema';

type M1Type = 'feed' | 'sleep' | 'diaper';
const M1_TYPES: readonly string[] = ['feed', 'sleep', 'diaper'];

export class LogValidationError extends Error {
  constructor(public readonly code: LogEntryError) {
    super(code);
  }
}

/** Turns a joined row into a typed entry. Rows with an unknown type or a broken payload are skipped. */
export function toEntry(row: { logs: LogRow; caregivers: CaregiverRow | null }): LogEntry | null {
  const l = row.logs;
  if (!M1_TYPES.includes(l.type)) return null; // TODO(M2): growth, pump, note, milestone, photo
  const type = l.type as M1Type;
  const payload = parsePayload(type, l.payload);
  if (!payload) return null;
  return {
    id: l.id,
    babyId: l.babyId,
    caregiverId: l.caregiverId,
    caregiverName: row.caregivers?.displayName ?? null,
    caregiverIsMe: row.caregivers?.isMe ?? false,
    syncStatus: l.syncStatus,
    type,
    startedAt: l.startedAt,
    endedAt: l.endedAt,
    payload,
  } as LogEntry;
}

export function toEntries(rows: { logs: LogRow; caregivers: CaregiverRow | null }[]): LogEntry[] {
  return rows.map(toEntry).filter((e): e is LogEntry => e !== null);
}

const joined = () => db.select().from(logs).leftJoin(caregivers, eq(logs.caregiverId, caregivers.id));

/** Entries that started since `sinceIso`, plus any still-running timer. Newest first. */
export function logsSinceQuery(babyId: string, sinceIso: string) {
  return joined()
    .where(and(eq(logs.babyId, babyId), isNull(logs.deletedAt), or(gte(logs.startedAt, sinceIso), isNull(logs.endedAt))))
    .orderBy(desc(logs.startedAt));
}

/** The latest entry of one type (running or finished). */
export function lastOfTypeQuery(babyId: string, type: M1Type) {
  return joined()
    .where(and(eq(logs.babyId, babyId), eq(logs.type, type), isNull(logs.deletedAt)))
    .orderBy(desc(logs.startedAt))
    .limit(2);
}

export async function getLog(id: string): Promise<LogEntry | null> {
  const rows = await joined().where(eq(logs.id, id)).limit(1);
  return rows[0] ? toEntry(rows[0]) : null;
}

export async function createLog(babyId: string, caregiverId: string, input: LogEntryInput): Promise<string> {
  const problem = validateLogEntry(input, new Date());
  if (problem) throw new LogValidationError(problem);
  const id = newId();
  const now = nowIso();
  await db.insert(logs).values({
    id,
    babyId,
    caregiverId,
    type: input.type,
    startedAt: input.startedAt,
    endedAt: input.endedAt,
    payload: input.payload,
    createdAt: now,
    updatedAt: now,
    syncStatus: 'pending',
  });
  return id;
}

export async function updateLog(id: string, input: LogEntryInput): Promise<void> {
  const problem = validateLogEntry(input, new Date());
  if (problem) throw new LogValidationError(problem);
  await db
    .update(logs)
    .set({
      type: input.type,
      startedAt: input.startedAt,
      endedAt: input.endedAt,
      payload: input.payload,
      updatedAt: nowIso(),
      syncStatus: 'pending',
    })
    .where(eq(logs.id, id));
}

/** Soft delete, so it can be undone and synced (M3). */
export async function deleteLog(id: string): Promise<void> {
  const now = nowIso();
  await db.update(logs).set({ deletedAt: now, updatedAt: now, syncStatus: 'pending' }).where(eq(logs.id, id));
}

export async function restoreLog(id: string): Promise<void> {
  await db.update(logs).set({ deletedAt: null, updatedAt: nowIso(), syncStatus: 'pending' }).where(eq(logs.id, id));
}

/** A still-running feed or sleep timer, if any. */
export async function getRunning(babyId: string, type: 'feed' | 'sleep'): Promise<LogEntry | null> {
  const rows = await joined()
    .where(and(eq(logs.babyId, babyId), eq(logs.type, type), isNull(logs.endedAt), isNull(logs.deletedAt)))
    .orderBy(desc(logs.startedAt))
    .limit(1);
  return rows[0] ? toEntry(rows[0]) : null;
}
