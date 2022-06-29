import { mergeStyles, setStyles, getStyle } from '../styles';

describe('styles utils ', () => {
  test('getStyle works with default styles ', () => {
    expect(getStyle('h1')).toBe('txt-h1-mm txt-h2 txt-fancy mb6');
    expect(getStyle('h1', ['txt-h1-mm', 'txt-fancy'])).toBe('txt-h2 mb6');
  });

  test('setStyle works', () => {
    setStyles({ foo: 'bar', baz: 'cat dog lion' });
    expect(getStyle('foo')).toBe('bar');
    expect(getStyle('baz', 'dog')).toBe('cat lion');
  });

  test('mergeStyles works', () => {
    // reset
    setStyles();
    mergeStyles({ foo: 'bar', baz: 'cat dog lion', h1: 'unicorn' });
    expect(getStyle('foo')).toBe('bar');
    expect(getStyle('baz', 'dog')).toBe('cat lion');
    expect(getStyle('h1')).toBe('unicorn');
    expect(getStyle('h2')).toBe('txt-h2-mm txt-h3 txt-fancy mb6');
  });

  test('getStyle errors on nonexistent constant', () => {
    // reset
    setStyles();
    expect(() => getStyle('foo')).toThrow(
      new Error('foo is not a valid constant.')
    );
  });
});
