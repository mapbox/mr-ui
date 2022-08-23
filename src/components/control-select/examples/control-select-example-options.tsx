/*
More options
*/
import React, { useState } from 'react';
import ControlSelect from '../control-select';

const groupedOptions = [
  {
    label: 'Group One',
    options: [
      {
        label: 'Foo',
        value: 'foo'
      },
      {
        label: 'Bar',
        value: 'bar'
      }
    ]
  },
  {
    label: 'Group two',
    options: [
      {
        label: 'Baz',
        value: 'baz'
      },
      {
        label: 'Qux',
        value: 'qux',
        disabled: true
      }
    ]
  }
];

export default function Example() {
  const [value, setValue] = useState('baz');
  return (
    <ControlSelect
      id="group"
      label="Choose from a group"
      validationError="oh no!"
      value={value}
      optional={true}
      aside={<span>Aside text</span>}
      themeControlSelect="select--white bg-blue px12"
      onChange={setValue}
      options={groupedOptions}
    />
  );
}
