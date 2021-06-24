import validateLatitude from '../validate-latitude';

test('accepts empty value', () => {
  expect(validateLatitude('')).toBe('');
});

test('valid returns ""', () => {
  ['90', 90].forEach((val) => {
    expect(validateLatitude(val)).toBe('');
  });
});

test('invalid returns correct error message', () => {
  ['string', '1abc', true, false].forEach((val) => {
    expect(validateLatitude(val)).toBe('Please enter a number');
  });

  [-91, '91'].forEach((val) => {
    expect(validateLatitude(val)).toBe(
      'Please enter a number between -90 and 90'
    );
  });
});
