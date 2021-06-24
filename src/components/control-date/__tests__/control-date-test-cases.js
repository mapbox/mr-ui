import ControlDate from '../control-date';
import safeSpy from '../../../test-utils/safe-spy';
import moment from 'moment';

const testCases = {};

const date = new Date('2017-08-15T15:05:04+00:00');
const endDate = new Date('2017-08-22T15:05:04+00:00');
const minDate = new Date('2017-08-12T15:05:04+00:00');
const maxDate = new Date('2017-08-27T15:05:04+00:00');

testCases.single = {
  description: 'single datepicker',
  component: ControlDate,
  props: {
    moment,
    id: 'singleDate',
    label: 'Single Datepicker',
    value: {
      date
    },
    utcOffset: 0,
    onChange: safeSpy()
  }
};

testCases.double = {
  description: 'double datepicker',
  component: ControlDate,
  props: {
    moment,
    id: 'doubleDate',
    label: 'Double Datepicker',
    value: {
      date,
      endDate
    },
    utcOffset: 0,
    onChange: safeSpy()
  }
};

testCases.disabled = {
  description: 'disabled datepicker',
  component: ControlDate,
  props: {
    moment,
    id: 'disabledDate',
    label: 'Disabled',
    disabled: true,
    dateRange: true,
    utcOffset: 0,
    onChange: safeSpy()
  }
};

testCases.restrictedRange = {
  description: 'Restricted Date range',
  component: ControlDate,
  props: {
    moment,
    id: 'doubleDate',
    label: 'Restricted Date Range',
    dateRange: true,
    minDate,
    maxDate,
    utcOffset: 0,
    onChange: safeSpy()
  }
};

testCases.allOptions = {
  description: 'All datepicker options',
  component: ControlDate,
  props: {
    moment,
    id: 'disabledDate',
    label: 'Disabled',
    aside: 'A note on the date format',
    disabled: false,
    dateRange: true,
    minDate,
    maxDate,
    placeholder: 'Select a radical date',
    endDatePlaceholder: 'Select a radical end date',
    themeWrapper: 'react-control-date flex',
    themeCalendar: 'border--0',
    themeTextInput: 'input someFunSelector',
    utcOffset: 0,
    onChange: safeSpy()
  }
};

export { testCases };
