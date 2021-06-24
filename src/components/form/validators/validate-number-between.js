import validateNumber from './validate-number';

export default function validateNumberBetween(low, high) {
  return (value) => {
    const numberError = validateNumber(value);
    if (numberError) return numberError;
    if (Number(value) < low || Number(value) > high) {
      return `Please enter a number between ${String(low)} and ${String(high)}`;
    }
    return '';
  };
}
