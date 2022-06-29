import React from 'react';
import { shallow } from 'enzyme';
import delay from 'delay';
import { testCases } from './copy-button-test-cases';
import getWindow from '../../utils/get-window';
import Clipboard from 'clipboard/dist/clipboard.min.js';

const mockUserAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36';

jest.mock('clipboard/dist/clipboard.min.js');

Clipboard.isSupported = () => true;

jest.mock('../../utils/get-window', () => {
  return jest.fn();
});

describe('CopyButton', () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    getWindow.mockReturnValue({
      navigator: {
        userAgent: mockUserAgent
      }
    });
  });

  describe(testCases.defaults.description, () => {
    beforeEach(() => {
      testCase = testCases.defaults;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('changes state on click', () => {
      const destroySpy = jest.spyOn(wrapper.instance(), 'destroyClipboard');
      const setClipboardSpy = jest.spyOn(wrapper.instance(), 'setClipboard');
      wrapper.find('button').prop('onClick')({
        target: wrapper.find('button')
      });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(destroySpy).toHaveBeenCalled();
      expect(setClipboardSpy).toHaveBeenCalled();
      return delay(820).then(() => {
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
      });
    });

    test('focusTrapPaused false/undefined updates container element when setting clipboard', () => {
      wrapper.instance().setClipboard('cool container');

      expect(Clipboard).toHaveBeenCalledWith('cool container', {
        container: 'cool container'
      });
    });
  });

  describe(testCases.allProps.description, () => {
    beforeEach(() => {
      testCase = testCases.allProps;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });

    // Extra classes need to carry over to both states
    test('changes state on click', () => {
      const destroySpy = jest.spyOn(wrapper.instance(), 'destroyClipboard');
      const setClipboardSpy = jest.spyOn(wrapper.instance(), 'setClipboard');
      wrapper.find('button').prop('onClick')({
        target: wrapper.find('button')
      });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(destroySpy).toHaveBeenCalled();
      expect(setClipboardSpy).toHaveBeenCalled();
      return delay(820).then(() => {
        wrapper.update();
        expect(wrapper).toMatchSnapshot();
      });
    });

    test('calls onCopy callback', () => {
      wrapper.find('button').prop('onClick')();
      expect(testCase.props.onCopy).toHaveBeenCalledTimes(1);
      expect(testCase.props.onCopy).toHaveBeenCalledWith(testCase.props.text);
    });

    test('focusTrapPaused true does not update container element when setting clipboard', () => {
      wrapper.instance().setClipboard('cool container');

      expect(Clipboard).toHaveBeenCalledWith('cool container', {});
    });
  });
});
