import React from 'react';
import ControlSwitch from '../control-switch';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlSwitch,
  props: {
    id: 'testinput',
    label: 'Basic',
    onChange: safeSpy()
  }
};

testCases.emptyStringValue = {
  description: 'empty string value',
  component: ControlSwitch,
  props: {
    id: 'testinput',
    label: 'Basic',
    onChange: safeSpy(),
    value: ''
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlSwitch,
  props: {
    id: 'testinput',
    disabled: true,
    label: 'Disabled',
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlSwitch,
  props: {
    id: 'testinput',
    validationError: 'oh no!',
    value: true,
    autoFocus: true,
    optional: true,
    label: <span>All options</span>,
    themeControlSwitchContainer: 'txt-s',
    themeControlSwitch: 'switch--red switch--dot-yellow',
    themeControlWrapper: 'bg-red-light',
    themeLabel: 'color-white txt-m',
    onChange: safeSpy()
  }
};

export { testCases };
