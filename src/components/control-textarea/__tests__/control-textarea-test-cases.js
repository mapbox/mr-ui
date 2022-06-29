import React from 'react';
import ControlTextarea from '../control-textarea';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlTextarea,
  props: {
    id: 'testinput',
    label: 'Basic',
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlTextarea,
  props: {
    id: 'testinput',
    label: 'Disabled',
    disabled: true,
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'allOptions',
  component: ControlTextarea,
  props: {
    id: 'testinput',
    label: 'All options',
    validationError: 'oh no!',
    noAuto: true,
    optional: true,
    autoFocus: true,
    aside: <span>Aside text</span>,
    placeholder: 'Some cool placeholder text',
    value: 'Some cool default value',
    themeControlTextarea: 'w-full border--pink round-bold px12 py12',
    themeControlWrapper: 'bg-red px12 py12',
    themeLabel: 'txt-s',
    onChange: safeSpy()
  }
};

export { testCases };
