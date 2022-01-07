import validatePassword from '../validate-password';

test('accepts empty value', () => {
  expect(validatePassword('')).toBe('');
});

test('valid returns ""', () => {
  expect(validatePassword('Mapbox123~')).toBe('');
});

test('invalid missing symbol returns error', () => {
  expect(validatePassword('Mapbox123')).toContain(
    'The password must have a punctuation'
  );
});

test('invalid too short returns error', () => {
  expect(validatePassword('Mbx12~')).toContain(
    'The password must be at least eight characters long'
  );
});

test('invalid missing uppercase returns error', () => {
  expect(validatePassword('mapbox123~')).toContain(
    'The password must have a uppercase letter'
  );
});

test('invalid missing lowercase letter returns correct error message', () => {
  expect(validatePassword('MAPBOX123~')).toContain(
    'The password must have a lowercase letter'
  );
});
