import shallowEqualObjects from './shallow-equal-objects';

test('returns true', () => {
  expect(
    shallowEqualObjects({ a: true, b: false }, { a: true, b: false })
  ).toBe(true);
  expect(
    shallowEqualObjects({ a: 'true', b: 232 }, { a: 'true', b: 232 })
  ).toBe(true);
  const mockedFn = jest.fn();
  expect(
    shallowEqualObjects({ a: mockedFn, b: 232 }, { a: mockedFn, b: 232 })
  ).toBe(true);
  expect(
    shallowEqualObjects(
      { a: true, b: { c: false } },
      { a: true, b: { c: false } },
      ['b']
    )
  ).toBe(true);
});

test('returns false', () => {
  expect(shallowEqualObjects({ a: true, b: false }, { a: true })).toBe(false);
  expect(shallowEqualObjects({ a: true }, { a: false })).toBe(false);
  expect(shallowEqualObjects({ a: 'a' }, { a: 'b' })).toBe(false);
  expect(
    shallowEqualObjects({ a: jest.fn(), b: 232 }, { a: jest.fn(), b: 232 })
  ).toBe(false);
  expect(
    shallowEqualObjects(
      { a: true, b: { c: false } },
      { a: true, b: { c: true } },
      ['b']
    )
  ).toBe(false);
});

test('errors', () => {
  expect(() => {
    shallowEqualObjects(
      { a: true, b: { c: false } },
      { a: true, b: { c: true } },
      ['c']
    );
  }).toThrow(/can only compare objects/);
  expect(() => {
    shallowEqualObjects(
      { a: true, b: { c: { d: false } } },
      { a: true, b: { c: { d: true } } },
      ['b']
    );
  }).toThrow(/can only compare objects/);
});
