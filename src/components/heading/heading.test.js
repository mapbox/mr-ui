import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './heading-test-cases';

test(testCases.primary.description, () => {
  const wrapper = shallow(
    React.createElement(testCases.primary.component, testCases.primary.props)
  );
  expect(wrapper).toMatchSnapshot();
});

test(testCases.secondary.description, () => {
  const wrapper = shallow(
    React.createElement(
      testCases.secondary.component,
      testCases.secondary.props
    )
  );
  expect(wrapper).toMatchSnapshot();
});

test(testCases.tertiary.description, () => {
  const wrapper = shallow(
    React.createElement(testCases.tertiary.component, testCases.tertiary.props)
  );
  expect(wrapper).toMatchSnapshot();
});

test(testCases.minor.description, () => {
  const wrapper = shallow(
    React.createElement(testCases.minor.component, testCases.minor.props)
  );
  expect(wrapper).toMatchSnapshot();
});
