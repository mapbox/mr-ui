import validateNumber from './validate-number';

export default function validateNumberBetween(low: string | number, high: string | number) {
  return (value: string | number | boolean): string => {
    const numberError = validateNumber(value);
    if (numberError) return numberError;
    if (Number(value) < Number(low) || Number(value) > Number(high)) {
      return `Please enter a number between ${String(low)} and ${String(high)}`;
    }
    return '';
  };
}
