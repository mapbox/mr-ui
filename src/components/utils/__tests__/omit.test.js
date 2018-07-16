import omit from '../omit';

describe('omit', () => {
  test('empty arguments work', () => {
    expect(omit()).toEqual({});
    expect(omit({})).toEqual({});
    expect(omit(undefined, [])).toEqual({});
  });

  test('removes unwanted properties', () => {
    const original = { foo: 1, bar: 2 };
    expect(omit(original, ['foo'])).toEqual({ bar: 2 });
    expect(omit(original, ['bar'])).toEqual({ foo: 1 });
    expect(omit(original, ['foo', 'bar'])).toEqual({});
    expect(omit(original, [])).toEqual({ foo: 1, bar: 2 });
  });

  test('does not confused similar properties', () => {
    const original = { foo: 1, foop: 2, 'foo-bar': 3, afoo: 4 };
    expect(omit(original, ['foo'])).toEqual({
      foop: 2,
      'foo-bar': 3,
      afoo: 4
    });
  });

  test('creates a new object', () => {
    const original = { foo: 1 };
    const result = omit(original, []);
    expect(result).toEqual({ foo: 1 });
    expect(result === original).toBe(false);
  });

  test('maintains references to objects', () => {
    const original = { foo: 1, bar: { baz: 3 }, baz: 4 };
    const result = omit(original, ['foo', 'baz']);
    expect(result).toEqual({ bar: { baz: 3 } });
    expect(result.bar === original.bar).toBe(true);
  });
});
