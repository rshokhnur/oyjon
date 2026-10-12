import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import Storage from 'expo-sqlite/kv-store';

import type { Locale } from '@/config/regions';
import type { NightModeSetting } from '@/theme/night';

type SettingsState = {
  locale: Locale | null; // null = follow the device
  nightMode: NightModeSetting;
  setLocale: (locale: Locale) => void;
  setNightMode: (mode: NightModeSetting) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      locale: null,
      nightMode: 'auto',
      setLocale: (locale) => set({ locale }),
      setNightMode: (nightMode) => set({ nightMode }),
    }),
    {
      name: 'oyjon-settings',
      storage: createJSONStorage(() => Storage),
      partialize: (s) => ({ locale: s.locale, nightMode: s.nightMode }),
    },
  ),
);
