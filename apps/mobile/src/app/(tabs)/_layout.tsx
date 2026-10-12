import { Pressable, View } from 'react-native';
import { router, Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { haptics } from '@/lib/haptics';
import { useTheme } from '@/theme/useTheme';
import { Text } from '@/ui';

// TODO(design): tab icons (sun, list, moon, spark) and the moon ＋ button artwork.
export default function TabsLayout() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        tabBarLabelStyle: theme.type.caption,
      }}
    >
      <Tabs.Screen name="index" options={{ title: t('tabs.today') }} />
      <Tabs.Screen name="kundalik" options={{ title: t('tabs.diary') }} />
      <Tabs.Screen
        name="add"
        options={{
          title: t('tabs.log'),
          tabBarButton: () => (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('tabs.log')}
              accessibilityHint={t('tabs.logHint')}
              onPress={() => {
                haptics.tap();
                router.push('/log');
              }}
              onLongPress={() => {
                haptics.longPress();
                router.push('/voice');
              }}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
              <View
                style={{
                  width: theme.hitTarget.tile,
                  height: theme.hitTarget.tile,
                  borderRadius: theme.radius.pill,
                  backgroundColor: theme.colors.accent,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text variant="title" style={{ color: theme.colors.onAccent }}>
                  ＋
                </Text>
              </View>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen name="oy" options={{ title: t('tabs.moons') }} />
      <Tabs.Screen name="sorang" options={{ title: t('tabs.ask') }} />
    </Tabs>
  );
}
