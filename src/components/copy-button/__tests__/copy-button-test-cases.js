import CopyButton from '../copy-button';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: CopyButton,
  props: {
    text: 'the text you copy'
  }
};

testCases.allProps = {
  description: 'all props',
  component: CopyButton,
  props: {
    text: 'more copiable text',
    onCopy: safeSpy(),
    feedbackTime: 1000,
    iconButtonProps: {
      tooltipProps: {
        themeTooltip: 'color-gray shadow-darken50',
        placement: 'bottom'
      },
      themeButton: 'px12 py12 btn--red',
      'data-test': 'copy-button',
      themeIcon: 'color-yellow'
    }
  }
};

export { testCases };
