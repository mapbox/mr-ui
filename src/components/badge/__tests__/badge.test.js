import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './badge-test-cases';

describe('badge', () => {
  describe(testCases.basic.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('no Tooltip', () => {
      expect(wrapper.find('Tooltip').exists()).toBe(false);
    });
  });

  describe(testCases.color.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.color.component, testCases.color.props)
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('no Tooltip', () => {
      expect(wrapper.find('Tooltip').exists()).toBe(false);
    });
  });

  describe(testCases.tooltip.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.tooltip.component, testCases.tooltip.props)
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('tooltipText renders Tooltip', () => {
      expect(wrapper.find('Tooltip').exists()).toBe(true);
    });
  });

  describe(testCases.colorAndTooltip.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.colorAndTooltip.component,
        testCases.colorAndTooltip.props
      )
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('tooltipText renders Tooltip', () => {
      expect(wrapper.find('Tooltip').exists()).toBe(true);
    });
  });
});
