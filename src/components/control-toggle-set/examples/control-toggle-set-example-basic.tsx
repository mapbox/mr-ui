/*
Basic.
*/
import React, { useState } from 'react';
import ControlToggleSet from '../control-toggle-set';

export default function Example() {
  const [ value, setValue ] = useState('humpback-whale');
  return (
    <ControlToggleSet
      id="animals"
      value={value}
      onChange={setValue}
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
