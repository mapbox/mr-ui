import validateAccessToken from '../validate-access-token';

test('accepts empty value', () => {
  expect(validateAccessToken('')).toBe('');
});

test('valid returns ""', () => {
  ['pk.access.token', 'sk.access.token', 'tk.access.token'].forEach((val) => {
    expect(validateAccessToken(val)).toBe('');
  });
});

test('invalid returns correct error message', () => {
  expect(validateAccessToken('not.okay')).toBe(
    'Please enter a valid access token'
  );
});
