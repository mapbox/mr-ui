import React from 'react';
import Icon from '../icon';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: Icon,
  props: {
    name: 'bike'
  }
};

testCases.extraProps = {
  description: 'extra props',
  component: Icon,
  props: {
    name: 'alert',
    'data-test': 'alert-icon',
    themeIcon: 'color-red'
  }
};

testCases.specialSizeClasses = {
  description: 'special size with classes',
  component: Icon,
  props: {
    name: 'alert',
    'data-test': 'alert-icon',
    themeIcon: 'h36 w36'
  }
};

testCases.specialSizeStyle = {
  description: 'special size with styles',
  component: Icon,
  props: {
    name: 'alert',
    'data-test': 'alert-icon',
    style: { height: 36, width: 36 }
  }
};

testCases.inline = {
  noDisplay: true,
  description: 'inline',
  component: Icon,
  props: {
    name: 'check',
    inline: true,
    themeIcon: 'mr3 color-green'
  }
};

testCases.inlineSmallDisplay = {
  description: 'inline txt-s',
  element: (
    <div className="txt-s">
      <Icon name="check" themeIcon="mr3 color-green" inline={true} />
      You did it
    </div>
  )
};

testCases.inlineLargeDisplay = {
  description: 'inline txt-xl',
  element: (
    <div className="txt-xl">
      <Icon name="check" themeIcon="mr3 color-green" inline={true} />
      You did it
    </div>
  )
};

export { testCases };
