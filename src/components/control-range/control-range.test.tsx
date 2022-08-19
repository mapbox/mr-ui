import React from 'react';
import ControlRange from './control-range';

describe('ControlRange', () => {

});

/*
testCases.basic = {
  description: 'basic',
  component: ControlRange,
  props: {
    id: 'testinput',
    label: 'Basic',
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
          value: '100'
        }
      };
      wrapper.find('input').props().onChange(mockEvent);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('100', 'testinput');
    });
  });

testCases.disabled = {
  description: 'disabled',
  component: ControlRange,
  props: {
    id: 'testinput',
    label: 'Disabled',
    onChange: jest.fn(),
    disabled: true
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

    test('extra props works', () => {
      const props = wrapper.find('input').last().props();
      expect(props).toHaveProperty('min', 100);
      expect(props).toHaveProperty('max', 1000);
      expect(props).toHaveProperty('step', 100);
    });
  });
*/
