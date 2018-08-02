import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import MbxButton from '../mbx-button';
import MbxIconText from '../../mbx-icon-text';

const testCases = {};

testCases.primary = {
  description: 'Primary',
  component: MbxButton,
  props: {
    children: 'Primary',
    onClick: safeSpy()
  }
};

testCases.secondary = {
  description: 'Secondary',
  component: MbxButton,
  props: {
    children: 'Secondary',
    variant: 'secondary',
    onClick: safeSpy()
  }
};

testCases.discouraging = {
  description: 'Discouraging',
  component: MbxButton,
  props: {
    children: 'Discouraging',
    variant: 'discouraging',
    onClick: safeSpy()
  }
};

testCases.destructive = {
  description: 'Destructive',
  component: MbxButton,
  props: {
    children: 'Destructive',
    variant: 'destructive',
    onClick: safeSpy()
  }
};

testCases.appPrimary = {
  description: 'AppPrimary',
  component: MbxButton,
  props: {
    children: 'AppPrimary',
    variant: 'appPrimary',
    onClick: safeSpy()
  }
};

testCases.appSecondary = {
  description: 'AppSecondary',
  component: MbxButton,
  props: {
    children: 'AppSecondary',
    variant: 'appSecondary',
    onClick: safeSpy()
  }
};

testCases.linkOutlinePadding = {
  description: 'Link with outline and icon text, extra padding',
  component: MbxButton,
  props: {
    children: <MbxIconText iconBefore="bug">Go do things</MbxIconText>,
    href: '#',
    onClick: safeSpy(),
    outline: true,
    width: 'large'
  }
};

testCases.fullWidthPurple = {
  description: 'Full width, alternate color',
  component: MbxButton,
  props: {
    children: 'Here we are',
    color: 'purple',
    width: 'full'
  }
};

testCases.weird = {
  description:
    'Div styled like a medium destructive button with some extended props and transformed classes',
  component: MbxButton,
  props: {
    children: 'Save',
    size: 'medium',
    variant: 'destructive',
    onClick: safeSpy(),
    transformClasses: classes => {
      return classes + ' shadow-darken75 unselectable cursor-pointer';
    },
    component: 'div',
    role: 'button',
    'data-test': 'foo'
  }
};

testCases.disabled = {
  description: 'Disabled',
  component: MbxButton,
  props: {
    children: 'Oops',
    disabled: true
  }
};

testCases.disabledSecondary = {
  description: 'Disabled secondary',
  component: MbxButton,
  props: {
    children: 'Oops',
    disabled: true,
    variant: 'secondary',
    onClick: safeSpy()
  }
};

testCases.disabledSpecial = {
  description: 'Disabled appPrimary with color',
  component: MbxButton,
  props: {
    children: 'Oops',
    variant: 'appPrimary',
    onClick: safeSpy(),
    disabled: true,
    color: 'gray'
  }
};

export { testCases };
