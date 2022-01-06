import validatePassword from '../validate-password';

test('accepts empty value', () => {
  expect(validatePassword('')).toBe('');
});

test('valid returns ""', () => {
  expect(validatePassword('Mapbox123~')).toBe('');
});

test('invalid missing symbol returns error', () => {
  expect(validatePassword('Mapbox123')).toBe(
    'The string should have a minimum of 1 symbol'
  );
});

test('invalid too short returns error', () => {
  expect(validatePassword('Mbx12~')).toContain(
    'The string should have a minimum length of 8 characters'
  );
});

test('invalid missing upper case returns error', () => {
  expect(validatePassword('mapbox123~')).toContain(
    'The string should have a minimum of 1 uppercase letter'
  );
});

test('invalid returns correct error message', () => {
  expect(validatePassword('MAPBOX123~')).toContain(
    'The string should have a minimum of 1 lowercase letter'
  );
});
