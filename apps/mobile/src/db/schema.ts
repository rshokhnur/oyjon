import { sql } from 'drizzle-orm';
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Every synced table carries these columns so the outbox sync (M3) can work without a migration rewrite.
const syncColumns = {
  id: text('id').primaryKey(), // device-made UUID
  createdAt: text('created_at').notNull().default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ','now'))`),
  updatedAt: text('updated_at').notNull().default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ','now'))`),
  deletedAt: text('deleted_at'),
  syncStatus: text('sync_status', { enum: ['pending', 'synced'] }).notNull().default('pending'),
};

export const families = sqliteTable('families', {
  ...syncColumns,
  regionCode: text('region_code', { enum: ['UZ', 'KZ', 'KG', 'GLOBAL'] }).notNull().default('UZ'),
});

export const caregivers = sqliteTable('caregivers', {
  ...syncColumns,
  familyId: text('family_id')
    .notNull()
    .references(() => families.id),
  // Null for the local "me" caregiver before accounts exist (M3); the UI shows a translated "You".
  displayName: text('display_name'),
  role: text('role', { enum: ['parent', 'helper'] }).notNull().default('parent'),
  colour: text('colour'),
  isMe: integer('is_me', { mode: 'boolean' }).notNull().default(false),
});

export const babies = sqliteTable('babies', {
  ...syncColumns,
  familyId: text('family_id')
    .notNull()
    .references(() => families.id),
  name: text('name'),
  birthDate: text('birth_date'), // YYYY-MM-DD, local calendar date
  dueDate: text('due_date'), // YYYY-MM-DD
  mode: text('mode', { enum: ['baby', 'pregnancy', 'archived'] }).notNull().default('baby'),
});

export const LOG_TYPES = ['feed', 'sleep', 'diaper', 'growth', 'pump', 'note', 'milestone', 'photo'] as const;
export type LogType = (typeof LOG_TYPES)[number];

export const logs = sqliteTable(
  'logs',
  {
    ...syncColumns,
    babyId: text('baby_id')
      .notNull()
      .references(() => babies.id),
    caregiverId: text('caregiver_id')
      .notNull()
      .references(() => caregivers.id),
    type: text('type', { enum: LOG_TYPES }).notNull(),
    startedAt: text('started_at').notNull(), // UTC ISO
    endedAt: text('ended_at'), // UTC ISO; null while a timer runs or for instant entries
    payload: text('payload', { mode: 'json' }).notNull().$type<unknown>(),
  },
  (t) => [
    index('logs_baby_started_idx').on(t.babyId, t.startedAt),
    index('logs_sync_idx').on(t.syncStatus),
  ],
);

export type FamilyRow = typeof families.$inferSelect;
export type CaregiverRow = typeof caregivers.$inferSelect;
export type BabyRow = typeof babies.$inferSelect;
export type LogRow = typeof logs.$inferSelect;
