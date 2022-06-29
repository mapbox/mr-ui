// If jest.fn is available in the env, use it;
// otherwise, just provide an empty function.
export default function safeSpy(nonSpyImplementation) {
  if (typeof jest !== 'undefined' && typeof jest.fn === 'function') {
    return jest.fn();
  }
  if (nonSpyImplementation) return nonSpyImplementation;
  return function () {};
}
