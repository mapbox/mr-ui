import React, { ReactElement } from 'react';
import isEmptyControlValue from './is-empty-control-value';

export default function validatePassword(value: any): ReactElement {
  if (isEmptyControlValue(value)) return null;

  const validations = [];

  if (value.length < 8) {
    validations.push('Password must be at least eight characters long.');
  }

  if (!/[a-z]/.test(value)) {
    validations.push('Password must have a lowercase letter.');
  }

  if (!/[A-Z]/.test(value)) {
    validations.push('Password must have an uppercase letter.');
  }

  if (!/\d/.test(value)) {
    validations.push('Password must have a number.');
  }

  if (!/\W/.test(value)) {
    validations.push(
      'Password must have a special character like ".!@#$%^&*()+-=,".'
    );
  }

  if (validations.length === 0) {
    return null;
  }

  return (
    <ul className="list-group">
      {validations.map((listitem, i) => (
        <li key={i} className="list-group-item">{listitem}</li>
      ))}
    </ul>
  );
}
