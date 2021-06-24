import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './icon-text-test-cases';

let testCase;
let wrapper;

describe(testCases.iconBefore.description, () => {
  beforeEach(() => {
    testCase = testCases.iconBefore;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.iconAfter.description, () => {
  beforeEach(() => {
    testCase = testCases.iconAfter;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.largeSpacing.description, () => {
  beforeEach(() => {
    testCase = testCases.largeSpacing;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.bothIcons.description, () => {
  beforeEach(() => {
    testCase = testCases.bothIcons;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.flexParentInline.description, () => {
  beforeEach(() => {
    testCase = testCases.flexParentInline;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
