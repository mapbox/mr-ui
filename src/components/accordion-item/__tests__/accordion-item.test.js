import React from 'react';
import { shallow, mount } from 'enzyme';
import { testCases } from './accordion-item-test-cases';

describe('Accordion', () => {
  let testCase;
  let wrapper;

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('internal onToggle is called', () => {
      wrapper.find('button').first().simulate('click');
      expect(testCase.props.onToggle).toHaveBeenCalledTimes(1);
      expect(testCase.props.onToggle).toHaveBeenCalledWith('one');
    });
  });

  describe(testCases.disabled.description, () => {
    beforeEach(() => {
      testCase = testCases.disabled;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('disabled works', () => {
      const props = wrapper.find('button').last().props();
      expect(props).toHaveProperty('disabled', true);
    });
  });

  describe(testCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = testCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('extra props works', () => {
      expect(testCase.props).toHaveProperty('onToggle');

      // Optional props passed to items
      expect(testCase.props).toHaveProperty('active', true);
      expect(testCase.props).toHaveProperty('themeItem');
      expect(testCase.props).toHaveProperty('themeItemHeader');
      expect(testCase.props).toHaveProperty('themeItemBody');
    });
  });
});
