import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './new-tab-link-test-cases';

describe('NewTabLink', () => {
  test(testCases.basic.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );
    expect(wrapper).toMatchSnapshot();
  });

  test(testCases.styling.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.styling.component, testCases.styling.props)
    );
    expect(wrapper).toMatchSnapshot();
  });
});
