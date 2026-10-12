import { Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useTranslation } from 'react-i18next';

import { babyQuery } from '@/db/babiesRepo';
import { lastOfTypeQuery, logsSinceQuery, toEntries } from '@/db/logsRepo';
import type { LogEntry } from '@/db/payloads';
import { describeEntry, sinceAnchor, typeLabel, whoLogged } from '@/features/log/describe';
import { finishBreastFeed, totalMs } from '@/features/log/breastTimer';
import { useLogActions } from '@/features/log/useLogActions';
import { currentLocale } from '@/i18n';
import { formatAge, formatClock, formatElapsed, formatTimeSince } from '@/lib/format';
import { nowIso, startOfLocalDay } from '@/lib/time';
import { useNow } from '@/lib/useNow';
import { useTheme } from '@/theme/useTheme';
import { Button, Card, EmptyState, ListRow, Screen, Text } from '@/ui';

const openEntry = (id: string) => router.push({ pathname: '/log', params: { id } });

export function TodayScreen({ babyId }: { babyId: string }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const now = useNow(1000);
  const dayStart = startOfLocalDay(now).toISOString();

  const { data: babyRows } = useLiveQuery(babyQuery(babyId), [babyId]);
  const { data: todayRows } = useLiveQuery(logsSinceQuery(babyId, dayStart), [babyId, dayStart]);
  const { data: feedRows } = useLiveQuery(lastOfTypeQuery(babyId, 'feed'), [babyId]);
  const { data: sleepRows } = useLiveQuery(lastOfTypeQuery(babyId, 'sleep'), [babyId]);
  const { data: diaperRows } = useLiveQuery(lastOfTypeQuery(babyId, 'diaper'), [babyId]);

  const baby = babyRows[0];
  const today = toEntries(todayRows);
  const running = today.filter((e) => e.endedAt === null && e.type !== 'diaper');
  const last = { feed: toEntries(feedRows), sleep: toEntries(sleepRows), diaper: toEntries(diaperRows) };
  const nothingYet = today.length === 0 && last.feed.length + last.sleep.length + last.diaper.length === 0;
  const name = baby?.name ?? t('baby.defaultName');

  return (
    <Screen>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('baby.avatarLabel')}
          onPress={() => router.push('/settings')}
          style={{
            width: theme.hitTarget.tile,
            height: theme.hitTarget.tile,
            borderRadius: theme.radius.pill,
            backgroundColor: theme.colors.surfaceRaised,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text variant="title">{name.charAt(0).toUpperCase()}</Text>
        </Pressable>
        <View style={{ flex: 1 }}>
          <Text variant="title">{name}</Text>
          {baby?.birthDate ? <Text muted>{formatAge(t, baby.birthDate, now)}</Text> : null}
        </View>
        {/* TODO(M5): small moon showing this month's progress. */}
      </View>

      {running.map((e) => (
        <RunningCard key={e.id} entry={e} now={now} />
      ))}

      {nothingYet ? (
        <EmptyState title={t('today.emptyTitle')} hint={t('today.emptyHint')} />
      ) : (
        <>
          <View style={{ gap: theme.spacing.md }}>
            <SinceCard label={t('today.lastFeed')} entries={last.feed} now={now} />
            <SinceCard label={t('today.lastSleep')} entries={last.sleep} now={now} />
            <SinceCard label={t('today.lastDiaper')} entries={last.diaper} now={now} />
          </View>

          <View>
            <Text variant="title" style={{ marginBottom: theme.spacing.sm }}>
              {t('today.timeline')}
            </Text>
            {today.map((e) => (
              <ListRow
                key={e.id}
                trailing={formatClock(e.startedAt, currentLocale())}
                title={typeLabel(t, e.type)}
                subtitle={[describeEntry(t, e, now), whoLogged(t, e)].filter(Boolean).join(' · ')}
                onPress={() => openEntry(e.id)}
                accessibilityHint={t('today.editHint')}
              />
            ))}
          </View>
        </>
      )}
    </Screen>
  );
}

function SinceCard({ label, entries, now }: { label: string; entries: LogEntry[]; now: Date }) {
  const { t } = useTranslation();
  // For sleep, a running timer has no wake-up time yet; use the last finished one.
  const e = entries.find((x) => sinceAnchor(x) !== null);
  const anchor = e ? sinceAnchor(e) : null;
  return (
    <Card accessible accessibilityLabel={[label, anchor ? formatTimeSince(t, anchor, now) : t('today.none')].join(', ')}>
      <Text muted variant="caption">
        {label}
      </Text>
      <Text variant="display">{anchor ? formatTimeSince(t, anchor, now) : t('today.none')}</Text>
      {e ? (
        <Text muted>
          {describeEntry(t, e, now)}
          {' · '}
          {t('today.loggedBy', { name: whoLogged(t, e) })}
        </Text>
      ) : null}
    </Card>
  );
}

function RunningCard({ entry, now }: { entry: LogEntry; now: Date }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const actions = useLogActions();
  async function stop() {
    const ts = nowIso();
    if (entry.type === 'feed' && entry.payload.method === 'breast') {
      await actions.update(entry.id, { type: 'feed', startedAt: entry.startedAt, endedAt: ts, payload: finishBreastFeed(entry.payload, ts) });
    } else if (entry.type === 'sleep') {
      await actions.update(entry.id, { type: 'sleep', startedAt: entry.startedAt, endedAt: ts, payload: {} });
    }
  }
  const ms =
    entry.type === 'feed' && entry.payload.method === 'breast'
      ? totalMs(entry.payload, now)
      : now.getTime() - Date.parse(entry.startedAt);
  return (
    <Card style={{ borderWidth: 2, borderColor: theme.colors.accent }}>
      <Pressable accessibilityRole="button" onPress={() => openEntry(entry.id)} accessibilityHint={t('today.editHint')}>
        <Text muted variant="caption">
          {typeLabel(t, entry.type)} · {t('today.running')}
        </Text>
        <Text variant="display" style={{ fontVariant: ['tabular-nums'] }}>
          {formatElapsed(ms)}
        </Text>
      </Pressable>
      <Button label={t('today.stop')} onPress={() => void stop()} />
    </Card>
  );
}
