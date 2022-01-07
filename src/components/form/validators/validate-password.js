import isEmptyControlValue from './is-empty-control-value';

export default function validatePassword(value) {
  if (isEmptyControlValue(value)) return '';

  if (value.length < 8)
    return 'The password must be at least eight characters long';

  let validationResult = '';

  if (!/[a-z]/.test(value))
    validationResult += 'The password must have a lowercase letter. \r\n';
  if (!/[A-Z]/.test(value))
    validationResult += 'The password must have a uppercase letter. \r\n';
  if (!/\d/.test(value))
    validationResult += 'The password must have a number. \r\n';
  if (!/\W/.test(value))
    validationResult += 'The password must have a punctuation. \r\n';

  return validationResult;
}
