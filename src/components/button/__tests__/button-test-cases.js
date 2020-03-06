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
    onClick: safeSpy(),
    passthroughProps: {
      'aria-label': 'Example primary button'
    }
  }
};

testCases.secondary = {
  description: 'Secondary',
  component: Button,
  props: {
    children: 'Secondary',
    variant: 'secondary',
    onClick: safeSpy(),
    passthroughProps: {
      'aria-label': 'Example secondary button'
    }
  }
};

testCases.discouraging = {
  description: 'Discouraging',
  component: Button,
  props: {
    children: 'Discouraging',
    variant: 'discouraging',
    onClick: safeSpy(),
    passthroughProps: {
      'aria-label': 'Example discouraging button'
    }
  }
};

testCases.destructive = {
  description: 'Destructive',
  component: Button,
  props: {
    children: 'Destructive',
    variant: 'destructive',
    onClick: safeSpy(),
    passthroughProps: {
      'aria-label': 'Example destructive button'
    }
  }
};

testCases.appPrimary = {
  description: 'AppPrimary',
  component: Button,
  props: {
    children: 'AppPrimary',
    variant: 'appPrimary',
    onClick: safeSpy(),
    passthroughProps: {
      'aria-label': 'Example smaller app primary button'
    }
  }
};

testCases.appSecondary = {
  description: 'AppSecondary',
  component: Button,
  props: {
    children: 'AppSecondary',
    variant: 'appSecondary',
    onClick: safeSpy(),
    passthroughProps: {
      'aria-label': 'Example smaller app secondary button'
    }
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
    width: 'full',
    passthroughProps: {
      'aria-label': 'Example full width, purple button'
    }
  }
};

testCases.weird = {
  description:
    'Div styled like a medium destructive button with some elementAttributes',
  component: Button,
  props: {
    children: 'Save',
    size: 'medium',
    variant: 'destructive',
    onClick: safeSpy(),
    component: 'div',
    passthroughProps: {
      'aria-label': 'Example save button',
      role: 'button',
      'data-test': 'foo'
    }
  }
};

testCases.disabled = {
  description: 'Disabled',
  component: Button,
  props: {
    children: 'Oops',
    disabled: true,
    passthroughProps: {
      'aria-hidden': true
    }
  }
};

testCases.disabledSecondary = {
  description: 'Disabled secondary',
  component: Button,
  props: {
    children: 'Oops',
    disabled: true,
    variant: 'secondary',
    onClick: safeSpy(),
    passthroughProps: {
      'aria-hidden': true
    }
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
    color: 'gray',
    passthroughProps: {
      'aria-hidden': true
    }
  }
};

export { testCases };
