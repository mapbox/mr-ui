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
            label: 'Whale',
            value: 'humpback-whale'
          },
          {
            label: 'Bird',
            value: 'rufous-hummingbird'
          },
          {
            label: 'Otter',
            value: 'sea-otter'
          },
          {
            label: 'Hare',
            value: 'snowshoe-hare'
          }
        ]}
      />
    );
  }
}
