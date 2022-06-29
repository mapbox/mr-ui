/* eslint-disable react/display-name */
import React from 'react';
import { mount } from 'enzyme';
import { testCases } from './underline-tabs-test-cases';

jest.mock('../../icon-text', () => () => 'IconText');

// Using Enzyme's mount instead of shallow in order to test UnderlineTabItem
// at the same time, since its independent existence is an implementation
// detail that may change.

describe(testCases.defaults.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.defaults;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('clicking an inactive item triggers change with the ID and event', () => {
    const mockEvent = {};
    wrapper.find({ 'data-test': 'A' }).prop('onClick')(mockEvent);
    expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
    expect(testCase.props.onChange).toHaveBeenCalledWith('A', mockEvent);
  });

  test('clicking an active item does not trigger change and cancels the event', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.find({ 'data-test': 'B' }).prop('onClick')(mockEvent);
    expect(testCase.props.onChange).toHaveBeenCalledTimes(0);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });
});

describe(testCases.overlap.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.overlap;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.small.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.small;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.large.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.large;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.customized.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.customized;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.idLabelsAndDisabledItem.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.idLabelsAndDisabledItem;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('clicking a disabled item does not trigger change and cancels the event', () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    wrapper.find({ 'data-test': 'bug' }).prop('onClick')(mockEvent);
    expect(testCase.props.onChange).toHaveBeenCalledTimes(0);
    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
  });
});

describe(testCases.largeLinksIcons.description, () => {
  let testCase;
  let wrapper;

  beforeEach(() => {
    testCase = testCases.largeLinksIcons;
    wrapper = mount(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('clicking an inactive link item still triggers the onChange callback', () => {
    const mockEvent = {};
    wrapper.find({ 'data-test': 'C' }).prop('onClick')(mockEvent);
    expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
    expect(testCase.props.onChange).toHaveBeenCalledWith('C', mockEvent);
  });
});
