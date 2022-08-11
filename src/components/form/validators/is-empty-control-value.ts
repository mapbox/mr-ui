export default function isEmptyControlValue(value: any): boolean {
  return value === undefined || value === null || value === '';
}
