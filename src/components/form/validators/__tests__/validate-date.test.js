import validateDate from '../validate-date';

test('accepts empty value', () => {
  expect(validateDate('')).toBe('');
});

test('accepts a date Object', () => {
  expect(validateDate(new Date())).toBe('');
});

test('rejects other things', () => {
  expect(validateDate('asdf')).toBe('Please select a valid date');
  expect(
    validateDate({
      someDate: new Date()
    })
  ).toBe('Please select a valid date');
  expect(validateDate([])).toBe('Please select a valid date');
  expect(validateDate(1234)).toBe('Please select a valid date');
});
