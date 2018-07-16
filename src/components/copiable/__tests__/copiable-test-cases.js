import Copiable from '../copiable';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: Copiable,
  props: {
    value:
      'the text you copy the text you copy the text you copy the text you copy the text you copy '
  }
};

testCases.allProps = {
  description: 'all props',
  component: Copiable,
  props: {
    value:
      'the text you copy the text you copy the text you copy the text you copy the text you copy ',
    themeWrapper: 'relative',
    themeCopyButtonContainer: 'absolute z2 bottom right mr3 mt3 color-white',
    themeCopyButton: 'btn round-r bg-gray-dark px0 py0',
    themeText: 'color-gray bg-darken5 round-l txt-fancy py6 px6 txt-s',
    themeTooltip: 'round py6 px12 shadow-darken25 bg-blue'
  }
};

export { testCases };
