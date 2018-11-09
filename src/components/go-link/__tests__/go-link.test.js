import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './go-link-test-cases';

describe('GoLink', () => {
  describe(testCases.basic.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.multilineTextGoForward.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.multilineTextGoForward.component,
        testCases.multilineTextGoForward.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.smallGoForward.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.smallGoForward.component,
        testCases.smallGoForward.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.largeGoForward.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.largeGoForward.component,
        testCases.largeGoForward.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.unboldedGoForward.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.unboldedGoForward.component,
        testCases.unboldedGoForward.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.lightGoForward.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.lightGoForward.component,
        testCases.lightGoForward.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.newTabGoForward.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.newTabGoForward.component,
        testCases.newTabGoForward.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.smallUnboldedNewTabGoBack.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.smallUnboldedNewTabGoBack.component,
        testCases.smallUnboldedNewTabGoBack.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
