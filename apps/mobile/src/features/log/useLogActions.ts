import { useTranslation } from 'react-i18next';

import { createLog, deleteLog, LogValidationError, restoreLog, updateLog } from '@/db/logsRepo';
import type { LogEntryError, LogEntryInput } from '@/db/payloads';
import { haptics } from '@/lib/haptics';
import { useLocalSession } from '@/lib/sessionStore';
import { useToast } from '@/lib/toastStore';

export type SaveResult = { ok: true; id: string } | { ok: false; error: LogEntryError };

const errorKey = {
  endBeforeStart: 'log.endBeforeStart',
  inFuture: 'log.inFuture',
  amountInvalid: 'log.amountInvalid',
  invalidPayload: 'log.invalid',
} as const satisfies Record<LogEntryError, string>;

export function useLogActions() {
  const { t } = useTranslation();
  const { babyId, caregiverId } = useLocalSession();
  const showToast = useToast((s) => s.show);

  async function run(fn: () => Promise<string>, toast: boolean): Promise<SaveResult> {
    try {
      const id = await fn();
      if (toast) {
        haptics.saved();
        showToast({ message: `${t('common.saved')} ✓` });
      }
      return { ok: true, id };
    } catch (e) {
      if (e instanceof LogValidationError) return { ok: false, error: e.code };
      throw e;
    }
  }

  return {
    errorText: (e: LogEntryError) => t(errorKey[e]),
    /** Creates an entry. Pass toast=false for silent writes like starting a timer. */
    create: (input: LogEntryInput, toast = true) => {
      if (!babyId || !caregiverId) throw new Error('No local session');
      return run(() => createLog(babyId, caregiverId, input), toast);
    },
    update: (id: string, input: LogEntryInput, toast = true) =>
      run(async () => {
        await updateLog(id, input);
        return id;
      }, toast),
    remove: async (id: string) => {
      await deleteLog(id);
      haptics.tap();
      showToast({
        message: t('common.deleted'),
        actionLabel: t('common.undo'),
        onAction: () => void restoreLog(id),
      });
    },
  };
}
