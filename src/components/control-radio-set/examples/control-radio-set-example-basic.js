/*
Basic
*/
import React from 'react';
import ControlRadioSet from '../control-radio-set';

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
      <ControlRadioSet
        id="basic"
        legend="Choose an animal"
        onChange={this.handleChange}
        options={[
          {
            label: 'Humpback whale',
            value: 'humpback-whale'
          },
          {
            label: 'Rufous Hummingbird',
            value: 'rufous-hummingbird'
          },
          {
            label: 'Sea Otter',
            value: 'sea-otter'
          },
          {
            label: 'Snowshoe Hare',
            value: 'snowshoe-hare'
          }
        ]}
      />
    );
  }
}
