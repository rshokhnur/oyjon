import * as Haptics from 'expo-haptics';

// The only place the app triggers haptics.
export const haptics = {
  saved(): void {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  },
  tap(): void {
    void Haptics.selectionAsync().catch(() => {});
  },
  longPress(): void {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
  },
};
