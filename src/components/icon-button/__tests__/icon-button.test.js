import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './icon-button-test-cases';

describe('IconButton', () => {
  let testCase;
  let wrapper;
  let body;

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      body = shallow(
        wrapper
          .find('Tooltip')
          .props()
          .children()
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
      expect(body).toMatchSnapshot();
    });

    test('button responds to click', () => {
      body.props().onClick();
      expect(testCase.props.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe(testCases.allPropsJsxContent.description, () => {
    beforeEach(() => {
      testCase = testCases.allPropsJsxContent;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      body = shallow(
        wrapper
          .find('Tooltip')
          .props()
          .children()
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
      expect(body).toMatchSnapshot();
    });
  });
});
