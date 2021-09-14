import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './tooltip-test-cases';

describe('Tooltip', () => {
  let testCase;
  let wrapper;

  describe(testCases.domElementChild.description, () => {
    beforeEach(() => {
      testCase = testCases.domElementChild;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.functionChild.description, () => {
    beforeEach(() => {
      testCase = testCases.functionChild;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('trigger renders as expected', () => {
      expect(wrapper.children()).toMatchSnapshot();
    });
  });

  describe(testCases.buttonChild.description, () => {
    beforeEach(() => {
      testCase = testCases.buttonChild;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('trigger renders as expected', () => {
      expect(wrapper.children()).toMatchSnapshot();
    });
  });

  describe(testCases.allProps.description, () => {
    beforeEach(() => {
      testCase = testCases.allProps;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('trigger renders as expected', () => {
      expect(wrapper.children()).toMatchSnapshot();
    });
  });

  describe(testCases.warningProp.description, () => {
    beforeEach(() => {
      testCase = testCases.warningProp;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('trigger renders as expected', () => {
      expect(wrapper.children()).toMatchSnapshot();
    });
  });

  describe(testCases.errorProp.description, () => {
    beforeEach(() => {
      testCase = testCases.errorProp;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('trigger renders as expected', () => {
      expect(wrapper.children()).toMatchSnapshot();
    });
  });
});
