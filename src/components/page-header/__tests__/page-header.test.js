import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './page-header-test-cases';

jest.mock('../../utils/get-window', () => {
  return jest.fn();
});

let testCase;
let wrapper;

describe(testCases.basic.description, () => {
  beforeEach(() => {
    testCase = testCases.basic;
  });

  test('renders as expected', () => {
    const wrapper = shallow(
      React.createElement(testCase.component, testCase.props)
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.accounts.description, () => {
  beforeEach(() => {
    testCase = testCases.accounts;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
