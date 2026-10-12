import { useTranslation } from 'react-i18next';

import { EmptyState, Screen } from '@/ui';

export function PlaceholderScreen({ hint }: { hint: string }) {
  const { t } = useTranslation();
  return (
    <Screen>
      <EmptyState title={t('common.comingSoon')} hint={hint} />
    </Screen>
  );
}
