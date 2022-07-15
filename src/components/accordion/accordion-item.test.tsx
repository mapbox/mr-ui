import React from 'react';
import AccordionItem from './accordion-item';

describe('AccordionItem', () => {
/*
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
  */
});

/*
testCases.basic = {
  description: 'basic',
  component: AccordionItem,
  props: {
    onToggle: safeSpy(),
    id: 'one',
    header: () => <span>one</span>,
    body: 'First body'
  }
};

testCases.disabled = {
  description: 'disabled',
  component: AccordionItem,
  props: {
    onToggle: safeSpy(),
    id: 'one',
    header: () => <span>one</span>,
    body: 'First body',
    disabled: true
  }
};

testCases.allOptions = {
  description: 'all options',
  component: AccordionItem,
  props: {
    onToggle: safeSpy(),
    id: 'one',
    active: true,
    header: () => <span>one</span>,
    body: 'First body',
    themeItem: 'bg-red-faint border-b border--red-dark',
    themeItemHeader:
      'bg-red txt-l txt-bold link link--white bg-red-dark-on-hover px6 py6',
    themeItemBody: 'py6 px6 txt-l bg-red-light'
  }
};
*/
