/*
Basic.
*/
import React, { useState } from 'react';
import ControlRange from '../control-range';

export default function Example() {
  const [value, setValue] = useState([500]);
  return (
    <ControlRange
      id="name"
      value={[...value]}
      min={10}
      max={1000}
      step={10}
      onChange={setValue}
    />
  );
}
