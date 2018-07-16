import React from 'react';
import ControlRange from '../control-range';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlRange,
  props: {
    id: 'testinput',
    label: 'Basic',
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlRange,
  props: {
    id: 'testinput',
    label: 'Disabled',
    onChange: safeSpy(),
    disabled: true
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlRange,
  props: {
    id: 'testinput',
    label: 'All options',
    validationError: 'oh no!',
    value: 200,
    min: 100,
    max: 1000,
    step: 100,
    optional: true,
    autoFocus: true,
    aside: <span>Aside text</span>,
    themeControlRange: 'range--s range--red',
    themeControlWrapper: 'bg-red-light',
    themeLabel: 'txt-s txt-bold color-white',
    onChange: safeSpy()
  }
};

export { testCases };
