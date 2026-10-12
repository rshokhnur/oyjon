import { View } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { Text } from './Text';

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  const t = useTheme();
  return (
    <View style={{ alignItems: 'center', paddingVertical: t.spacing.xxl, gap: t.spacing.sm }}>
      <Text variant="title" style={{ textAlign: 'center' }}>
        {title}
      </Text>
      {hint ? (
        <Text muted style={{ textAlign: 'center' }}>
          {hint}
        </Text>
      ) : null}
    </View>
  );
}
