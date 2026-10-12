import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { LOCALES } from '@/config/regions';
import { currentLocale, setLocale } from '@/i18n';
import { useSettings } from '@/lib/settingsStore';
import { useTheme } from '@/theme/useTheme';
import { Chip, Sheet, Text } from '@/ui';

// Placeholder settings. TODO(M3): family and caregivers. TODO(M10): privacy, export, delete.
export function SettingsScreen() {
  const { t } = useTranslation();
  const theme = useTheme();
  const save = useSettings((s) => s.setLocale);
  const active = currentLocale();

  return (
    <Sheet>
      <Text variant="title">{t('settings.language')}</Text>
      <View style={{ gap: theme.spacing.sm }}>
        {LOCALES.map((l) => (
          <Chip
            key={l}
            label={t(`languages.${l}`)}
            selected={active === l}
            onPress={() => {
              save(l);
              void setLocale(l);
            }}
          />
        ))}
      </View>
    </Sheet>
  );
}
