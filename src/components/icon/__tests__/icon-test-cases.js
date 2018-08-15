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
    passthroughProps: {
      'data-test': 'alert-icon'
    }
  }
};

testCases.specialSize = {
  description: 'special size',
  component: Icon,
  props: {
    name: 'alert',
    size: 36
  }
};

testCases.specialSizeStyle = {
  description: 'special size applied with a style',
  component: Icon,
  props: {
    name: 'alert',
    passthroughProps: {
      'data-test': 'alert-icon',
      style: { height: 36, width: 36 }
    }
  }
};

testCases.inline = {
  description: 'inline',
  component: Icon,
  props: {
    name: 'check',
    inline: true
  }
};

testCases.inlineWithSize = {
  description: 'inline with size',
  component: Icon,
  props: {
    name: 'check',
    inline: true,
    size: 45
  }
};

testCases.inlineSmallDisplay = {
  description: 'inline txt-s',
  element: (
    <div className="txt-s">
      <span className="mr3 color-green">
        <Icon name="check" inline={true} />
      </span>
      You did it
    </div>
  )
};

testCases.inlineLargeText = {
  description: 'inline txt-xl',
  element: (
    <div className="txt-xl">
      <span className="mr3 color-green">
        <Icon name="check" inline={true} />
      </span>
      You did it
    </div>
  )
};

testCases.inlineLargeDisplay = {
  description: 'inline txt-xl',
  element: (
    <div className="txt-xl">
      <span className="mr3 color-green">
        <Icon name="check" inline={true} size={45} />
      </span>
      You did it
    </div>
  )
};

testCases.inlineMultiline = {
  description: 'inline txt-xl',
  element: (
    <div>
      The last thing you want in your kitchen is a{' '}
      <Icon name="flame" inline={true} /> fire even though there is{' '}
      <Icon name="water" inline={true} /> water nearby.
    </div>
  )
};

export { testCases };
