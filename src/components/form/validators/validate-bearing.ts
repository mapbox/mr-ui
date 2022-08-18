import isEmptyControlValue from './is-empty-control-value';
import validateNumberBetween from './validate-number-between';

const checker = validateNumberBetween(-180, 180);

export default function validateBearing(value: any): string {
  if (isEmptyControlValue(value)) return '';

  return checker(value);
}
