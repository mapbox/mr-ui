/*
Disabled
*/
import React, { ReactElement, useState } from 'react';
import ControlSwitch from '../control-switch';

export default function Example(): ReactElement {
  const [value, setValue] = useState(false);

  return (
    <ControlSwitch
      id="disabled-switch"
      value={value}
      disabled={true}
      onChange={v => setValue(v)}
    />
  );
}

