import { Pressable } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { Text } from './Text';

type Props = { label: string; elapsed: string; running: boolean; onPress: () => void };

export function TimerButton({ label, elapsed, running, onPress }: Props) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${label}, ${elapsed}`}
      accessibilityState={{ selected: running }}
      style={({ pressed }) => ({
        flex: 1,
        minHeight: t.hitTarget.tile * 2,
        borderRadius: t.radius.lg,
        borderWidth: 2,
        borderColor: running ? t.colors.accent : t.colors.border,
        backgroundColor: running ? t.colors.surfaceRaised : t.colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        gap: t.spacing.xs,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text>{label}</Text>
      <Text variant="display" style={{ fontVariant: ['tabular-nums'] }}>
        {elapsed}
      </Text>
    </Pressable>
  );
}
