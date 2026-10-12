import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/theme/useTheme';

export function Card({ style, ...rest }: ViewProps) {
  const t = useTheme();
  return (
    <View
      {...rest}
      style={[{ backgroundColor: t.colors.surface, borderRadius: t.radius.lg, padding: t.spacing.lg, gap: t.spacing.xs }, style]}
    />
  );
}
