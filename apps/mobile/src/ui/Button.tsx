import { Pressable, type PressableProps } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { Text } from './Text';

type Props = Omit<PressableProps, 'children'> & {
  label: string;
  kind?: 'primary' | 'secondary' | 'danger';
};

export function Button({ label, kind = 'secondary', style, disabled, ...rest }: Props) {
  const t = useTheme();
  const bg = kind === 'primary' ? t.colors.accent : t.colors.surfaceRaised;
  const fg = kind === 'primary' ? t.colors.onAccent : kind === 'danger' ? t.colors.danger : t.colors.text;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      {...rest}
      style={(state) => [
        {
          minHeight: t.hitTarget.min,
          paddingHorizontal: t.spacing.lg,
          borderRadius: t.radius.md,
          backgroundColor: bg,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.4 : state.pressed ? 0.7 : 1,
        },
        typeof style === 'function' ? style(state) : style,
      ]}
    >
      <Text style={{ color: fg }}>{label}</Text>
    </Pressable>
  );
}
