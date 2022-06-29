import validatePassword from '../validate-password';
import { shallow } from 'enzyme';
import React from 'react';

test('accepts empty value', () => {
  expect(validatePassword('')).toBe('');
});

test('valid returns ""', () => {
  expect(validatePassword('Mapbox123~')).toBe('');
});

test('Invalid password is too short returns error message', () => {
  const result = shallow(validatePassword('Mbx12~')).contains(
    <li className="list-group-item">
      Password must be at least eight characters long.
    </li>
  );
  expect(result).toBeTruthy();
});

test('Invalid password missing number returns error message', () => {
  const result = shallow(validatePassword('MAPbox@~')).contains(
    <li className="list-group-item">Password must have a number.</li>
  );
  expect(result).toBeTruthy();
});

test('Invalid password missing special characters returns error message', () => {
  let element = shallow(validatePassword('Mapbox123')).contains(
    <li className="list-group-item">
      Password must have a special character like ".!@#$%^&*()+-=,".
    </li>
  );
  expect(element).toBeTruthy();
});

test('Invalid password missing uppercase returns error message', () => {
  const result = shallow(validatePassword('mapbox123~')).contains(
    <li className="list-group-item">Password must have an uppercase letter.</li>
  );
  expect(result).toBeTruthy();
});

test('Invalid password missing lowercase letter returns correct error message', () => {
  const result = shallow(validatePassword('MAPBOX123~')).contains(
    <li className="list-group-item">Password must have a lowercase letter.</li>
  );
  expect(result).toBeTruthy();
});

test('Invalid password missing multiple password rules returns correct error messages', () => {
  const result = shallow(validatePassword('~')).contains(
    <li className="list-group-item">Password must have a lowercase letter.</li>,
    <li className="list-group-item">Password must have a number.</li>,
    <li className="list-group-item">
      Password must have an uppercase letter.
    </li>,
    <li className="list-group-item">
      Password must be at least eight characters long.
    </li>
  );
  expect(result).toBeTruthy();
});
