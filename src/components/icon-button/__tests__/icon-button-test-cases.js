import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import IconButton from '../icon-button';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: IconButton,
  props: {
    onClick: safeSpy(),
    icon: 'close',
    tooltipProps: {
      content: 'close'
    }
  }
};

testCases.allPropsJsxContent = {
  description: 'all props used, JSX content',
  component: IconButton,
  props: {
    onClick: safeSpy(),
    icon: 'bike',
    tooltipProps: {
      content: <span className="txt-bold">tada</span>,
      placement: 'right',
      alignment: 'right',
      disabled: false,
      backgroundColor: 'yellow',
      respondsToClick: true,
      themeTooltip: 'color-gray round px12 py12 shadow-darken25',
      display: 'inline-block',
      testId: 'tooltip-test-id'
    },
    themeButton: 'px12 py12 bg-gray',
    themeIcon: 'color-gray-dark',
    'data-test': 'button-test-id'
  }
};

export { testCases };
