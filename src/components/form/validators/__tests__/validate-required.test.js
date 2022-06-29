import validateRequired from '../validate-required';

test('rejects undefined', () => {
  expect(validateRequired('test value')(undefined)).toBe(
    'Please enter a test value'
  );
});

test('rejects null', () => {
  expect(validateRequired('test value')(null)).toBe(
    'Please enter a test value'
  );
});

test('rejects empty string', () => {
  expect(validateRequired('test value')('')).toBe('Please enter a test value');
});

test('accepts a string', () => {
  expect(validateRequired('test value')('penny@mapbox.com')).toBe('');
});

test('accepts a numbery string', () => {
  expect(validateRequired('test value')('0')).toBe('');
});

test('accepts false', () => {
  expect(validateRequired('test value')(false)).toBe('');
});

test('uses a full message', () => {
  expect(validateRequired(null, 'Answer the question.')()).toBe(
    'Answer the question.'
  );
});
