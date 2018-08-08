import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './button-test-cases';

describe(testCases.primary.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.primary;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('click triggers callback', () => {
    wrapper.find('button').prop('onClick')();
    expect(testCase.props.onClick).toHaveBeenCalled();
  });

  test('updates when a prop changes', () => {
    wrapper.setProps({ color: 'pink' });
    wrapper.update();

    expect(wrapper.find('button').prop('className')).toMatch('btn--pink');
  });
});

describe(testCases.secondary.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.secondary;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.discouraging.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.discouraging;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.destructive.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.destructive;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.appPrimary.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.appPrimary;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.appSecondary.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.appSecondary;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.linkOutlinePadding.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.linkOutlinePadding;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('click still triggers callback, even though it is a link', () => {
    const mockEvent = {};
    wrapper.find('a').prop('onClick')(mockEvent);
    expect(testCase.props.onClick).toHaveBeenCalledWith(mockEvent);
  });
});

describe(testCases.fullWidthPurple.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.fullWidthPurple;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.weird.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.weird;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe(testCases.disabled.description, () => {
  let testCase;
  let wrapper;
  beforeEach(() => {
    testCase = testCases.disabled;
    wrapper = shallow(React.createElement(testCase.component, testCase.props));
  });

  test('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
