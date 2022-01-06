import isEmptyControlValue from './is-empty-control-value';
import passwordValidator from 'password-validator';

export default function validatePassword(value) {
  if (isEmptyControlValue(value)) return '';

  const schema = new passwordValidator();
  schema
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(1)
    .has()
    .symbols(1);

  const validateDetail = schema.validate(value, { details: true });

  let validationresult = validateDetail.map((a) => a.message).join('; \r\n');

  return validationresult;
}
