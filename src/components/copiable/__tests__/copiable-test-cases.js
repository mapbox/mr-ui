import Copiable from '../copiable';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: Copiable,
  props: {
    value:
      'thetextyoucopythetextyoucopythetextyoucopythetext you copy the text you copy '
  }
};

testCases.focusTrapPaused = {
  description: 'focusTrapPaused',
  component: Copiable,
  props: {
    focusTrapPaused: true,
    value:
      'thetextyoucopythetextyoucopythetextyoucopythetext you copy the text you copy '
  }
};

testCases.truncated = {
  description: 'truncated',
  component: Copiable,
  props: {
    truncated: true,
    value:
      'the text you copy the text you copy the text you copy the text you copy the text you copy '
  }
};

export { testCases };
