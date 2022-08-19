/*
Basic
*/
import React, { useState } from 'react';
import ControlCheckboxSet from '../control-checkbox-set';

export default function Example() {
  const [ value, setValue ] = useState([]);
  return (
    <ControlCheckboxSet
      id="basic"
      onChange={setValue}
      value={[...value]}
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
