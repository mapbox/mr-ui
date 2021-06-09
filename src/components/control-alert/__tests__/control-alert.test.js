import { shallow } from 'enzyme';
import { testCases } from './control-alert-test-cases';
import React from 'react';

describe('ControlAlert', () => {
  describe(testCases.basicError.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.basicError.component,
        testCases.basicError.props
      )
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.basicLocked.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.basicLocked.component,
        testCases.basicLocked.props
      )
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.basicSuccess.description, () => {
    const wrapper = shallow(
      React.createElement(
        testCases.basicSuccess.component,
        testCases.basicSuccess.props
      )
    );

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.dismissiveWarning.description, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        React.createElement(
          testCases.dismissiveWarning.component,
          testCases.dismissiveWarning.props
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
        testCases.dismissiveWarning.props.onButtonClick
      ).toHaveBeenCalledTimes(1);
    });
  });

  describe(testCases.dismissiveMultilineError.description, () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        React.createElement(
          testCases.dismissiveMultilineError.component,
          testCases.dismissiveMultilineError.props
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
        testCases.dismissiveMultilineError.props.onButtonClick
      ).toHaveBeenCalledTimes(1);
    });
  });
});
