import React from 'react';
import ControlToggleSet from '../control-toggle-set';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlToggleSet,
  props: {
    id: 'testinput',
    legend: 'Basic',
    options: [
      { label: 'Toggle 1', value: 'Toggle value 1' },
      { label: 'Toggle 2', value: 'Toggle value 2' }
    ],
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlToggleSet,
  props: {
    id: 'testinput',
    legend: 'Disabled',
    theme: {
      toggleGroup: 'bg-gray-faint'
    },
    options: [
      { label: 'Toggle 1', value: 'Toggle value 1' },
      { label: 'Toggle 2', value: 'Toggle value 2', disabled: true }
    ],
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlToggleSet,
  props: {
    id: 'testinput',
    options: [
      { label: <span>Toggle 1</span>, value: 'Toggle value 1' },
      { label: <span>Toggle 2</span>, value: 'Toggle value 2' },
      { label: <span>Toggle 3</span>, value: 'Toggle value 3' }
    ],
    validationError: 'oh no!',
    value: 'Toggle value 1',
    autoFocus: true,
    optional: true,
    legend: 'All options',
    aside: <span>Aside text</span>,
    themeToggleGroup: 'bg-red border border--2 border--red',
    themeToggleContainer: 'w-full',
    themeToggle: 'toggle--white toggle--active-red',
    themeControlWrapper: 'bg-red-light px12 py12',
    themeLegend: 'color-white',
    onChange: safeSpy()
  }
};

export { testCases };
