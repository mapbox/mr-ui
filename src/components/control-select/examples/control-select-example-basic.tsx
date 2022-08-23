/*
Basic
*/
import React, { useState } from 'react';
import ControlSelect from '../control-select';

export default function Example() {
  const [value, setValue] = useState('');
  return (
    <ControlSelect
      id="animals"
      label="Choose an animal"
      value={value}
      onChange={setValue}
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
