import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './popover-trigger-test-cases';

describe('PopoverTrigger', () => {
  let testCase;
  let wrapper;

  describe(testCases.defaultProps.description, () => {
    beforeEach(() => {
      testCase = testCases.defaultProps;
      wrapper = shallow(testCase.element);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.respondsToAllInteractions.description, () => {
    beforeEach(() => {
      testCase = testCases.respondsToAllInteractions;
      wrapper = shallow(testCase.element);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.callbacks.description, () => {
    beforeEach(() => {
      testCase = testCases.callbacks;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('calls callbacks with click interactions', () => {
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(0);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      wrapper.props().onClick();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      wrapper.props().onClick();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(1);
    });

    test('calls callbacks with focus-blur interactions', () => {
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(0);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      wrapper.props().onFocus();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      wrapper.props().onBlur();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(1);
    });

    test('calls callbacks with complex interactions', () => {
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(0);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      // Focus opens it.
      wrapper.props().onFocus();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      // A click keeps it open: does not close, does not re-open.
      wrapper.props().onClick();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      // A blur does not close (because of the click).
      wrapper.props().onBlur();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(0);
      // Another click closes.
      wrapper.props().onClick();
      wrapper.update();
      expect(testCase.props.onPopoverOpen).toHaveBeenCalledTimes(1);
      expect(testCase.props.onPopoverClose).toHaveBeenCalledTimes(1);
    });
  });
});
