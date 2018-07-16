import React from 'react';
import ControlWrapper from '../control-wrapper';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlWrapper,
  props: {
    id: 'control-wrapper',
    children: <span>fake input</span>
  }
};

testCases.basicWithError = {
  description: 'basic with error',
  component: ControlWrapper,
  props: {
    id: 'control-wrapper',
    validationError: 'There was an error',
    children: <span>fake input</span>,
    themeLabel: 'bg-red'
  }
};

testCases.jsxError = {
  description: 'JSX error',
  component: ControlWrapper,
  props: {
    id: 'control-wrapper',
    validationError: (
      <div>
        <div className="txt-bold mb3">Something went wrong!</div>
        <div>You made a huge mistake</div>
      </div>
    ),
    children: <span>fake input</span>,
    themeLabel: 'bg-red'
  }
};

export { testCases };
