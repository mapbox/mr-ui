import React from 'react';
import { shallow } from 'enzyme';
import { testCases } from './control-date-test-cases';
import moment from 'moment';

function getDatePickerProps(wrapper) {
  return wrapper.find('DatePicker').first().props();
}
function getEndDatePickerProps(wrapper) {
  return wrapper.find('DatePicker').last().props();
}

describe('ControlDate', () => {
  let testCase;
  let wrapper;
  let datePickerProps;
  let startDatePickerProps;
  let endDatePickerProps;

  describe(testCases.single.description, () => {
    beforeEach(() => {
      testCase = testCases.single;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      datePickerProps = getDatePickerProps(wrapper);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('updates from calendar selection', () => {
      const pickedDate = moment();

      datePickerProps.onChange(pickedDate);
      wrapper.update();
      datePickerProps = getDatePickerProps(wrapper);
      expect(datePickerProps.selected).toBe(pickedDate);
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        { date: pickedDate.toDate() },
        testCase.props.id
      );
    });

    test('native datepicker selection works', () => {
      const nativeDate = '2017-08-09';
      const mockEvent = {
        target: {
          value: nativeDate
        }
      };
      const nativeDateMoment = moment(nativeDate, 'YYYY-MM-DD');

      const nativeDatepickerProps = wrapper
        .find('input[pattern]')
        .first()
        .props();
      nativeDatepickerProps.onChange(mockEvent);
      wrapper.update();
      datePickerProps = getDatePickerProps(wrapper);
      expect(datePickerProps.selected.toString()).toBe(
        nativeDateMoment.toString()
      );
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        { date: nativeDateMoment.toDate() },
        testCase.props.id
      );
    });
  });

  describe(testCases.double.description, () => {
    beforeEach(() => {
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      testCase = testCases.double;
      startDatePickerProps = getDatePickerProps(wrapper);
      endDatePickerProps = getEndDatePickerProps(wrapper);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('updates from calendar selection', () => {
      const pickedStartDate = moment();
      const pickedEndDate = moment().add(7, 'days');

      startDatePickerProps.onChange(pickedStartDate);
      wrapper.update();
      startDatePickerProps = getDatePickerProps(wrapper);
      expect(startDatePickerProps.selected).toBe(pickedStartDate);
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        {
          date: pickedStartDate.toDate(),
          endDate: testCase.props.value.endDate
        },
        testCase.props.id
      );

      endDatePickerProps.onChange(pickedEndDate);
      wrapper.update();
      endDatePickerProps = getEndDatePickerProps(wrapper);
      expect(endDatePickerProps.selected).toBe(pickedEndDate);
      expect(testCase.props.onChange).toHaveBeenCalledTimes(2);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        {
          date: pickedStartDate.toDate(),
          endDate: pickedEndDate.toDate()
        },
        testCase.props.id
      );
    });

    test('native datepicker selection works', () => {
      const nativeStartDate = '2017-08-09';
      const nativeEndDate = '2017-11-09';
      const mockEventOne = {
        target: {
          value: nativeStartDate
        }
      };
      const mockEventTwo = {
        target: {
          value: nativeEndDate
        }
      };
      const nativeStartDateMoment = moment(nativeStartDate, 'YYYY-MM-DD');
      const nativeEndDateMoment = moment(nativeEndDate, 'YYYY-MM-DD');

      const nativeStartDatepickerProps = wrapper
        .find('input[pattern]')
        .first()
        .props();
      const nativeEndDatepickerProps = wrapper
        .find('input[pattern]')
        .last()
        .props();

      nativeStartDatepickerProps.onChange(mockEventOne);
      wrapper.update();
      datePickerProps = getDatePickerProps(wrapper);
      expect(datePickerProps.selected.toString()).toBe(
        nativeStartDateMoment.toString()
      );
      expect(testCase.props.onChange).toHaveBeenCalledTimes(1);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        {
          date: nativeStartDateMoment.toDate(),
          endDate: testCase.props.value.endDate
        },
        testCase.props.id
      );

      nativeEndDatepickerProps.onChange(mockEventTwo);
      wrapper.update();
      endDatePickerProps = getEndDatePickerProps(wrapper);
      expect(endDatePickerProps.selected.toString()).toBe(
        nativeEndDateMoment.toString()
      );
      expect(testCase.props.onChange).toHaveBeenCalledTimes(2);
      expect(testCase.props.onChange).toHaveBeenCalledWith(
        {
          date: nativeStartDateMoment.toDate(),
          endDate: nativeEndDateMoment.toDate()
        },
        testCase.props.id
      );
    });
  });

  describe(testCases.disabled.description, () => {
    beforeEach(() => {
      testCase = testCases.disabled;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      datePickerProps = getDatePickerProps(wrapper);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('disabled prop works', () => {
      wrapper.find('input').forEach((input) => {
        expect(input.props()).toHaveProperty('disabled', true);
      });
    });
  });

  describe(testCases.restrictedRange.description, () => {
    beforeEach(() => {
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
      testCase = testCases.restrictedRange;
      startDatePickerProps = getDatePickerProps(wrapper);
      endDatePickerProps = getEndDatePickerProps(wrapper);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('selecting date outside min/max range will fail', () => {
      const pickedStartDate = startDatePickerProps.minDate.subtract(1, 'days');
      const pickedEndDate = startDatePickerProps.minDate.add(1, 'days');

      startDatePickerProps.onChange(pickedStartDate);
      wrapper.update();
      expect(startDatePickerProps.selected).toBe(null);

      endDatePickerProps.onChange(pickedEndDate);
      wrapper.update();
      expect(endDatePickerProps.selected).toBe(null);
    });

    test('selecting date outside min/max range will fail', () => {
      const nativeStartDate = '2012-08-09';
      const nativeEndDate = '2020-11-09';
      const mockEventOne = {
        target: {
          value: nativeStartDate
        }
      };
      const mockEventTwo = {
        target: {
          value: nativeEndDate
        }
      };

      const nativeStartDatepickerProps = wrapper
        .find('input[pattern]')
        .first()
        .props();
      const nativeEndDatepickerProps = wrapper
        .find('input[pattern]')
        .last()
        .props();

      nativeStartDatepickerProps.onChange(mockEventOne);
      wrapper.update();
      datePickerProps = getDatePickerProps(wrapper);
      expect(datePickerProps.selected).toBe(null);

      nativeEndDatepickerProps.onChange(mockEventTwo);
      wrapper.update();
      endDatePickerProps = getEndDatePickerProps(wrapper);
      expect(endDatePickerProps.selected).toBe(null);
    });
  });

  describe(testCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = testCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );

      startDatePickerProps = getDatePickerProps(wrapper);
      endDatePickerProps = getEndDatePickerProps(wrapper);
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('dateRange prop works', () => {
      const inputClassName = `.${testCase.props.themeTextInput
        .split(' ')
        .join('.')}`;
      expect(wrapper.find(inputClassName)).toHaveLength(2);
    });

    test('placeholder props work', () => {
      const inputClassName = `.${testCase.props.themeTextInput
        .split(' ')
        .join('.')}`;
      expect(wrapper.find(inputClassName).first().props().placeholderText).toBe(
        testCase.props.placeholder
      );
      expect(wrapper.find(inputClassName).last().props().placeholderText).toBe(
        testCase.props.endDatePlaceholder
      );
    });
  });
});
