/*
Basic
*/
import React, { useState } from 'react';
import Select from '../select';

export default function Example() {
  const [value, setValue] = useState('');

  const options = [
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
  ].map(option => {
    return {
      ...option,
      active: value === option.value
    }
  });

  return (
    <Select
      value={value}
      onChange={setValue}
      options={options}
    >
      <span className="link">
        {`Click to change the value to: `}
        <span className="txt-bold">{value}</span>
      </span>
    </Select>
  );
}
