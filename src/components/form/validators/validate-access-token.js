import isEmptyControlValue from './is-empty-control-value';

export default function validateAccessToken(value) {
  if (isEmptyControlValue(value)) return '';

  if (!/^(pk|sk|tk)\..*\..*$/.test(value)) {
    return 'Please enter a valid access token';
  }

  return '';
}
