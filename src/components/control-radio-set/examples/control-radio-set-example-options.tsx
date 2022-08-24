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
      themeControlWrapper="bg-gray px12 py12"
      themeRadioContainer="w-full"
      themeRadio="radio--white radio--active-red mr6"
      optional={true}
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
