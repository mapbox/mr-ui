import React from 'react';
import { shallow, mount } from 'enzyme';
import { testCases } from './form-test-cases';

describe('ControlFile', () => {
  let testCase;
  let wrapper;

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
    });

    test('renders', () => {
      const wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      expect(wrapper).toMatchSnapshot();
    });

    test('validation handling', () => {
      const wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      const submitHandler = wrapper.find('FormSubmit');

      submitHandler.props().onSubmit();
      wrapper.update();

      expect(wrapper.find('ControlText').first().props().validationError).toBe(
        'Please enter a first name'
      );
      expect(testCase.props.handleFormData).toHaveBeenCalledTimes(0);

      wrapper.find('ControlText').first().props().onChange('foo', 'firstName');
      wrapper.update();

      expect(wrapper.find('ControlText').first().props().validationError).toBe(
        ''
      );
    });
  });

  describe(testCases.allControls.description, () => {
    beforeEach(() => {
      testCase = testCases.allControls;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(testCases.onChange.description, () => {
    beforeEach(() => {
      testCase = testCases.onChange;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('onChange is called', () => {
      const mockEvent = {
        target: {
          value: 'foo to the bar'
        }
      };

      wrapper.find('textarea').props().onChange(mockEvent);
      wrapper.update();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith({
        description: mockEvent.target.value
      });
    });
  });

  describe(testCases.onCancel.description, () => {
    beforeEach(() => {
      testCase = testCases.onCancel;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('onCancel is called', () => {
      wrapper.find('input').simulate('keyDown', { key: 'Escape', keyCode: 27 });
      expect(testCase.props.onCancel).toHaveBeenCalledTimes(1);
    });
  });
});
