/*
Basic.
*/
import React from 'react';
import ControlTextarea from '../control-textarea';

export default class Example extends React.Component {
  state = { value: '' };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <ControlTextarea
        id="story"
        label="Your story"
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}
