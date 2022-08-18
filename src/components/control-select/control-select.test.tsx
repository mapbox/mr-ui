import React from 'react';
import ControlSelect from './control-select';

/*
describe('ControlSelect', () => {

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
    onChange: jest.fn()
  }
};

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onChange gets called with input id and value', () => {
      const mockEvent = {
        target: {
          value: 'foo'
        }
      };
      wrapper.find('select').props().onChange(mockEvent);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('foo', 'testinput');
    });
  });

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
    onChange: jest.fn()
  }
};

  describe(testCases.disabled.description, () => {
    beforeEach(() => {
      testCase = testCases.disabled;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

testCases.grouped = {
  description: 'grouped dropdown options',
  component: ControlSelect,
  props: {
    id: 'grouped',
    label: 'Grouped dropdown options',
    onChange: jest.fn(),
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

  describe(testCases.grouped.description, () => {
    beforeEach(() => {
      testCase = testCases.grouped;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

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
    onChange: jest.fn()
  }
};

  describe(testCases.values.description, () => {
    beforeEach(() => {
      testCase = testCases.values;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

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
    onChange: jest.fn()
  }
};

  describe(testCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = testCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('extra props works', () => {
      const props = wrapper.find('option').last().props();
      expect(props).toHaveProperty('disabled', true);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
*/
