import validateEmail from '../validate-email';

test('accepts empty value', () => {
  expect(validateEmail('')).toBe('');
});

test('valid returns ""', () => {
  expect(validateEmail('penny@mapbox.com')).toBe('');
});

test('invalid returns correct error message', () => {
  expect(validateEmail('penny')).toBe(
    'Please enter an email address that includes @'
  );
});
