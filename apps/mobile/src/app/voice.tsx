import { useTranslation } from 'react-i18next';

import { PlaceholderScreen } from '@/features/placeholder/PlaceholderScreen';

// TODO(M7): voice log (record, transcribe, confirm chips).
export default function VoiceRoute() {
  const { t } = useTranslation();
  return <PlaceholderScreen hint={t('voice.title')} />;
}
