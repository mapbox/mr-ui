import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './control-checkbox-set-test-cases';

describe('ControlCheckbox', () => {
  let testCase;
  let wrapper;

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
});
