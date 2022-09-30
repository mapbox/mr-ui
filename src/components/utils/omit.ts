type PrimitiveDataTypes = string | boolean | number;
type PropertyValues =
  | PrimitiveDataTypes
  | { [key: string]: PrimitiveDataTypes };

export default function omit(
  source: { [key: string]: any } = {},
  omittedProperties: Array<string> = []
): { [key: string]: PropertyValues } {
  return Object.keys(source).reduce((result, key) => {
    if (omittedProperties.indexOf(key) === -1) {
      result[key] = source[key];
    }
    return result;
  }, {});
}
