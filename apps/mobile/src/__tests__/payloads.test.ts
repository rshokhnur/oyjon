import { validateLogEntry, parsePayload, type LogEntryInput } from '@/db/payloads';
import { finishBreastFeed, newBreastFeed, sideMs, tapSide, totalMs } from '@/features/log/breastTimer';

const now = new Date('2026-10-12T10:00:00.000Z');
const iso = (min: number) => new Date(now.getTime() + min * 60_000).toISOString();

describe('validateLogEntry', () => {
  it('accepts a bottle feed', () => {
    const e: LogEntryInput = { type: 'feed', startedAt: iso(-10), endedAt: null, payload: { method: 'bottle', amountMl: 120 } };
    expect(validateLogEntry(e, now)).toBeNull();
  });

  it.each([0, -5, 501, 12.5])('rejects a bottle amount of %s ml', (amountMl) => {
    const e: LogEntryInput = { type: 'feed', startedAt: iso(-10), endedAt: null, payload: { method: 'bottle', amountMl } };
    expect(validateLogEntry(e, now)).toBe('amountInvalid');
  });

  it('accepts a finished breast feed', () => {
    const payload = finishBreastFeed(newBreastFeed('left', iso(-20)), iso(-5));
    expect(validateLogEntry({ type: 'feed', startedAt: iso(-20), endedAt: iso(-5), payload }, now)).toBeNull();
  });

  it('accepts a sleep range and rejects an end before the start', () => {
    expect(validateLogEntry({ type: 'sleep', startedAt: iso(-90), endedAt: iso(-30), payload: {} }, now)).toBeNull();
    expect(validateLogEntry({ type: 'sleep', startedAt: iso(-30), endedAt: iso(-90), payload: {} }, now)).toBe('endBeforeStart');
  });

  it('rejects times in the future', () => {
    expect(validateLogEntry({ type: 'diaper', startedAt: iso(10), endedAt: null, payload: { kind: 'wet' } }, now)).toBe('inFuture');
    expect(validateLogEntry({ type: 'sleep', startedAt: iso(-10), endedAt: iso(10), payload: {} }, now)).toBe('inFuture');
  });

  it('allows a little clock skew', () => {
    expect(validateLogEntry({ type: 'diaper', startedAt: iso(0.5), endedAt: null, payload: { kind: 'wet' } }, now)).toBeNull();
  });

  it('rejects a bad diaper kind', () => {
    const e = { type: 'diaper', startedAt: iso(-1), endedAt: null, payload: { kind: 'green' } } as unknown as LogEntryInput;
    expect(validateLogEntry(e, now)).toBe('invalidPayload');
  });
});

describe('parsePayload', () => {
  it('returns null for broken stored payloads', () => {
    expect(parsePayload('diaper', { kind: 'wet' })).toEqual({ kind: 'wet' });
    expect(parsePayload('diaper', { kind: 'nope' })).toBeNull();
    expect(parsePayload('feed', 'garbage')).toBeNull();
  });
});

describe('breast timer', () => {
  it('runs one side, switches, pauses and finishes', () => {
    let p = newBreastFeed('left', iso(-20));
    expect(sideMs(p, 'left', new Date(iso(-15)))).toBe(5 * 60_000);

    p = tapSide(p, 'right', iso(-10)); // switch after 10 min of left
    expect(p.activeSide).toBe('right');
    expect(p.leftMs).toBe(10 * 60_000);

    p = tapSide(p, 'right', iso(-4)); // pause right after 6 min
    expect(p.activeSide).toBeNull();
    expect(p.rightMs).toBe(6 * 60_000);
    expect(p.lastSide).toBe('right');

    p = finishBreastFeed(p, iso(0));
    expect(totalMs(p, now)).toBe(16 * 60_000);
  });
});
