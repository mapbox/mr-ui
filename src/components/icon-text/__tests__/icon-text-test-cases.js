import React from 'react';
import IconText from '../icon-text';
import Icon from '../../icon';

const testCases = {};

testCases.iconBefore = {
  description: 'icon before',
  component: IconText,
  props: {
    children: 'Copy',
    iconBefore: 'clipboard'
  }
};

testCases.iconAfter = {
  description: 'icon after',
  component: IconText,
  props: {
    children: 'Next',
    iconAfter: 'chevron-right'
  }
};

testCases.largeSpacing = {
  description: 'large spacing',
  component: IconText,
  props: {
    children: 'Done',
    iconBefore: 'check',
    spacing: 'large'
  }
};

testCases.bothIcons = {
  description: 'icons on both sides, including a non-string one',
  component: IconText,
  props: {
    children: 'What',
    iconBefore: 'check',
    iconAfter: <Icon name="github" />
  }
};

testCases.buttonyDisplay = {
  description: 'a buttony look',
  element: (
    <button type="button" className="link txt-bold txt-s block">
      <IconText iconBefore="duplicate">Duplicate</IconText>
    </button>
  )
};

export { testCases };
