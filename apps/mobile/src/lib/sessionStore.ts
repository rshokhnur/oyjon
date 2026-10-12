import { create } from 'zustand';

// The local baby and caregiver chosen at boot. TODO(M3): comes from the signed-in family.
type LocalSession = {
  babyId: string | null;
  caregiverId: string | null;
  set: (s: { babyId: string; caregiverId: string }) => void;
};

export const useLocalSession = create<LocalSession>()((set) => ({
  babyId: null,
  caregiverId: null,
  set: ({ babyId, caregiverId }) => set({ babyId, caregiverId }),
}));
