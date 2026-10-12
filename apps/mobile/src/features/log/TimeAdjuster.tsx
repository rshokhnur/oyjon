import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { currentLocale } from '@/i18n';
import { formatClock } from '@/lib/format';
import { addMinutes, nowIso } from '@/lib/time';
import { useTheme } from '@/theme/useTheme';
import { Button, Text } from '@/ui';

const STEP_MIN = 5;

// Minimal time control: −5 / now / +5. TODO(design): replace with the drag-to-adjust control from the spec (T3).
export function TimeAdjuster({ label, value, onChange }: { label: string; value: string; onChange: (iso: string) => void }) {
  const { t } = useTranslation();
  const theme = useTheme();
  const later = addMinutes(value, STEP_MIN);
  return (
    <View style={{ gap: theme.spacing.xs }}>
      <Text muted variant="caption">
        {label}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.sm }}>
        <Button label={t('log.earlier')} onPress={() => onChange(addMinutes(value, -STEP_MIN))} />
        <Text variant="title" style={{ flex: 1, textAlign: 'center', fontVariant: ['tabular-nums'] }}>
          {formatClock(value, currentLocale())}
        </Text>
        <Button label={t('log.later')} disabled={Date.parse(later) > Date.now()} onPress={() => onChange(later)} />
        <Button label={t('common.now')} onPress={() => onChange(nowIso())} />
      </View>
    </View>
  );
}
