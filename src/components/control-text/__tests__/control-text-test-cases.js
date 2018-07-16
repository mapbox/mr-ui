import React from 'react';
import ControlText from '../control-text';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlText,
  props: {
    id: 'testinput',
    label: 'Basic',
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlText,
  props: {
    id: 'testinput',
    label: 'Disabled',
    onChange: safeSpy(),
    disabled: true
  }
};

testCases.validationError = {
  description: 'default validation error',
  component: ControlText,
  props: {
    id: 'testinput',
    label: 'Validation error',
    validationError: 'oh no!',
    onChange: safeSpy()
  }
};

testCases.errorInline = {
  description: 'error inline option',
  component: ControlText,
  props: {
    id: 'testinput',
    label: 'Error inline',
    errorStyle: 'inline',
    validationError: 'oh no!',
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlText,
  props: {
    id: 'testinput',
    label: 'All options',
    type: 'email',
    validationError: 'oh no!',
    errorStyle: 'inline',
    errorTooltipTheme: 'color-white round py6 px12 shadow-darken25 txt-xs',
    errorTooltipBackgroundColor: '#2c3d54',
    placeholder: 'Enter an email address',
    value: 'foo@bar.baz',
    optional: true,
    autoFocus: true,
    noAuto: true,
    aside: <span>Aside text</span>,
    themeControlInput: 'txt-bold input',
    themeControlWrapper: 'bg-gray-faint',
    themeLabel: 'txt-s txt-bold',
    onChange: safeSpy()
  }
};

export { testCases };
