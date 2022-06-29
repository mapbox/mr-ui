import maybeAddPeriod from '../maybe-add-period';

describe('maybeAddPeriod', () => {
  test('returns an empty string when passed an empty string', () => {
    expect(maybeAddPeriod('')).toBe('');
  });

  test('appends a period to a string with no closing punctuation', () => {
    expect(maybeAddPeriod('fo!?o')).toBe('fo!?o.');
  });

  test('does not append a period to a string ending with a period', () => {
    expect(maybeAddPeriod('foo.')).toBe('foo.');
  });

  test('does not append a period to a string ending with an exclamation mark', () => {
    expect(maybeAddPeriod('foo!')).toBe('foo!');
  });

  test('does not append a period to a string ending with a question mark', () => {
    expect(maybeAddPeriod('foo?')).toBe('foo?');
  });
});
