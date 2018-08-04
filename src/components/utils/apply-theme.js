/**
 * Apply a "theme*" prop to a class list.
 *
 * @param {string} original
 * @param {string | string => string} [theme]
 * @return {string}
 */
export default function applyTheme(original, theme) {
  if (!theme) {
    return original;
  }
  if (typeof theme === 'string') {
    return original + ' ' + theme;
  }
  if (typeof theme === 'function') {
    return theme(original);
  }
}
