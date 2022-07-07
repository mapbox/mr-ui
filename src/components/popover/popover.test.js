import React from 'react';
import { shallow } from 'enzyme';
import { noDisplayCases } from './popover-test-cases';

describe('Popover', () => {
  let testCase;
  let wrapper;

  describe(noDisplayCases.basic.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.basic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.dark.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.dark;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.warning.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.warning;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.noPointer.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.noPointer;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.allProps.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.allProps;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
