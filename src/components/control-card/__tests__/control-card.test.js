import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './control-card-test-cases';

describe('ControlCard', () => {
  describe(testCases.basic.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.basic.component, testCases.basic.props)
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.title.description, () => {
    const wrapper = shallow(
      React.createElement(testCases.title.component, testCases.title.props)
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.sizedTitle.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.sizedTitle.component,
        testCases.sizedTitle.props
      )
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.collapsible.description, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        React.createElement(
          testCases.collapsible.component,
          testCases.collapsible.props
        )
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onButtonClick is called', () => {
      wrapper.find('button').first().props().onClick();
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(testCases.collapsible.props.onButtonClick).toHaveBeenCalledTimes(
        1
      );
    });
  });

  describe(testCases.sizedTitleclosable.description, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        React.createElement(
          testCases.sizedTitleclosable.component,
          testCases.sizedTitleclosable.props
        )
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onButtonClick is called', () => {
      wrapper.find('button').first().props().onClick();
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(
        testCases.sizedTitleclosable.props.onButtonClick
      ).toHaveBeenCalledTimes(1);
    });
  });
});
