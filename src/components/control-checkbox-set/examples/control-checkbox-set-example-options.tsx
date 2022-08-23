/*
More options
*/
import React, { useState } from 'react';
import ControlCheckboxSet from '../control-checkbox-set';

export default function Example() {
  const [ value, setValue ] = useState(['sea-otter', 'humpback-whale']);
  return (
    <ControlCheckboxSet
      id="more-options"
      onChange={setValue}
      value={[...value]}
      validationError="oh no!"
      themeControlWrapper="bg-gray-lighter round px12 py12"
      themeCheckboxContainer="w-full"
      themeCheckbox="radio--white radio--active-red mr6"
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
