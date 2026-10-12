import { ScrollView, type ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/theme/useTheme';

export function Screen({ contentContainerStyle, ...rest }: ScrollViewProps) {
  const t = useTheme();
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: t.colors.background }}>
      <ScrollView
        {...rest}
        contentContainerStyle={[{ padding: t.spacing.lg, gap: t.spacing.lg }, contentContainerStyle]}
      />
    </SafeAreaView>
  );
}
