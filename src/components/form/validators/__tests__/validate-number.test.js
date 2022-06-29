import validateNumber from '../validate-number';

test('accepts empty value', () => {
  expect(validateNumber('')).toBe('');
});

[0, 1, '1', -1, 1.2, '1.2'].forEach((valid) => {
  test(`valid ${valid} returns ""`, () => {
    expect(validateNumber(valid)).toBe('');
  });
});

['foo', '1abc', false, true].forEach((invalid) => {
  test(`invalid ${invalid} returns correct error message`, () => {
    expect(validateNumber(invalid)).toBe('Please enter a number');
  });
});
