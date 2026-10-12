import { useLocalSearchParams } from 'expo-router';

import { LogSheetScreen } from '@/features/log/LogSheetScreen';

export default function LogRoute() {
  const { id, type } = useLocalSearchParams<{ id?: string; type?: 'feed' | 'sleep' | 'diaper' }>();
  return <LogSheetScreen id={id} initialType={type} />;
}
