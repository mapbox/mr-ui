/*
Basic
*/
import React, { useState } from 'react';
import Select from '../select';

export default function Example() {
  const [value, setValue] = useState('');
  return (
    <Select
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
    >
      <span className="link">
        This is a trigger for you to click
      </span>
    </Select>
  );
}
