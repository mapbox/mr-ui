import variables from '@mapbox/mbx-assembly/dist/variables.json';

interface Constants {
  [key: string]: string;
}

const styles: Constants = {
  h1: 'txt-h1-mm txt-h2 txt-fancy mb6',
  h2: 'txt-h2-mm txt-h3 txt-fancy mb6',
  h3: 'txt-h3-mm txt-h4 txt-fancy mb6',
  h4: 'txt-h4-mm txt-h5 txt-fancy mb6',
  h5: 'txt-s txt-uppercase txt-spacing1 txt-fancy mb3',
  pLarge: 'txt-l mb12',
  pMedium: 'txt-m mb12',
  pSmall: 'txt-s mb12',
  btnPrimary: 'btn px24 py12 txt-s',
  btnSecondary: 'btn px24 py12 txt-s btn--stroke',
  gridLarge: 'grid grid--gut36 grid--gut60-mm grid--gut120-mxl',
  gridMedium: 'grid grid--gut24 grid--gut36-mm grid--gut60-mxl',
  gridSmall: 'grid grid--gut12 grid--gut18-mm grid--gut24-mxl',
  gridXSmall: 'grid grid--gut6',
  sectionLarge: 'py36 py60-mm py120-xl',
  sectionSmall: 'py24 py36-mm py60',
  loaderInline: 'loading loading--s',
  loaderLocal: 'loading absolute top left right bottom bg-gray-faint'
};

// Modifications to _styles are triggered by
// setStyles / mergeStyles and are designed to persist.
let _styles = styles;

/**
 * Replace existing constant object with a new constant object. Use
 * with no argument to reset constant object to it's default.
 * @param constants {object} an object that conforms to { [id]: string }.
 */
function setStyles(constants: Constants = styles) {
  _styles = { ...constants };
}

/**
 * Merge a new constant object with existing constants.
 * @param constants {object} an object that conforms to { [id]: string }.
 */
function mergeStyles(constants: Constants) {
  _styles = { ..._styles, ...constants };
}

/**
 * Get the classlist for a style constant.
 * @param constant {string} a string corresponding to a constant that resolves to a class list.
 * @param exclude {string | array<string>} a list of classes to exclude from the style constant.
 * @return {string} a space-separated list of classes.
 */
function getStyle(constant: string, exclude?: string | Array<string>): string {
  if (!_styles[constant]) {
    throw Error(`${constant} is not a valid constant.`);
  }
  let classList = _styles[constant];

  if (exclude && exclude.length > 0) {
    classList = classList
      .split(' ')
      .filter((c: string) => {
        return exclude.indexOf(c) === -1;
      })
      .join(' ');
  }

  return classList;
}

/**
 * Consistant color themes for components.
 * @param theme {string}
 */
function getTheme(theme?: 'dark' | 'warning' | 'error' | 'light') {
  switch (theme) {
    case 'dark':
      return {
        background: 'bg-gray-dark',
        borderColor: 'border--gray-dark',
        color: 'color-white',
        fill: variables['--gray-dark']
      };
    case 'warning':
      return {
        background: 'bg-orange-light',
        borderColor: 'border--orange',
        color: 'color-orange-deep',
        fill: variables['--orange-deep']
      };
    case 'error':
      return {
        background: 'bg-red-faint',
        borderColor: 'border--red',
        color: 'color-red-deep',
        fill: variables['--red-deep']
      };
    case 'light':
    default:
      return {
        background: 'bg-white',
        borderColor: 'border--white',
        color: 'color-text',
        fill: '#fff'
      };
  };
}

export { mergeStyles, setStyles, getStyle, getTheme };
