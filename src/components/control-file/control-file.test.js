import React from 'react';
import { shallow, mount } from 'enzyme';
import { testCases } from './control-file-test-cases';

describe('ControlFile', () => {
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

    test('onChange gets called with input id and array of files', () => {
      // Not a perfect mockery because it's not creating a FileList.
      // But it'll do.
      const bonJoviFile = new File(['bonjovi'], 'bon jovi.mp3');
      const mockEvent = {
        target: {
          files: [bonJoviFile]
        }
      };
      wrapper.find('input').props().onChange(mockEvent);
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        [bonJoviFile],
        testCase.props.id
      );
    });

    test('receives an array of one file as value, displaying its name and the clear button', () => {
      const bonJoviFile = new File(['bonjovi'], 'bon jovi.mp3');
      const files = [bonJoviFile];
      wrapper.setProps({ value: files });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });

    test('clear button works clears input value and calls onChange', () => {
      wrapper = mount(React.createElement(testCase.component, testCase.props));
      const bonJoviFile = new File(['bonjovi'], 'bon jovi.mp3');
      const files = [bonJoviFile];
      wrapper.setProps({ value: files });
      wrapper.update();
      wrapper.find({ 'data-test': 'control-file-clear' }).prop('onClick')();
      wrapper.update();
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('', 'testinput-1');
      expect(wrapper.find('input').getElement().props.value).toBeFalsy();
    });
  });

  describe(testCases.multiple.description, () => {
    beforeEach(() => {
      testCase = testCases.multiple;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('onChange gets called with input id and array of multiple files', () => {
      // Not a perfect mockery because it's not creating a FileList.
      // But it'll do.
      const bonJoviFile = new File(['bonjovi'], 'bon jovi.mp3');
      const aerosmithFile = new File(['aerosmith'], 'aerosmith.mp3');
      const mockEvent = {
        target: {
          files: [bonJoviFile, aerosmithFile]
        }
      };
      wrapper.find('input').props().onChange(mockEvent);
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        [bonJoviFile, aerosmithFile],
        testCase.props.id
      );
    });

    test('receives an array of files as value, displaying their names and the clear button', () => {
      const bonJoviFile = new File(['bonjovi'], 'bon jovi.mp3');
      const aerosmithFile = new File(['aerosmith'], 'aerosmith.mp3');
      const files = [bonJoviFile, aerosmithFile];
      wrapper.setProps({ value: files });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
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
      expect(props).toHaveProperty('multiple', true);
    });
  });
});
