import { useEffect, useState } from 'react';

import { useSettings } from '@/lib/settingsStore';
import { resolveNight } from './night';
import { colors, hitTarget, radius, spacing, type, type Theme } from './tokens';

export function useTheme(): Theme {
  const setting = useSettings((s) => s.nightMode);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const night = resolveNight(setting, now);
  return {
    mode: night ? 'night' : 'day',
    colors: night ? colors.night : colors.day,
    spacing,
    radius,
    type,
    hitTarget,
  };
}
