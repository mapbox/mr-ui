import React from 'react';
import ControlRadioSet from '../control-radio-set';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlRadioSet,
  props: {
    id: 'testinput',
    legend: 'Basic',
    options: [
      { label: 'Option 1', value: 'Option value 1' },
      { label: 'Option 2', value: 'Option value 2' }
    ],
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlRadioSet,
  props: {
    id: 'testinput',
    legend: 'Disabled',
    options: [
      { label: 'Option 1', value: 'Option value 1' },
      { label: 'Option 2', value: 'Option value 2', disabled: true }
    ],
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlRadioSet,
  props: {
    id: 'testinput',
    options: [
      { label: <span>Option 1</span>, value: 'Option value 1' },
      { label: <span>Option 2</span>, value: 'Option value 2' },
      { label: <span>Option 3</span>, value: 'Option value 3' }
    ],
    validationError: 'oh no!',
    value: 'Option value 1',
    autoFocus: true,
    optional: true,
    legend: 'All options',
    aside: <span>Aside text</span>,
    themeRadioContainer: 'w-full',
    themeRadio: 'radio--white radio--active-red mr6',
    themeControlWrapper: 'bg-red-light',
    themeLegend: 'color-white',
    onChange: safeSpy()
  }
};

export { testCases };
