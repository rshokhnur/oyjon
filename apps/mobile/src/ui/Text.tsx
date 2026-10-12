import { Text as RNText, type TextProps } from 'react-native';

import { useTheme } from '@/theme/useTheme';

type Variant = 'caption' | 'body' | 'title' | 'display';

export function Text({
  variant = 'body',
  muted,
  style,
  ...rest
}: TextProps & { variant?: Variant; muted?: boolean }) {
  const t = useTheme();
  return (
    <RNText
      {...rest}
      style={[t.type[variant], { color: muted ? t.colors.textMuted : t.colors.text }, style]}
    />
  );
}
