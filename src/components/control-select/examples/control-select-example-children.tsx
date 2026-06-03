/*
Custom display with children
*/
import React, { useState } from 'react';
import ControlSelect from '../control-select';
import Icon from '../../icon';

const options = [
  { label: 'Meters', value: 'meters' },
  { label: 'Kilometers', value: 'kilometers' },
  { label: 'Miles', value: 'miles' },
  { label: 'Feet', value: 'feet' }
];

export default function Example() {
  const [value, setValue] = useState('meters');
  const selected = options.find((o) => o.value === value);

  return (
    <ControlSelect
      id="unit"
      options={options}
      value={value}
      onChange={setValue}
    >
      <div className="flex-parent flex-parent--center-cross btn btn--stroke btn--gray round">
        <span className="flex-child">{selected?.label}</span>
        <span>
          <Icon name="caret-down" inline={true} />
        </span>
      </div>
    </ControlSelect>
  );
}
