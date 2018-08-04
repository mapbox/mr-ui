import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import Button from '../button';
import IconText from '../../icon-text';

const testCases = {};

testCases.primary = {
  description: 'Primary',
  component: Button,
  props: {
    children: 'Primary',
    onClick: safeSpy()
  }
};

testCases.secondary = {
  description: 'Secondary',
  component: Button,
  props: {
    children: 'Secondary',
    variant: 'secondary',
    onClick: safeSpy()
  }
};

testCases.discouraging = {
  description: 'Discouraging',
  component: Button,
  props: {
    children: 'Discouraging',
    variant: 'discouraging',
    onClick: safeSpy()
  }
};

testCases.destructive = {
  description: 'Destructive',
  component: Button,
  props: {
    children: 'Destructive',
    variant: 'destructive',
    onClick: safeSpy()
  }
};

testCases.appPrimary = {
  description: 'AppPrimary',
  component: Button,
  props: {
    children: 'AppPrimary',
    variant: 'appPrimary',
    onClick: safeSpy()
  }
};

testCases.appSecondary = {
  description: 'AppSecondary',
  component: Button,
  props: {
    children: 'AppSecondary',
    variant: 'appSecondary',
    onClick: safeSpy()
  }
};

testCases.linkOutlinePadding = {
  description: 'Link with outline and icon text, extra padding',
  component: Button,
  props: {
    children: <IconText iconBefore="bug">Go do things</IconText>,
    href: '#',
    onClick: safeSpy(),
    outline: true,
    width: 'large'
  }
};

testCases.fullWidthPurple = {
  description: 'Full width, alternate color',
  component: Button,
  props: {
    children: 'Here we are',
    color: 'purple',
    width: 'full'
  }
};

testCases.weird = {
  description:
    'Div styled like a medium destructive button with some extended props and custom classes',
  component: Button,
  props: {
    children: 'Save',
    size: 'medium',
    variant: 'destructive',
    onClick: safeSpy(),
    theme: 'shadow-darken75 unselectable cursor-pointer',
    component: 'div',
    role: 'button',
    'data-test': 'foo'
  }
};

testCases.disabled = {
  description: 'Disabled',
  component: Button,
  props: {
    children: 'Oops',
    disabled: true
  }
};

testCases.disabledSecondary = {
  description: 'Disabled secondary',
  component: Button,
  props: {
    children: 'Oops',
    disabled: true,
    variant: 'secondary',
    onClick: safeSpy()
  }
};

testCases.disabledSpecial = {
  description: 'Disabled appPrimary with color',
  component: Button,
  props: {
    children: 'Oops',
    variant: 'appPrimary',
    onClick: safeSpy(),
    disabled: true,
    color: 'gray'
  }
};

export { testCases };
