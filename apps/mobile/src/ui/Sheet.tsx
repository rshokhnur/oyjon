import { ScrollView, type ScrollViewProps } from 'react-native';

import { useTheme } from '@/theme/useTheme';

// Content container for sheet routes. The sheet itself is a native form sheet (see src/app/_layout.tsx).
export function Sheet({ contentContainerStyle, ...rest }: ScrollViewProps) {
  const t = useTheme();
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      {...rest}
      style={{ backgroundColor: t.colors.background }}
      contentContainerStyle={[{ padding: t.spacing.lg, gap: t.spacing.lg }, contentContainerStyle]}
    />
  );
}
