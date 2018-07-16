import isEmptyControlValue from './is-empty-control-value';
import validateNumberBetween from './validate-number-between';

const checker = validateNumberBetween(0, 22);

export default function validateZoom(value) {
  if (isEmptyControlValue(value)) return '';

  return checker(value);
}
