import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './control-label-test-cases';

describe('ControlLabel', () => {
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

  describe(testCases.basicWithAside.description, () => {
    beforeEach(() => {
      testCase = testCases.basicWithAside;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.basicWithOptional.description, () => {
    beforeEach(() => {
      testCase = testCases.basicWithOptional;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
