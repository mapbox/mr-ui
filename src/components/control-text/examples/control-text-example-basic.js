/*
Basic
*/
import React from 'react';
import ControlText from '../control-text';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', id: '' };
  }

  handleChange = (value, id) => {
    this.setState({ value, id });
  };

  render() {
    return <ControlText id="basic" onChange={this.handleChange} />;
  }
}
