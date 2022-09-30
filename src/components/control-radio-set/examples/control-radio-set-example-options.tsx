/*
More options
*/
import React, { useState } from 'react';
import ControlRadioSet from '../control-radio-set';

export default function Example() {
  const [ value, setValue ] = useState('sea-otter');
  return (
    <ControlRadioSet
      id="more-options"
      onChange={setValue}
      value={value}
      validationError="oh no!"
      themeControlWrapper="bg-gray-lighter px12 py12 round"
      themeRadioContainer="w-full"
      themeRadio="radio--gray radio--active-red mr6"
      optional={true}
      options={[
        {
          label: 'Humpback whale',
          value: 'humpback-whale'
        },
        {
          label: 'Rufous Hummingbird',
          value: 'rufous-hummingbird',
          disabled: true
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
