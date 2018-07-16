import isEmptyControlValue from './is-empty-control-value';

export default function validatePassword(value) {
  if (isEmptyControlValue(value)) return '';

  if (value.length < 8) {
    return 'Please enter a password with 8 or more characters';
  }

  return '';
}
