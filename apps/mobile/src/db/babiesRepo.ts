import { eq } from 'drizzle-orm';

import { db } from './client';
import { babies } from './schema';

export function babyQuery(babyId: string) {
  return db.select().from(babies).where(eq(babies.id, babyId)).limit(1);
}
