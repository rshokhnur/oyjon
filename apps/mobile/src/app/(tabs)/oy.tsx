import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/features/placeholder/PlaceholderScreen';

// TODO(M5): replace the placeholder.
export default function Route() {
  const { t } = useTranslation();
  return <PlaceholderScreen hint={t('placeholder.moons')} />;
}
