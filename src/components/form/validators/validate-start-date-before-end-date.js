import isEmptyControlValue from './is-empty-control-value';
import validateDate from './validate-date';

export default function validateStartDateBeforeEndDate({ date, endDate }) {
  const startDate = date;
  if (isEmptyControlValue(startDate)) {
    // if you have an end date, you must have a start date
    return 'Please select a start date';
  }
  if (isEmptyControlValue(endDate)) {
    // if you have an end date, you must have a start date
    return 'Please select an end date';
  }
  const startDateError = validateDate(startDate);
  if (startDateError) {
    return validateDate(startDate);
  }
  const endDateError = validateDate(endDate);
  if (endDateError) {
    return validateDate(endDate);
  }
  if (startDate.getTime() > endDate.getTime()) {
    return 'Please select a start date before your end date';
  }
  return '';
}
