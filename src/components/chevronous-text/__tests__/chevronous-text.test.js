import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './chevronous-text-test-cases';

describe('ChevronousText', () => {
  describe(testCases.basic.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.oneLongWord.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.oneLongWord.component,
        testCases.oneLongWord.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.multilineText.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.multilineText.component,
        testCases.multilineText.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.sizedIcon.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.sizedIcon.component,
        testCases.sizedIcon.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.iconBeforeOneLongWord.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.iconBeforeOneLongWord.component,
        testCases.iconBeforeOneLongWord.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.iconBeforeMultilineText.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.iconBeforeMultilineText.component,
        testCases.iconBeforeMultilineText.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.sizedIconBeforeText.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.sizedIconBeforeText.component,
        testCases.sizedIconBeforeText.props
      )
    );
    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
