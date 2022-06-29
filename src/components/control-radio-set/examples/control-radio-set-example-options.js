/*
More options
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
        id="more-options"
        legend="Choose an animal"
        onChange={this.handleChange}
        value="sea-otter"
        validationError="oh no!"
        themeControlWrapper="bg-gray px12 py12"
        themeRadioContainer="w-full"
        themeRadio="radio--white radio--active-red mr6"
        themeLegend="color-white"
        optional={true}
        aside={
          <span className="txt-bold inline-block color-white">
            Aside content
          </span>
        }
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
