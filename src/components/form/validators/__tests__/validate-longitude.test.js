import validateLongitude from '../validate-longitude';

test('accepts empty value', () => {
  expect(validateLongitude('')).toBe('');
});

test('valid returns ""', () => {
  ['180', 180].forEach((val) => {
    expect(validateLongitude(val)).toBe('');
  });
});

test('invalid returns correct error message', () => {
  ['string', '1abc', true, false].forEach((val) => {
    expect(validateLongitude(val)).toBe('Please enter a number');
  });

  [-181, '181'].forEach((val) => {
    expect(validateLongitude(val)).toBe(
      'Please enter a number between -180 and 180'
    );
  });
});
