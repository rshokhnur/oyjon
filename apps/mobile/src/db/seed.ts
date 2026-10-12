import { eq } from 'drizzle-orm';

import { toLocalYmd } from '@/lib/time';
import { newId } from '@/lib/ids';
import { db } from './client';
import { babies, caregivers, families } from './schema';

// Before accounts (M3) there's one local family, one "me" caregiver and one baby.
// TODO(M3): replace with onboarding + Supabase family.
export async function ensureLocalSeed(): Promise<void> {
  const existing = await db.select({ id: babies.id }).from(babies).limit(1);
  if (existing.length > 0) return;

  const familyId = newId();
  const caregiverId = newId();
  const babyId = newId();
  const birth = new Date();
  birth.setDate(birth.getDate() - 30);

  // expo-sqlite transactions in Drizzle are synchronous.
  db.transaction((tx) => {
    tx.insert(families).values({ id: familyId, regionCode: 'UZ' }).run();
    tx.insert(caregivers).values({ id: caregiverId, familyId, isMe: true, role: 'parent' }).run();
    tx.insert(babies).values({ id: babyId, familyId, name: null, birthDate: toLocalYmd(birth), mode: 'baby' }).run();
  });
}

export async function getMe(): Promise<{ caregiverId: string; babyId: string }> {
  const [me] = await db.select().from(caregivers).where(eq(caregivers.isMe, true)).limit(1);
  const [baby] = await db.select().from(babies).where(eq(babies.familyId, me.familyId)).limit(1);
  return { caregiverId: me.id, babyId: baby.id };
}
