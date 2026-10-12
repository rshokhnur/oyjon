import type { BreastFeedPayload } from '@/db/payloads';

type Side = 'left' | 'right';

export function newBreastFeed(side: Side, nowIso: string): BreastFeedPayload {
  return { method: 'breast', leftMs: 0, rightMs: 0, activeSide: side, activeSince: nowIso, lastSide: side };
}

function bank(p: BreastFeedPayload, nowIso: string): BreastFeedPayload {
  if (!p.activeSide || !p.activeSince) return p;
  const elapsed = Math.max(0, Date.parse(nowIso) - Date.parse(p.activeSince));
  return {
    ...p,
    leftMs: p.leftMs + (p.activeSide === 'left' ? elapsed : 0),
    rightMs: p.rightMs + (p.activeSide === 'right' ? elapsed : 0),
    activeSide: null,
    activeSince: null,
  };
}

/** Tapping a side: starts it, switches to it, or pauses it if it's already running. */
export function tapSide(p: BreastFeedPayload, side: Side, nowIso: string): BreastFeedPayload {
  const banked = bank(p, nowIso);
  if (p.activeSide === side) return banked;
  return { ...banked, activeSide: side, activeSince: nowIso, lastSide: side };
}

export function finishBreastFeed(p: BreastFeedPayload, nowIso: string): BreastFeedPayload {
  return bank(p, nowIso);
}

export function sideMs(p: BreastFeedPayload, side: Side, now: Date): number {
  const base = side === 'left' ? p.leftMs : p.rightMs;
  if (p.activeSide !== side || !p.activeSince) return base;
  return base + Math.max(0, now.getTime() - Date.parse(p.activeSince));
}

export function totalMs(p: BreastFeedPayload, now: Date): number {
  return sideMs(p, 'left', now) + sideMs(p, 'right', now);
}
