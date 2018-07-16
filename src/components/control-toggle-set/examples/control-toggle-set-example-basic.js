/*
Basic.
*/
import React from 'react';
import ControlToggleSet from '../control-toggle-set';

export default class Example extends React.Component {
  render() {
    return (
      <ControlToggleSet
        id="animals"
        legend="Choose an animal"
        onChange={
          (/* value, id */) => {
            /* console.log(value, id) */
          }
        }
        initialValue={['sea-otter', 'humpback-whale']}
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
