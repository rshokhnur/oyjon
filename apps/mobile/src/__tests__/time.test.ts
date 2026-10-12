import { babyAge, durationParts, timeSince } from '@/lib/time';
import { formatElapsed } from '@/lib/format';

const at = (y: number, m: number, d: number, h = 12, min = 0) => new Date(y, m - 1, d, h, min);

describe('timeSince', () => {
  const now = new Date('2026-10-12T10:00:00.000Z');

  it('is null under a minute', () => {
    expect(timeSince('2026-10-12T09:59:30.000Z', now)).toBeNull();
  });

  it('splits into hours and minutes', () => {
    expect(timeSince('2026-10-12T07:45:00.000Z', now)).toEqual({ hours: 2, minutes: 15 });
    expect(timeSince('2026-10-12T09:55:00.000Z', now)).toEqual({ hours: 0, minutes: 5 });
  });

  it('works across days', () => {
    expect(timeSince('2026-10-11T09:00:00.000Z', now)).toEqual({ hours: 25, minutes: 0 });
  });

  it('never goes negative', () => {
    expect(durationParts(-5000)).toEqual({ hours: 0, minutes: 0 });
  });
});

describe('babyAge', () => {
  it('is 0 months 0 days on the birth day', () => {
    expect(babyAge('2026-10-12', at(2026, 10, 12))).toEqual({ months: 0, days: 0 });
  });

  it('counts days in the first month', () => {
    expect(babyAge('2026-10-01', at(2026, 10, 12))).toEqual({ months: 0, days: 11 });
  });

  it('counts months and days', () => {
    expect(babyAge('2026-06-30', at(2026, 10, 12))).toEqual({ months: 3, days: 12 });
  });

  it('rolls the month over on the monthly birthday', () => {
    expect(babyAge('2026-07-15', at(2026, 8, 14))).toEqual({ months: 0, days: 30 });
    expect(babyAge('2026-07-15', at(2026, 8, 15))).toEqual({ months: 1, days: 0 });
  });

  it('treats the last day of a short month as the birthday for babies born on the 31st', () => {
    expect(babyAge('2026-01-31', at(2026, 2, 27))).toEqual({ months: 0, days: 27 });
    expect(babyAge('2026-01-31', at(2026, 2, 28))).toEqual({ months: 1, days: 0 });
    expect(babyAge('2026-01-31', at(2026, 3, 30))).toEqual({ months: 1, days: 30 });
    expect(babyAge('2026-01-31', at(2026, 3, 31))).toEqual({ months: 2, days: 0 });
  });

  it('handles leap years', () => {
    expect(babyAge('2028-01-31', at(2028, 2, 29))).toEqual({ months: 1, days: 0 });
    expect(babyAge('2028-02-29', at(2029, 2, 28))).toEqual({ months: 12, days: 0 });
  });

  it('crosses the year end', () => {
    expect(babyAge('2026-11-20', at(2027, 1, 5))).toEqual({ months: 1, days: 16 });
  });

  it('ignores the time of day', () => {
    expect(babyAge('2026-10-11', at(2026, 10, 12, 0, 5))).toEqual({ months: 0, days: 1 });
    expect(babyAge('2026-10-11', at(2026, 10, 12, 23, 55))).toEqual({ months: 0, days: 1 });
  });

  it('returns zero for a future birth date', () => {
    expect(babyAge('2026-12-01', at(2026, 10, 12))).toEqual({ months: 0, days: 0 });
  });
});

describe('formatElapsed', () => {
  it('formats m:ss and h:mm:ss', () => {
    expect(formatElapsed(0)).toBe('0:00');
    expect(formatElapsed(65_000)).toBe('1:05');
    expect(formatElapsed(3_725_000)).toBe('1:02:05');
  });
});
