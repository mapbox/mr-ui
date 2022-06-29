import React from 'react';
import ControlSelect from '../control-select';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlSelect,
  props: {
    id: 'testinput',
    label: 'Basic',
    options: [
      { label: 'Option 1', value: 'Option value 1' },
      { label: 'Option 2', value: 'Option value 2' }
    ],
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlSelect,
  props: {
    id: 'disabled',
    disabled: true,
    label: 'Disabled',
    options: [
      { label: 'Option 1', value: 'Option value 1' },
      { label: 'Option 2', value: 'Option value 2' }
    ],
    onChange: safeSpy()
  }
};

testCases.grouped = {
  description: 'grouped dropdown options',
  component: ControlSelect,
  props: {
    id: 'grouped',
    label: 'Grouped dropdown options',
    onChange: safeSpy(),
    options: [
      {
        label: 'Group One',
        options: [
          {
            label: 'Foo',
            value: 'foo'
          },
          {
            label: 'Bar',
            value: 'bar'
          }
        ]
      },
      {
        label: 'Group two',
        options: [
          {
            label: 'Baz',
            value: 'baz'
          },
          {
            label: 'Qux',
            value: 'qux'
          }
        ]
      }
    ]
  }
};

testCases.values = {
  description: 'Supported values',
  component: ControlSelect,
  props: {
    id: 'value',
    label: 'Basic',
    options: [
      { label: 'Empty string', value: '' },
      { label: 'String', value: 'foo' },
      { label: 'Number', value: 123 }
    ],
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlSelect,
  props: {
    id: 'allOptions',
    options: [
      { label: 'Option 1', value: 'Option value 1' },
      { label: 'Option 2', value: 'Option value 2' },
      { label: 'Option 3', value: 'Option value 3', disabled: true }
    ],
    validationError: 'oh no!',
    value: 'Option value 2',
    autoFocus: true,
    optional: true,
    label: 'All options',
    aside: <span>Aside text</span>,
    themeControlSelectContainer: 'color-white',
    themeControlSelect: 'select--red',
    themeControlWrapper: 'bg-red-light',
    themeLabel: 'color-white',
    onChange: safeSpy()
  }
};

export { testCases };
