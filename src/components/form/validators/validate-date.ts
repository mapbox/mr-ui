import isEmptyControlValue from './is-empty-control-value';

export default function validateDate(value: any):string {
  if (isEmptyControlValue(value)) return '';

  if (value instanceof Date === false) {
    return 'Please select a valid date';
  }

  return '';
}
