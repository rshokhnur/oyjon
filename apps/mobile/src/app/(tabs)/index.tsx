import { TodayScreen } from '@/features/today/TodayScreen';
import { useLocalSession } from '@/lib/sessionStore';

export default function TodayRoute() {
  const babyId = useLocalSession((s) => s.babyId);
  return babyId ? <TodayScreen babyId={babyId} /> : null;
}
