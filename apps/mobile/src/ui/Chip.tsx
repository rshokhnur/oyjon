import { Pressable } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { Text } from './Text';

type Props = { label: string; selected?: boolean; onPress: () => void; large?: boolean };

export function Chip({ label, selected, onPress, large }: Props) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: !!selected }}
      style={({ pressed }) => ({
        minHeight: large ? t.hitTarget.tile : t.hitTarget.min,
        paddingHorizontal: t.spacing.lg,
        borderRadius: t.radius.pill,
        borderWidth: 1,
        borderColor: selected ? t.colors.accent : t.colors.border,
        backgroundColor: selected ? t.colors.accent : t.colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text style={{ color: selected ? t.colors.onAccent : t.colors.text }}>{label}</Text>
    </Pressable>
  );
}
