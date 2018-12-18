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
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.account.description, () => {
  beforeEach(() => {
    testCase = testCases.account;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
