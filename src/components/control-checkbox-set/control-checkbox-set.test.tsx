import React from 'react';
import { shallow } from 'enzyme';
import ControlCheckboxSet from './control-checkbox-set';

describe('ControlCheckbox', () => {

  /*
testCases.basic = {
  description: 'basic',
  component: ControlCheckboxSet,
  props: {
    id: 'testinput',
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
      const mockEventOne = {
        target: {
          value: 'foo'
        }
      };
      const mockEventTwo = {
        target: {
          value: 'foobar'
        }
      };
      wrapper.find('input').first().props().onChange(mockEventOne);
      wrapper.find('input').first().props().onChange(mockEventTwo);
      wrapper.find('input').first().props().onChange(mockEventOne);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(3);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        ['foobar'],
        'testinput'
      );
    });
  });

testCases.disabled = {
  description: 'disabled',
  component: ControlCheckboxSet,
  props: {
    id: 'testinput',
    options: [
      { label: 'Option 1', value: 'Option value 1' },
      { label: 'Option 2', value: 'Option value 2', disabled: true }
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

    test('extra props works', () => {
      const props = wrapper.find('input').last().props();
      expect(props).toHaveProperty('disabled', true);
    });
  });

testCases.allOptions = {
  description: 'all options',
  component: ControlCheckboxSet,
  props: {
    id: 'testinput',
    options: [
      { label: <span>Option 1</span>, value: 'Option value 1' },
      { label: <span>Option 2</span>, value: 'Option value 2' },
      { label: <span>Option 3</span>, value: 'Option value 3' }
    ],
    validationError: 'oh no!',
    value: ['Option value 1', 'Option value 2'],
    autoFocus: true,
    optional: true,
    themeCheckboxContainer: 'w-full',
    themeCheckbox: 'checkbox--red mr6',
    themeControlWrapper: 'bg-red-light',
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

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
*/
});
