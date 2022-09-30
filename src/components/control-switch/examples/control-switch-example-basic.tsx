/*
Basic.
*/
import React, { ReactElement, useState } from 'react';
import ControlSwitch from '../control-switch';

export default function Example(): ReactElement {
  const [value, setValue] = useState(false);

  return (
    <ControlSwitch
      id="active-animal"
      label="Active animal"
      value={value}
      onChange={v => setValue(v)}
    />
  );
}
