import validateBearing from '../validate-bearing';

test('accepts empty value', () => {
  expect(validateBearing('')).toBe('');
});

test('valid returns ""', () => {
  ['180', 180].forEach((val) => {
    expect(validateBearing(val)).toBe('');
  });
});

test('invalid returns correct error message', () => {
  ['string', '1abc', true, false].forEach((val) => {
    expect(validateBearing(val)).toBe('Please enter a number');
  });

  [-181, '181'].forEach((val) => {
    expect(validateBearing(val)).toBe(
      'Please enter a number between -180 and 180'
    );
  });
});
