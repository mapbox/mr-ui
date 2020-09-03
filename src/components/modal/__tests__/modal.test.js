import React from 'react';
import { shallow } from 'enzyme';
import { noDisplayCases } from './modal-test-cases';

describe('Modal', () => {
  let testCase;
  let wrapper;

  describe(noDisplayCases.basicSmall.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.basicSmall;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('fires onExit', () => {
      // find the button that triggers onExit method
      wrapper.find({ 'data-test': 'modal-close' }).prop('onClick')();

      expect(testCase.props.onExit).toHaveBeenCalledTimes(1);
    });

    test('allowEventBubbling disables event trapping', () => {
      expect(wrapper.find('EventTrap').length).toBe(1);
      wrapper.setProps({ allowEventBubbling: true });
      expect(wrapper.find('EventTrap').length).toBe(0);
    });
  });

  describe(noDisplayCases.basicLarge.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.basicLarge;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('fires onExit', () => {
      // find the button that triggers onExit method
      wrapper.find({ 'data-test': 'modal-close' }).prop('onClick')();

      expect(testCase.props.onExit).toHaveBeenCalledTimes(1);
    });
  });

  describe(noDisplayCases.basicAuto.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.basicAuto;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('fires onExit', () => {
      // find the button that triggers onExit method
      wrapper.find({ 'data-test': 'modal-close' }).prop('onClick')();

      expect(testCase.props.onExit).toHaveBeenCalledTimes(1);
    });
  });

  describe(noDisplayCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.optionalOnExit.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.optionalOnExit;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('close button is not present', () => {
      expect(wrapper.find({ 'data-test': 'modal-close' }).exists()).toBe(false);
    });
  });
});
