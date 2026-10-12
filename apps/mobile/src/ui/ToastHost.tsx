import { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useToast } from '@/lib/toastStore';
import { motion } from '@/theme/tokens';
import { useTheme } from '@/theme/useTheme';
import { Text } from './Text';

// Quiet "Saved ✓" style toast with an optional action (Undo).
export function ToastHost() {
  const t = useTheme();
  const insets = useSafeAreaInsets();
  const toast = useToast((s) => s.toast);
  const dismiss = useToast((s) => s.dismiss);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(dismiss, motion.toastMs);
    return () => clearTimeout(id);
  }, [toast, dismiss]);

  if (!toast) return null;
  return (
    <View
      pointerEvents="box-none"
      style={{ position: 'absolute', left: 0, right: 0, bottom: insets.bottom + t.hitTarget.tile * 2, alignItems: 'center' }}
    >
      <View
        accessibilityLiveRegion="polite"
        accessibilityRole="alert"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: t.spacing.lg,
          paddingHorizontal: t.spacing.lg,
          minHeight: t.hitTarget.min,
          borderRadius: t.radius.pill,
          backgroundColor: t.colors.surfaceRaised,
        }}
      >
        <Text>{toast.message}</Text>
        {toast.actionLabel && toast.onAction ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={toast.actionLabel}
            hitSlop={t.spacing.md}
            onPress={() => {
              toast.onAction?.();
              dismiss();
            }}
          >
            <Text style={{ fontWeight: '600' }}>{toast.actionLabel}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
