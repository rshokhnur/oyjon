import { Pressable, View } from 'react-native';

import { useTheme } from '@/theme/useTheme';
import { Text } from './Text';

type Props = {
  title: string;
  subtitle?: string;
  trailing?: string;
  onPress?: () => void;
  accessibilityHint?: string;
};

export function ListRow({ title, subtitle, trailing, onPress, accessibilityHint }: Props) {
  const t = useTheme();
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={[trailing, title, subtitle].filter(Boolean).join(', ')}
      accessibilityHint={accessibilityHint}
      style={({ pressed }) => ({
        minHeight: t.hitTarget.min,
        paddingVertical: t.spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        gap: t.spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: t.colors.border,
        opacity: pressed ? 0.6 : 1,
      })}
    >
      {trailing ? (
        <Text muted variant="caption">
          {trailing}
        </Text>
      ) : null}
      <View style={{ flex: 1 }}>
        <Text>{title}</Text>
        {subtitle ? (
          <Text muted variant="caption">
            {subtitle}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
