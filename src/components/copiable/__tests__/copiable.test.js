import React from 'react';
import { shallow } from 'enzyme';
import delay from 'delay';
import { testCases } from './copiable-test-cases';
import getWindow from '../../utils/get-window';

const select = require('select');

const FEEDBACK_TIME = 2000;
const mockUserAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36';
const mockEvent = {
  preventDefault: jest.fn()
};

jest.mock('select');
jest.mock('clipboard/dist/clipboard.min.js', () => {
  class Clipboard {}
  Clipboard.isSupported = () => true;
  return Clipboard;
});
jest.mock('../../utils/get-window', () => {
  return jest.fn();
});
select.mockImplementation(() => jest.fn());

describe('Copiable', () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    getWindow.mockReturnValue({
      navigator: {
        userAgent: mockUserAgent
      }
    });
  });

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('calls select library with element holding text to copy', () => {
      const mockSelectableEl = <span>text to copy</span>;
      wrapper.instance().getTextEl = jest.fn(() => mockSelectableEl);
      expect(wrapper.find('Popover').length).toBe(0);
      wrapper
        .find('span')
        .props()
        .onClick(mockEvent);
      wrapper.update();
      expect(select).toHaveBeenCalledTimes(1);
      expect(wrapper.instance().getTextEl).toHaveBeenCalledTimes(1);
      expect(select).toHaveBeenCalledWith(mockSelectableEl);
    });

    test('shows copy hint when clicked', () => {
      expect(wrapper.find('Popover').length).toBe(0);
      wrapper
        .find('span')
        .props()
        .onClick(mockEvent);
      wrapper.update();
      expect(wrapper.find('Popover').length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    test('Copy hint disappears at the right time', () => {
      expect(wrapper.find('Popover').length).toBe(0);
      wrapper
        .find('span')
        .props()
        .onClick(mockEvent);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('Popover').length).toBe(1);
      return delay(FEEDBACK_TIME + 100).then(() => {
        wrapper.update();
        expect(wrapper.find('Popover').length).toBe(0);
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe(testCases.allProps.description, () => {
    beforeEach(() => {
      testCase = testCases.allProps;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      wrapper.instance().selectText = jest.fn();
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
