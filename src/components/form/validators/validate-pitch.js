import isEmptyControlValue from './is-empty-control-value';
import validateNumberBetween from './validate-number-between';

const checker = validateNumberBetween(0, 60);

export default function validateBearing(value) {
  if (isEmptyControlValue(value)) return '';

  return checker(value);
}
