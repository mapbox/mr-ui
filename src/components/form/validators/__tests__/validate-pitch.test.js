import validatePitch from '../validate-pitch';

test('accepts empty value', () => {
  expect(validatePitch('')).toBe('');
});

test('valid returns ""', () => {
  ['0', 60].forEach((val) => {
    expect(validatePitch(val)).toBe('');
  });
});

test('invalid returns correct error message', () => {
  ['string', '1abc', true, false].forEach((val) => {
    expect(validatePitch(val)).toBe('Please enter a number');
  });

  expect(validatePitch(-1)).toBe('Please enter a number between 0 and 60');
  expect(validatePitch(-61)).toBe('Please enter a number between 0 and 60');
});
