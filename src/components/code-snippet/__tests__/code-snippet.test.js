import React from 'react';
import _ from 'lodash';
import { shallow, mount } from 'enzyme';
import { testCases } from './code-snippet-test-cases';
import getWindow from '../../utils/get-window';

jest.mock('../../utils/get-window', () => {
  return jest.fn();
});

describe('CodeSnippet', () => {
  let testCase;
  let wrapper;

  // Almost all of the logic in CodeSnippet is about determining element rendering,
  // and snapshots cover that

  describe(testCases.notHighlighted.description, () => {
    beforeEach(() => {
      testCase = testCases.notHighlighted;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.highlighted.description, () => {
    beforeEach(() => {
      testCase = testCases.highlighted;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.highlightedNoRangesWithCallback.description, () => {
    beforeEach(() => {
      testCase = testCases.highlightedNoRangesWithCallback;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onCopy works', () => {
      wrapper.find('CopyButton').props().onCopy();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy.mock.calls[0].length).toBe(0);
    });
  });

  describe(testCases.copyRanges.description, () => {
    beforeEach(() => {
      testCase = testCases.copyRanges;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.copyRangesWithCallback.description, () => {
    beforeEach(() => {
      testCase = testCases.copyRangesWithCallback;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('onCopy works', () => {
      wrapper.find('CopyButton').get(0).props.onCopy();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy).toHaveBeenCalledWith(0);
    });

    test('onCopy works again, providing correct index', () => {
      wrapper.find('CopyButton').get(1).props.onCopy();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy).toHaveBeenCalledWith(1);
    });
  });

  describe(testCases.maxHeight.description, () => {
    beforeEach(() => {
      testCase = testCases.maxHeight;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props),
        { disableLifecycleMethods: true }
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('adjusts copy blocks on resize', () => {
    let mockWindow;

    beforeEach(() => {
      testCase = testCases.copyRanges;
      mockWindow = _.assign({}, window, {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      });
      getWindow.mockReturnValue(mockWindow);
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('adds resize listener on mount, with adjustPositions callback', () => {
      expect(mockWindow.addEventListener).toHaveBeenCalledTimes(1);
      expect(mockWindow.addEventListener).toHaveBeenCalledWith(
        'resize',
        wrapper.instance().adjustPositions
      );
    });

    test('removes resize listener on unmount', () => {
      const adjustPositions = wrapper.instance().adjustPositions;
      wrapper.unmount();
      expect(mockWindow.removeEventListener).toHaveBeenCalledTimes(1);
      expect(mockWindow.removeEventListener).toHaveBeenCalledWith(
        'resize',
        adjustPositions
      );
    });
  });
});
