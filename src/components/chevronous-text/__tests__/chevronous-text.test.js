import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './chevronous-text-test-cases';

describe('ChevronousText', () => {
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
  });

  describe(testCases.additionalIconClasses.description, () => {
    beforeEach(() => {
      testCase = testCases.additionalIconClasses;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
