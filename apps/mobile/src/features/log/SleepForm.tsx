import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { LogEntry } from '@/db/payloads';
import { formatElapsed } from '@/lib/format';
import { addMinutes, nowIso } from '@/lib/time';
import { useNow } from '@/lib/useNow';
import { useTheme } from '@/theme/useTheme';
import { Button, Chip, Text, TimerButton } from '@/ui';
import { TimeAdjuster } from './TimeAdjuster';
import { useLogActions } from './useLogActions';

type SleepEntry = Extract<LogEntry, { type: 'sleep' }>;
const DEFAULT_MANUAL_MIN = 60;

export function SleepForm({ entry, onDone }: { entry?: SleepEntry; onDone: () => void }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const now = useNow(1000);
  const actions = useLogActions();
  const isRunning = !!entry && entry.endedAt === null;
  const [mode, setMode] = useState<'timer' | 'manual'>(entry && !isRunning ? 'manual' : 'timer');
  const [start, setStart] = useState(entry?.startedAt ?? addMinutes(nowIso(), -DEFAULT_MANUAL_MIN));
  const [end, setEnd] = useState(entry?.endedAt ?? nowIso());
  const [error, setError] = useState<string | null>(null);

  async function startTimer() {
    const res = await actions.create({ type: 'sleep', startedAt: nowIso(), endedAt: null, payload: {} }, false);
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  async function stopTimer() {
    if (!entry) return;
    const res = await actions.update(entry.id, { type: 'sleep', startedAt: entry.startedAt, endedAt: nowIso(), payload: {} });
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  async function saveManual() {
    const input = { type: 'sleep' as const, startedAt: start, endedAt: end, payload: {} };
    const res = entry ? await actions.update(entry.id, input) : await actions.create(input);
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  return (
    <View style={{ gap: theme.spacing.lg }}>
      {!entry ? (
        <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
          <Chip label={t('log.timer')} selected={mode === 'timer'} onPress={() => setMode('timer')} />
          <Chip label={t('log.manual')} selected={mode === 'manual'} onPress={() => setMode('manual')} />
        </View>
      ) : null}
      {mode === 'timer' ? (
        <TimerButton
          label={isRunning ? t('log.stop') : t('log.start')}
          elapsed={formatElapsed(isRunning && entry ? now.getTime() - Date.parse(entry.startedAt) : 0)}
          running={isRunning}
          onPress={() => void (isRunning ? stopTimer() : startTimer())}
        />
      ) : (
        <>
          <TimeAdjuster label={t('log.startedAt')} value={start} onChange={setStart} />
          <TimeAdjuster label={t('log.endedAt')} value={end} onChange={setEnd} />
          <Button kind="primary" label={t('common.save')} onPress={() => void saveManual()} />
        </>
      )}
      {error ? <Text style={{ color: theme.colors.danger }}>{error}</Text> : null}
    </View>
  );
}
