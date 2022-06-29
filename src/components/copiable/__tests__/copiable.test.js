import React from 'react';
import { shallow } from 'enzyme';
import delay from 'delay';
import CopyButton from '../../copy-button';
import { testCases } from './copiable-test-cases';

const select = require('select');

const FEEDBACK_TIME = 2000;
const mockEvent = {
  preventDefault: jest.fn()
};

jest.mock('select', () => jest.fn());
jest.mock('os-key', () =>
  jest.fn(() => ({ primaryMeta: true, meta: { symbol: 'eh' } }))
);
jest.mock('../../utils/get-window', () =>
  jest.fn(() => ({
    navigator: {
      userAgent: 'mock-user-agent'
    }
  }))
);
jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);

let testCase;
let wrapper;

describe(testCases.basic.description, () => {
  beforeEach(() => {
    testCase = testCases.basic;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('calls select library with element holding text to copy', () => {
    const mockSelectableEl = <span>text to copy</span>;
    wrapper.instance().getTextEl = jest.fn(() => mockSelectableEl);
    expect(wrapper.find('Popover').length).toBe(0);
    wrapper.find({ 'data-test': 'copiable-text-el' }).prop('onFocus')(
      mockEvent
    );
    wrapper.update();
    expect(select).toHaveBeenCalledTimes(1);
    expect(wrapper.instance().getTextEl).toHaveBeenCalledTimes(1);
    expect(select).toHaveBeenCalledWith(mockSelectableEl);
  });

  test('shows copy hint when focused', () => {
    expect(wrapper.find('Popover').length).toBe(0);
    wrapper.find({ 'data-test': 'copiable-text-el' }).prop('onFocus')(
      mockEvent
    );
    wrapper.update();
    expect(wrapper.find('Popover').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('copy hint disappears at the right time', () => {
    expect(wrapper.find('Popover').length).toBe(0);
    wrapper.find({ 'data-test': 'copiable-text-el' }).prop('onFocus')(
      mockEvent
    );
    wrapper.update();
    expect(wrapper.find('Popover').length).toBe(1);
    return delay(FEEDBACK_TIME + 100).then(() => {
      wrapper.update();
      expect(wrapper.find('Popover').length).toBe(0);
    });
  });
});

describe(testCases.focusTrapPaused.description, () => {
  beforeEach(() => {
    testCase = testCases.focusTrapPaused;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('passed focusTrapPaused to CopyButton', () => {
    const focusTrapPaused = wrapper.find('CopyButton').props().focusTrapPaused;
    expect(focusTrapPaused).toBe(true);
  });
});
