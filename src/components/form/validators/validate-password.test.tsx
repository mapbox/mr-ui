import validatePassword from './validate-password';
import { render, screen } from '@testing-library/react';

test('accepts empty value', () => {
  expect(validatePassword('')).toBe(null);
});

test('valid returns ""', () => {
  expect(validatePassword('Mapbox123~')).toBe(null);
});

test('Invalid password is too short returns error message', () => {
  render(validatePassword('Mbx12~'));
  expect(screen.getByText('Password must be at least eight characters long.')).toBeInTheDocument();
});

test('Invalid password missing number returns error message', () => {
  render(validatePassword('MAPbox@~'));
  expect(screen.getByText('Password must have a number.')).toBeInTheDocument();
});

test('Invalid password missing special characters returns error message', () => {
  render(validatePassword('Mapbox123'));
  expect(screen.getByText('Password must have a special character like ".!@#$%^&*()+-=,".')).toBeInTheDocument();
});

test('Invalid password missing uppercase returns error message', () => {
  render(validatePassword('mapbox123~'));
  expect(screen.getByText('Password must have an uppercase letter.')).toBeInTheDocument();
});

test('Invalid password missing lowercase letter returns correct error message', () => {
  render(validatePassword('MAPBOX123~'));
  expect(screen.getByText('Password must have a lowercase letter.')).toBeInTheDocument();
});

test('Invalid password missing multiple password rules returns correct error messages', () => {
  const { baseElement } = render(validatePassword('~'));
  expect(baseElement).toMatchSnapshot();
});
