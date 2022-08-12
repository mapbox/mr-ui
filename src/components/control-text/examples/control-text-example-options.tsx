/*
More options
*/
import React, { useState } from 'react';
import ControlText from '../control-text';

export default function Example() {
  const [ value, setValue ] = useState('');

  return (
    <ControlText
      id="more-options"
      label="Enter your email"
      type="email"
      validationError="Oh no!"
      errorStyle="inline"
      themeControlWrapper="bg-gray-faint px12 py12"
      themeControlInput="input input--s"
      themeLabel="txt-bold"
      popoverProps={{
        coloring: 'dark',
        padding: 'small'
      }}
      onChange={setValue}
      placeholder="Enter an email address"
      value={value}
      optional={true}
      noAuto={true}
      aside={<span>Aside text</span>}
    />
  );
}
