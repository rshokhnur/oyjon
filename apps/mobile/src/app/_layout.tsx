import '@/i18n';

import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

import { db } from '@/db/client';
import migrations from '@/db/migrations/migrations';
import { ensureLocalSeed, getMe } from '@/db/seed';
import { setLocale } from '@/i18n';
import { useLocalSession } from '@/lib/sessionStore';
import { useSettings } from '@/lib/settingsStore';
import { useTheme } from '@/theme/useTheme';
import { Text, ToastHost } from '@/ui';

export default function RootLayout() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { success, error } = useMigrations(db, migrations);
  const setSession = useLocalSession((s) => s.set);
  const savedLocale = useSettings((s) => s.locale);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (savedLocale) void setLocale(savedLocale);
  }, [savedLocale]);

  useEffect(() => {
    if (!success) return;
    void (async () => {
      await ensureLocalSeed();
      setSession(await getMe());
      setReady(true);
    })();
  }, [success, setSession]);

  if (error) {
    // Developer-facing; a real error screen comes with M3's sync/error states.
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: theme.spacing.lg, backgroundColor: theme.colors.background }}>
        <Text>{error.message}</Text>
      </View>
    );
  }
  if (!ready) return <View style={{ flex: 1, backgroundColor: theme.colors.background }} />;

  const header = {
    headerStyle: { backgroundColor: theme.colors.background },
    headerTintColor: theme.colors.text,
    contentStyle: { backgroundColor: theme.colors.background },
  };

  return (
    <SafeAreaProvider>
      <StatusBar style={theme.mode === 'night' ? 'light' : 'dark'} />
      <Stack screenOptions={header}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="log"
          options={{
            presentation: 'formSheet',
            sheetAllowedDetents: [0.65, 1],
            sheetGrabberVisible: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="settings" options={{ presentation: 'modal', title: t('settings.title') }} />
        <Stack.Screen name="voice" options={{ presentation: 'modal', title: t('voice.title') }} />
      </Stack>
      <ToastHost />
    </SafeAreaProvider>
  );
}
