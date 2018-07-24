import React from 'react';
import MbxIconText from '../mbx-icon-text';
import Icon from '../../icon';

const testCases = {};

testCases.iconBefore = {
  description: 'icon before',
  component: MbxIconText,
  props: {
    children: 'Copy',
    iconBefore: 'clipboard'
  }
};

testCases.iconAfter = {
  description: 'icon after',
  component: MbxIconText,
  props: {
    children: 'Next',
    iconAfter: 'chevron-right'
  }
};

testCases.largeSpacing = {
  description: 'large spacing',
  component: MbxIconText,
  props: {
    children: 'Done',
    iconBefore: 'check',
    spacing: 'large'
  }
};

testCases.bothIcons = {
  description: 'icons on both sides, including a non-string one',
  component: MbxIconText,
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
      <MbxIconText iconBefore="duplicate">Duplicate</MbxIconText>
    </button>
  )
};

export { testCases };
