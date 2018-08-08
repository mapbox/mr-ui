export default function shallowEqualObjects(
  objA,
  objB,
  allowedObjectKeys = []
) {
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    const key = aKeys[i];
    const aVal = objA[key];
    const bVal = objB[key];
    if (allowedObjectKeys.indexOf(key) !== -1) {
      return shallowEqualObjects(aVal, bVal);
    }

    if (typeof aVal === 'object') {
      throw new Error(
        'shallowEqualObjects can only compare objects whose values are primitives or functions, unless you allow for an object value with the allowedObjectKeys argument'
      );
    }
    if (aVal !== bVal) {
      return false;
    }
  }

  return true;
}
