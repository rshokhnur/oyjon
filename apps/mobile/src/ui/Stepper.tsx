import { View } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { Button } from './Button';
import { Text } from './Text';

type Props = {
  value: number;
  label: string; // formatted value, e.g. "120 ml"
  step: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  decreaseLabel: string;
  increaseLabel: string;
};

export function Stepper({ value, label, step, min, max, onChange, decreaseLabel, increaseLabel }: Props) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: t.spacing.md }}>
      <Button
        label="−"
        accessibilityLabel={decreaseLabel}
        disabled={value - step < min}
        onPress={() => onChange(Math.max(min, value - step))}
        style={{ minWidth: t.hitTarget.tile }}
      />
      <Text variant="title" style={{ flex: 1, textAlign: 'center' }} accessibilityLiveRegion="polite">
        {label}
      </Text>
      <Button
        label="+"
        accessibilityLabel={increaseLabel}
        disabled={value + step > max}
        onPress={() => onChange(Math.min(max, value + step))}
        style={{ minWidth: t.hitTarget.tile }}
      />
    </View>
  );
}
