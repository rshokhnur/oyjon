import { randomUUID } from 'expo-crypto';

/** Device-made UUID, so rows can sync later without id clashes. */
export function newId(): string {
  return randomUUID();
}
