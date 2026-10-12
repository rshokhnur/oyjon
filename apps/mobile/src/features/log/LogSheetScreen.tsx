import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { router, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { getLog, getRunning } from '@/db/logsRepo';
import { useLocalSession } from '@/lib/sessionStore';
import type { LogEntry } from '@/db/payloads';
import { useTheme } from '@/theme/useTheme';
import { Button, Chip, Sheet } from '@/ui';
import { DiaperForm } from './DiaperForm';
import { FeedForm } from './FeedForm';
import { SleepForm } from './SleepForm';
import { useLogActions } from './useLogActions';

type Kind = 'feed' | 'sleep' | 'diaper';
const KINDS: Kind[] = ['feed', 'sleep', 'diaper'];

/** T2–T5: pick a tile, then its form. With an id it edits that entry (T7). */
export function LogSheetScreen({ id, initialType }: { id?: string; initialType?: Kind }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const actions = useLogActions();
  const [entry, setEntry] = useState<LogEntry | null>(null);
  const [kind, setKind] = useState<Kind | null>(initialType ?? null);

  useEffect(() => {
    if (!id) return;
    void getLog(id).then((e) => {
      setEntry(e);
      if (e) setKind(e.type);
    });
  }, [id]);

  // Opening a new feed or sleep while its timer runs continues that timer instead of starting a second one.
  const babyId = useLocalSession((s) => s.babyId);
  const [running, setRunning] = useState<LogEntry | null>(null);
  useEffect(() => {
    if (id || !babyId || (kind !== 'feed' && kind !== 'sleep')) return setRunning(null);
    void getRunning(babyId, kind).then(setRunning);
  }, [id, babyId, kind]);
  const formEntry = entry ?? running;

  const close = () => router.back();
  const title = id ? t('log.editTitle') : t('log.title');

  return (
    <Sheet>
      <Stack.Screen options={{ title }} />
      {!id ? (
        // TODO(M2): "Other" tile. TODO(M7): mic button.
        <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
          {KINDS.map((k) => (
            <Chip key={k} large label={t(`log.${k}`)} selected={kind === k} onPress={() => setKind(k)} />
          ))}
        </View>
      ) : null}
      {kind === 'feed' && (!id || entry?.type === 'feed') ? (
        <FeedForm key={formEntry?.id ?? 'new'} entry={formEntry?.type === 'feed' ? formEntry : undefined} onDone={close} />
      ) : null}
      {kind === 'sleep' && (!id || entry?.type === 'sleep') ? (
        <SleepForm key={formEntry?.id ?? 'new'} entry={formEntry?.type === 'sleep' ? formEntry : undefined} onDone={close} />
      ) : null}
      {kind === 'diaper' && (!id || entry?.type === 'diaper') ? (
        <DiaperForm key={entry?.id ?? 'new'} entry={entry?.type === 'diaper' ? entry : undefined} onDone={close} />
      ) : null}
      {entry ? (
        <Button
          kind="danger"
          label={t('common.delete')}
          onPress={() => {
            void actions.remove(entry.id);
            close();
          }}
        />
      ) : null}
    </Sheet>
  );
}
