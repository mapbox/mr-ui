import React from 'react';
import { shallow, mount } from 'enzyme';
import { testCases } from './control-text-test-cases';
import getWindow from '../../utils/get-window';

jest.mock('../../utils/get-window', () => {
  return jest.fn();
});

// Mocking react-popover as Portals in React 16 (which `react-displace` uses if
// available) is not currently supported in enzyme. see
// https://github.com/airbnb/enzyme/issues/1150

/* eslint-disable */
jest.mock('../../popover', () => () => {
  return <div data-test="popover-component" />;
});
/* eslint-enable */

describe('ControlText', () => {
  let testCase;
  let wrapper;

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

    test('onChange gets called with input id and value', () => {
      const mockEvent = {
        target: {
          value: 'foo'
        }
      };
      wrapper.find('input').props().onChange(mockEvent);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('foo', 'testinput');
    });
  });

  describe(testCases.disabled.description, () => {
    beforeEach(() => {
      testCase = testCases.disabled;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('disabled is true', () => {
      const props = wrapper.find('input').last().props();
      expect(props).toHaveProperty('disabled', true);
    });
  });

  describe(testCases.validationError.description, () => {
    beforeEach(() => {
      testCase = testCases.validationError;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.errorInline.description, () => {
    beforeEach(() => {
      testCase = testCases.errorInline;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
      getWindow.mockReturnValue({
        document: {
          activeElement: jest.fn()
        }
      });
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('popover toggles on input focus/blur states', () => {
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );

      wrapper.find('input').last().props().onFocus();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        true
      );

      wrapper.find('input').last().props().onBlur();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );
    });

    test('popover toggles on button focus/blur states', () => {
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );

      wrapper.find('button').last().props().onFocus();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        true
      );

      wrapper.find('button').last().props().onBlur();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );
    });

    test('popover toggles on container mouseOver/mouseOut states', () => {
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );

      wrapper
        .find('[data-test="control-text-container"]')
        .props()
        .onMouseOver();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        true
      );

      wrapper.find('[data-test="control-text-container"]').props().onMouseOut();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );
    });
  });

  describe('Disabled onMouseOut behaviour when onFocus is set', () => {
    beforeEach(() => {
      testCase = testCases.errorInline;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
      getWindow.mockReturnValue({
        document: {
          activeElement: jest.fn()
        }
      });
    });

    test('popover toggles on container mouseOver/mouseOut states', () => {
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        false
      );

      const inputEl = getWindow().document.activeElement;
      wrapper.instance().setInputElement(inputEl);
      wrapper.instance().onFocus();
      wrapper.update();

      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        true
      );

      wrapper.find('[data-test="control-text-container"]').props().onMouseOut();

      wrapper.update();
      expect(wrapper.find('[data-test="popover-component"]').exists()).toBe(
        true
      );
    });
  });

  describe(testCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = testCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('extra props works', () => {
      const props = wrapper.find('input').props();
      expect(props).toHaveProperty('autoFocus', true);
      expect(props).toHaveProperty('placeholder');
    });
  });
});
