import validatePassword from '../validate-password';

test('accepts empty value', () => {
  expect(validatePassword('')).toBe('');
});

test('valid returns ""', () => {
  expect(validatePassword('12345678')).toBe('');
});

test('invalid returns correct error message', () => {
  expect(validatePassword('1234567')).toBe(
    'Please enter a password with 8 or more characters'
  );
});
