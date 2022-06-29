import isEmptyControlValue from './is-empty-control-value';

export default function validateNumber(value) {
  if (isEmptyControlValue(value)) return '';

  const coercedValue =
    typeof value === 'string' && value ? Number(value) : value;
  if (isNaN(coercedValue) || typeof coercedValue !== 'number') {
    return 'Please enter a number';
  }

  return '';
}
