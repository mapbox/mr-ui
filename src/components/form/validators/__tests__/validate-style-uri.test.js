import validateStyleUri from '../validate-style-uri';

test('accepts empty value', () => {
  expect(validateStyleUri('')).toBe('');
});

test('valid returns ""', () => {
  expect(validateStyleUri('mapbox://styles/owner/okay')).toBe('');
});

test('invalid returns correct error message', () => {
  expect(validateStyleUri('notmapbox://')).toBe(
    'Please enter a valid style URI'
  );
  expect(validateStyleUri('mapbox://styles/no-owner')).toBe(
    'Please enter a valid style URI'
  );
});
