export default function omit(source = {}, omittedProperties = []) {
  return Object.keys(source).reduce((result, key) => {
    if (omittedProperties.indexOf(key) === -1) {
      result[key] = source[key];
    }
    return result;
  }, {});
}
