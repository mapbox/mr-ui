/*
Basic.
*/
import React from 'react';
import ControlSelect from '../control-select';

export default class Example extends React.Component {
  render() {
    return (
      <ControlSelect
        id="animals"
        label="Choose an animal"
        onChange={
          (/* value, id */) => {
            /* console.log(value, id); */
          }
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
