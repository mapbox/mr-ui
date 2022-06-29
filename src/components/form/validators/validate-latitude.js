import isEmptyControlValue from './is-empty-control-value';
import validateNumberBetween from './validate-number-between';

const checker = validateNumberBetween(-90, 90);

export default function validateLatitude(value) {
  if (isEmptyControlValue(value)) return '';

  return checker(value);
}
