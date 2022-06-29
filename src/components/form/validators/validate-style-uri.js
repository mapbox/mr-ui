import isEmptyControlValue from './is-empty-control-value';

export default function validateStyleUri(value) {
  if (isEmptyControlValue(value)) return '';

  if (!/^mapbox:\/\/styles\/[^/]+\/[^/]+$/.test(value)) {
    return 'Please enter a valid style URI';
  }

  return '';
}
