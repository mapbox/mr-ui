import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { testCases } from './tab-list-test-cases';

describe('TabList', () => {
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
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('onChange is called', () => {
      wrapper.find('button').first().props().onClick('one');
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('one');
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
      expect(wrapper.find('.border--blue.txt-bold').length).toBe(1);
    });
  });
  describe(testCases.links.description, () => {
    beforeEach(() => {
      testCase = testCases.links;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
      expect(wrapper.find({ 'data-test': 'one' }).length).toBe(1);
    });
  });
  describe(testCases.truncateAll.description, () => {
    beforeEach(() => {
      testCase = testCases.truncateAll;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
      expect(wrapper.find({ 'data-test': 'one' }).length).toBe(1);
    });
  });
  describe(testCases.moreButtonOnlyIfNeeded.description, () => {
    beforeEach(() => {
      testCase = testCases.moreButtonOnlyIfNeeded;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
      expect(wrapper.find({ 'data-test': 'one' }).length).toBe(1);
    });
  });
  describe(testCases.labelNode.description, () => {
    beforeEach(() => {
      testCase = testCases.labelNode;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('onChange is called', () => {
      wrapper.find('button').first().props().onClick('one');
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith('one');
    });

    test('activeItem prop updates active item', () => {
      wrapper.setProps({ activeItem: 'one' });
      wrapper.update();
      expect(wrapper.find({ 'data-test': 'one' }).length).toBe(1);
    });
  });
});
