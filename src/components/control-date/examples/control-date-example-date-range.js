/*
Date range input, with label, `minDate` of 10/1/2017, `maxDate` of 10/1/2018, placeholders, and some custom theming.
*/
import React from 'react';
import moment from 'moment';
import ControlDate from '../control-date';
import validateStartDateBeforeEndDate from '../../form/validators/validate-start-date-before-end-date';

export default class Example extends React.Component {
  state = { dateValue: '', validationError: '' };

  onDateChange = (dateValue) => {
    const validationError = validateStartDateBeforeEndDate(dateValue);
    this.setState({ dateValue, validationError });
  };

  render() {
    return (
      <ControlDate
        id="dateRange"
        moment={moment}
        value={this.state.dateValue}
        onChange={this.onDateChange}
        dateRange={true}
        placeholder="start"
        endDatePlaceholder="end"
        themeLabel="txt-bold txt-s color-purple"
        label="Date range"
        minDate={new Date('2017-10-1')}
        maxDate={new Date('2018-10-1')}
        validationError={this.state.validationError}
      />
    );
  }
}
