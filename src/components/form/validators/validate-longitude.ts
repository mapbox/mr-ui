import isEmptyControlValue from './is-empty-control-value';
import validateNumberBetween from './validate-number-between';

const checker = validateNumberBetween(-180, 180);

export default function validateLongitude(value: any) {
  if (isEmptyControlValue(value)) return '';

  return checker(value);
}
