export default function omit(
  source: ({ [key: string]: any }) = {},
  omittedProperties: Array<string> = []
): ({ [key: string]: any }) {
  return Object.keys(source).reduce((result, key) => {
    if (omittedProperties.indexOf(key) === -1) {
      result[key] = source[key];
    }
    return result;
  }, {});
}
