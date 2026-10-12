import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { BOTTLE_MAX_ML, BOTTLE_MIN_ML, type BreastFeedPayload, type LogEntry } from '@/db/payloads';
import { formatElapsed } from '@/lib/format';
import { nowIso } from '@/lib/time';
import { useNow } from '@/lib/useNow';
import { useTheme } from '@/theme/useTheme';
import { Button, Chip, Stepper, Text, TimerButton } from '@/ui';
import { finishBreastFeed, newBreastFeed, sideMs, tapSide } from './breastTimer';
import { TimeAdjuster } from './TimeAdjuster';
import { useLogActions } from './useLogActions';

type FeedEntry = Extract<LogEntry, { type: 'feed' }>;
const DEFAULT_ML = 90;
const ML_STEP = 10;

export function FeedForm({ entry, onDone }: { entry?: FeedEntry; onDone: () => void }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const [method, setMethod] = useState<'breast' | 'bottle'>(entry?.payload.method ?? 'breast');

  return (
    <View style={{ gap: theme.spacing.lg }}>
      {!entry ? (
        <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
          <Chip label={t('log.breast')} selected={method === 'breast'} onPress={() => setMethod('breast')} />
          <Chip label={t('log.bottle')} selected={method === 'bottle'} onPress={() => setMethod('bottle')} />
        </View>
      ) : null}
      {method === 'breast' ? <BreastForm entry={entry} onDone={onDone} /> : <BottleForm entry={entry} onDone={onDone} />}
    </View>
  );
}

function BreastForm({ entry, onDone }: { entry?: FeedEntry; onDone: () => void }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const now = useNow(1000);
  const actions = useLogActions();
  // The feed is written as soon as a side starts, so the timer keeps running if the sheet closes.
  const [id, setId] = useState<string | null>(entry?.id ?? null);
  const [startedAt, setStartedAt] = useState<string | null>(entry?.startedAt ?? null);
  const [payload, setPayload] = useState<BreastFeedPayload | null>(
    entry?.payload.method === 'breast' ? entry.payload : null,
  );
  const [error, setError] = useState<string | null>(null);
  const running = !!id && !entry?.endedAt;

  async function onSide(side: 'left' | 'right') {
    const ts = nowIso();
    if (!id || !payload || !startedAt) {
      const p = newBreastFeed(side, ts);
      const res = await actions.create({ type: 'feed', startedAt: ts, endedAt: null, payload: p }, false);
      if (!res.ok) return setError(actions.errorText(res.error));
      setId(res.id);
      setStartedAt(ts);
      setPayload(p);
      return;
    }
    const p = tapSide(payload, side, ts);
    setPayload(p);
    await actions.update(id, { type: 'feed', startedAt, endedAt: entry?.endedAt ?? null, payload: p }, false);
  }

  async function finish() {
    if (!id || !payload || !startedAt) return onDone();
    const ts = nowIso();
    const res = await actions.update(id, { type: 'feed', startedAt, endedAt: ts, payload: finishBreastFeed(payload, ts) });
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  async function saveEdit() {
    if (!id || !payload || !startedAt || !entry) return;
    const res = await actions.update(id, { type: 'feed', startedAt, endedAt: entry.endedAt, payload });
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  const elapsed = (side: 'left' | 'right') => formatElapsed(payload ? sideMs(payload, side, now) : 0);
  const finished = !!entry?.endedAt;

  return (
    <View style={{ gap: theme.spacing.lg }}>
      <View style={{ flexDirection: 'row', gap: theme.spacing.md }}>
        {(['left', 'right'] as const).map((side) => (
          <TimerButton
            key={side}
            label={t(`log.${side}`)}
            elapsed={elapsed(side)}
            running={payload?.activeSide === side}
            onPress={finished ? () => {} : () => void onSide(side)}
          />
        ))}
      </View>
      {finished && startedAt ? <TimeAdjuster label={t('log.startedAt')} value={startedAt} onChange={setStartedAt} /> : null}
      {error ? <Text style={{ color: theme.colors.danger }}>{error}</Text> : null}
      {finished ? (
        <Button kind="primary" label={t('common.save')} onPress={() => void saveEdit()} />
      ) : (
        <Button kind="primary" label={t('log.finish')} disabled={!running} onPress={() => void finish()} />
      )}
    </View>
  );
}

function BottleForm({ entry, onDone }: { entry?: FeedEntry; onDone: () => void }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const actions = useLogActions();
  const initial = entry?.payload.method === 'bottle' ? entry.payload.amountMl : DEFAULT_ML;
  const [amount, setAmount] = useState(initial);
  const [time, setTime] = useState(entry?.startedAt ?? nowIso());
  const [error, setError] = useState<string | null>(null);

  async function save() {
    const input = { type: 'feed' as const, startedAt: time, endedAt: null, payload: { method: 'bottle' as const, amountMl: amount } };
    const res = entry ? await actions.update(entry.id, input) : await actions.create(input);
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  return (
    <View style={{ gap: theme.spacing.lg }}>
      <Stepper
        value={amount}
        label={t('log.amountMl', { amount })}
        step={ML_STEP}
        min={BOTTLE_MIN_ML}
        max={BOTTLE_MAX_ML}
        onChange={setAmount}
        decreaseLabel={t('log.decrease')}
        increaseLabel={t('log.increase')}
      />
      <TimeAdjuster label={t('log.time')} value={time} onChange={setTime} />
      {error ? <Text style={{ color: theme.colors.danger }}>{error}</Text> : null}
      <Button kind="primary" label={t('common.save')} onPress={() => void save()} />
    </View>
  );
}
