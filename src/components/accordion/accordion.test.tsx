import React from 'react';
import Accordion from './accordion';

describe('Accordion', () => {
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

    test('onToggle is called', () => {
      wrapper.find('button').first().simulate('click');
      expect(testCase.props.onToggle).toHaveBeenCalledTimes(1);
      expect(testCase.props.onToggle).toHaveBeenCalledWith('one');
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
      const item = wrapper.find('AccordionItem').first();
      expect(item.props()).toHaveProperty('active', true);
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
      expect(testCase.props).toHaveProperty('activeItem');

      // Optional props passed to items
      const props = wrapper.find('AccordionItem').first().props();
      expect(props).toHaveProperty('active', true);
      expect(props).toHaveProperty('themeItem');
      expect(props).toHaveProperty('themeItemHeader');
      expect(props).toHaveProperty('themeItemBody');
    });
  });
*/
});

/*
testCases.basic = {
  description: 'basic',
  component: ControlledAccordion,
  props: {
    onToggle: safeSpy(),
    items: [
      { id: 'one', header: () => <span>one</span>, body: 'First body' },
      { id: 'two', header: () => <span>two</span>, body: 'Second body' },
      { id: 'three', header: () => <span>three</span>, body: 'Third body' }
    ]
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlledAccordion,
  props: {
    onToggle: safeSpy(),
    items: [
      { id: 'one', header: () => <span>one</span>, body: 'First body' },
      { id: 'two', header: () => <span>two</span>, body: 'Second body' },
      {
        id: 'three',
        header: () => <span>three</span>,
        body: 'Third body',
        disabled: true
      }
    ]
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlledAccordion,
  props: {
    onToggle: safeSpy(),
    items: [
      {
        id: 'one',
        header: (active) => {
          return (
            <div>
              one
              {active && <span className="ml6 txt-normal">I am active</span>}
            </div>
          );
        },
        body: 'First body'
      },
      {
        id: 'two',
        header: (active) => {
          return (
            <div>
              two
              {active && <span className="ml6 txt-normal">I am active</span>}
            </div>
          );
        },
        body: 'Second body'
      },
      {
        id: 'third',
        header: (active) => {
          return (
            <div>
              third
              {active && <span className="ml6 txt-normal">I am active</span>}
            </div>
          );
        },
        body: 'Third body'
      }
    ],
    activeItem: 'one',
    themeItem: 'bg-red-faint border-b border--red-dark',
    themeItemHeader:
      'bg-red txt-l txt-bold link link--white bg-red-dark-on-hover px6 py6',
    themeItemBody: 'py6 px6 txt-l bg-red-light'
  }
};
*/
