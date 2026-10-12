import { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import type { DiaperPayload, LogEntry } from '@/db/payloads';
import { nowIso } from '@/lib/time';
import { useTheme } from '@/theme/useTheme';
import { Chip, Text } from '@/ui';
import { TimeAdjuster } from './TimeAdjuster';
import { useLogActions } from './useLogActions';

type DiaperEntry = Extract<LogEntry, { type: 'diaper' }>;
const KINDS: DiaperPayload['kind'][] = ['wet', 'dirty', 'both'];

// One tap on a kind saves the entry.
export function DiaperForm({ entry, onDone }: { entry?: DiaperEntry; onDone: () => void }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const actions = useLogActions();
  const [time, setTime] = useState(entry?.startedAt ?? nowIso());
  const [error, setError] = useState<string | null>(null);

  async function save(kind: DiaperPayload['kind']) {
    const input = { type: 'diaper' as const, startedAt: time, endedAt: null, payload: { kind } };
    const res = entry ? await actions.update(entry.id, input) : await actions.create(input);
    if (!res.ok) return setError(actions.errorText(res.error));
    onDone();
  }

  return (
    <View style={{ gap: theme.spacing.lg }}>
      <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
        {KINDS.map((k) => (
          <Chip key={k} large label={t(`log.${k}`)} selected={entry?.payload.kind === k} onPress={() => void save(k)} />
        ))}
      </View>
      <TimeAdjuster label={t('log.time')} value={time} onChange={setTime} />
      {error ? <Text style={{ color: theme.colors.danger }}>{error}</Text> : null}
    </View>
  );
}
