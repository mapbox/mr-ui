import validateZoom from '../validate-zoom';

test('accepts empty value', () => {
  expect(validateZoom('')).toBe('');
});

test('valid returns ""', () => {
  ['0', 22].forEach((val) => {
    expect(validateZoom(val)).toBe('');
  });
});

test('invalid returns correct error message', () => {
  ['string', '1abc', true, false].forEach((val) => {
    expect(validateZoom(val)).toBe('Please enter a number');
  });

  [-1, '23'].forEach((val) => {
    expect(validateZoom(val)).toBe('Please enter a number between 0 and 22');
  });
});
