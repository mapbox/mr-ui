/*
Basic
*/
import React, { useState } from 'react';
import Select from '../select';

export default function Example() {
  const [value, setValue] = useState('humpback-whale');

  const animals = {
    'humpback-whale': 'Humpback whale',
    'rufous-hummingbird': 'Rufous Hummingbird',
    'sea-otter': 'Sea Otter',
    'snowshoe-hare': 'Snowshoe Hare'
  };

  const options = Object.keys(animals).map(option => {
    return {
      label: animals[option],
      value: option,
      active: value === option
    }
  });

  return (
    <Select
      onChange={setValue}
      options={options}
    >
      <span className="link">
        {`Today's animal is: `}
        <span className="txt-bold">{animals[value]}</span>
      </span>
    </Select>
  );
}
