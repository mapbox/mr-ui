import React from 'react';
import { shallow, mount } from 'enzyme';
import { testCases } from './icon-test-cases';
import getWindow from '../../utils/get-window';

jest.mock('../../utils/get-window', () => {
  return jest.fn();
});

let testCase;
let wrapper;

describe(testCases.basic.description, () => {
  beforeEach(() => {
    testCase = testCases.basic;
  });

  test('renders as expected', () => {
    const wrapper = shallow(
      React.createElement(testCase.component, testCase.props)
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.extraProps.description, () => {
  beforeEach(() => {
    testCase = testCases.extraProps;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.specialSize.description, () => {
  beforeEach(() => {
    testCase = testCases.specialSize;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.specialSizeStyle.description, () => {
  beforeEach(() => {
    testCase = testCases.specialSizeStyle;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.inline.description, () => {
  beforeEach(() => {
    testCase = testCases.inline;
    const mockWindow = {
      getComputedStyle: jest.fn(() => ({
        'line-height': '14px'
      }))
    };
    getWindow.mockReturnValueOnce(mockWindow);
  });

  test('renders as expected', () => {
    const wrapper = shallow(
      React.createElement(testCase.component, testCase.props)
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('after mount, adjusts height to match line-height', () => {
    const wrapper = mount(
      React.createElement(testCase.component, testCase.props)
    );
    expect(wrapper.instance().iconElement.style.height).toBe('14px');
  });

  test('after update, adjusts height to match line-height', () => {
    const wrapper = mount(
      React.createElement(testCase.component, testCase.props)
    );
    wrapper.setProps({ size: 45 });
    expect(wrapper.instance().iconElement.style.height).toBe('14px');
  });
});
