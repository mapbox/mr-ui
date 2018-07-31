import React from 'react';
import MbxButton from '../mbx-button';
import Icon from '../../icon';

const testCases = {};

testCases.defaults = {
  description: 'defaults',
  component: MbxButton,
  props: {
    children: 'Buttonized'
  }
};

testCases.linkWithOutlineAndIconBeforeExtraPadding = {
  description: 'link with outline and icon before, extra padding',
  component: MbxButton,
  props: {
    children: 'Go do things',
    href: '#',
    outline: true,
    iconBefore: 'bug',
    width: 'large'
  }
};

testCases.fullWidthColoredTwoIcons = {
  description: 'full width, alternate color, two icons, one of which is custom',
  component: MbxButton,
  props: {
    children: 'Here we are',
    color: 'purple',
    iconBefore: 'bug',
    iconAfter: <Icon name="github" />,
    fullWidth: true
  }
};

testCases.fullWidthColoredTwoIcons = {
  description: 'full width, alternate color, two icons, one of which is custom',
  component: MbxButton,
  props: {
    children: 'Here we are',
    color: 'purple',
    iconBefore: 'bug',
    iconAfter: <Icon name="github" />,
    width: 'full'
  }
};

testCases.studioAppButton = {
  description: 'small style-editor-type button',
  component: MbxButton,
  props: {
    children: 'Turn it off',
    color: 'gray',
    size: 'small',
    corners: true,
    block: true
  }
};

testCases.studioSecondaryAppButton = {
  description: 'small style-editor-type secondary button',
  component: MbxButton,
  props: {
    children: 'Done',
    color: 'gray',
    iconBefore: 'check',
    size: 'small',
    corners: true,
    outline: true,
    block: true
  }
};

testCases.mediumButtonExtended = {
  description:
    'medium div-flavored button with some extended props and transformed classes',
  component: MbxButton,
  props: {
    children: 'Save',
    iconBefore: 'floppy',
    size: 'medium',
    extendProps: {
      role: 'button',
      'data-test': 'foo'
    },
    transformClasses: classes => {
      return classes + ' shadow-darken75 unselectable cursor-pointer';
    },
    component: 'div'
  }
};

export { testCases };
