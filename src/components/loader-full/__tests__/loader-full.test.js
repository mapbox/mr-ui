import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './loader-full-test-cases';

describe('LoaderFull', () => {
  let testCase;
  let wrapper;

  describe(testCases.loaderBasic.description, () => {
    beforeEach(() => {
      testCase = testCases.loaderBasic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
