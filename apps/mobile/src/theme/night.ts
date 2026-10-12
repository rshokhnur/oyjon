export const NIGHT_START_HOUR = 21;
export const NIGHT_END_HOUR = 6;

export type NightModeSetting = 'auto' | 'always' | 'off';

export function isNightHour(date: Date): boolean {
  const h = date.getHours();
  return h >= NIGHT_START_HOUR || h < NIGHT_END_HOUR;
}

export function resolveNight(setting: NightModeSetting, now: Date): boolean {
  if (setting === 'always') return true;
  if (setting === 'off') return false;
  return isNightHour(now);
}
