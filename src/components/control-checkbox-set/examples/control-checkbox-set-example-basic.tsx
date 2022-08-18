/*
Basic
*/
import React from 'react';
import ControlCheckboxSet from '../control-checkbox-set';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', id: '' };
  }

  handleChange = (value, id) => {
    this.setState({ value, id });
  };

  render() {
    return (
      <ControlCheckboxSet
        id="basic"
        onChange={this.handleChange}
        options={[
          {
            label: 'Humpback whale',
            value: 'humpback-whale'
          }
        ]}
      />
    );
  }
}
