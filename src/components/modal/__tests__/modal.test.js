import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './modal-test-cases';

describe('Modal', () => {
  let testCase;
  let wrapper;

  describe(testCases.basicSmall.description, () => {
    beforeEach(() => {
      testCase = testCases.basicSmall;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('fires onExit', () => {
      // find the button that triggers onExit method
      wrapper.find('IconButton').simulate('click');

      expect(testCase.props.onExit).toHaveBeenCalledTimes(1);
    });
  });

  describe(testCases.basicLarge.description, () => {
    beforeEach(() => {
      testCase = testCases.basicLarge;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('fires onExit', () => {
      // find the button that triggers onExit method
      wrapper.find('IconButton').simulate('click');

      expect(testCase.props.onExit).toHaveBeenCalledTimes(1);
    });
  });

  describe(testCases.basicAuto.description, () => {
    beforeEach(() => {
      testCase = testCases.basicAuto;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('fires onExit', () => {
      // find the button that triggers onExit method
      wrapper.find('IconButton').simulate('click');

      expect(testCase.props.onExit).toHaveBeenCalledTimes(1);
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

  describe(testCases.optionalOnExit.description, () => {
    beforeEach(() => {
      testCase = testCases.optionalOnExit;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('IconButton is not present', () => {
      expect(wrapper.find('IconButton').exists()).toBe(false);
    });
  });
});
