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

  describe(testCases.focusHoverNotClick.description, () => {
    beforeEach(() => {
      testCase = testCases.focusHoverNotClick;
      wrapper = shallow(testCase.element);
    });

    test('when focus triggers the popover, click closes it', () => {
      expect(wrapper.find('Popover').length).toBe(0);
      wrapper.props().onFocus();
      wrapper.update();
      expect(wrapper.find('Popover').length).toBe(1);
      wrapper.props().onClick();
      wrapper.update();
      expect(wrapper.find('Popover').length).toBe(0);
    });

    test('when hover triggers the popover, click does not close it', () => {
      expect(wrapper.find('Popover').length).toBe(0);
      // onTriggerMouseEnter is triggered by a regular DOM event listener,
      // so we're calling it directly.
      wrapper.instance().onTriggerMouseEnter();
      wrapper.update();
      expect(wrapper.find('Popover').length).toBe(1);
      wrapper.props().onClick();
      wrapper.update();
      expect(wrapper.find('Popover').length).toBe(1);
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
