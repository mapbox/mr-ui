import validateStartDateBeforeEndDate from '../validate-start-date-before-end-date';

test('accepts a proper date range', () => {
  expect(
    validateStartDateBeforeEndDate({
      date: new Date('2017-08-15T15:05:04+00:00'),
      endDate: new Date('2017-08-16T15:05:04+00:00')
    })
  ).toBe('');
});

test('rejects end date before start date', () => {
  expect(
    validateStartDateBeforeEndDate({
      date: new Date('2017-08-16T15:05:04+00:00'),
      endDate: new Date('2017-08-15T15:05:04+00:00')
    })
  ).toBe('Please select a start date before your end date');
});

test('rejects non-dates', () => {
  expect(validateStartDateBeforeEndDate('asdf')).toBe(
    'Please select a start date'
  );
  expect(
    validateStartDateBeforeEndDate({
      date: 'asdf',
      endDate: new Date('2017-08-16T15:05:04+00:00')
    })
  ).toBe('Please select a valid date');
  expect(
    validateStartDateBeforeEndDate({
      date: new Date('2017-08-16T15:05:04+00:00'),
      endDate: 1234
    })
  ).toBe('Please select a valid date');
  expect(
    validateStartDateBeforeEndDate({
      date: {},
      endDate: []
    })
  ).toBe('Please select a valid date');
});

test('rejects end date without a start date', () => {
  expect(
    validateStartDateBeforeEndDate({
      endDate: new Date('2017-08-15T15:05:04+00:00')
    })
  ).toBe('Please select a start date');
});

test('rejects start date without an end date', () => {
  expect(
    validateStartDateBeforeEndDate({
      date: new Date('2017-08-15T15:05:04+00:00')
    })
  ).toBe('Please select an end date');
});
