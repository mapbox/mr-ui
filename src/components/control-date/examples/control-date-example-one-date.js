/*
Single date input.
*/
import React from 'react';
import moment from 'moment';
import ControlDate from '../control-date';

export default class Example extends React.Component {
  state = { dateValue: '' };

  onDateChange = (dateValue) => {
    this.setState({ dateValue });
  };

  render() {
    return (
      <ControlDate
        id="singleDate"
        moment={moment}
        value={this.state.dateValue}
        onChange={this.onDateChange}
      />
    );
  }
}
