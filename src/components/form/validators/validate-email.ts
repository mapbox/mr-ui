import isEmptyControlValue from './is-empty-control-value';

export default function validateEmail(value: string) {
  if (isEmptyControlValue(value)) return '';

  if (!/@/.test(value)) {
    return 'Please enter an email address that includes @';
  }

  return '';
}
