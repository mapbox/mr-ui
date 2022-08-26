/*
More options
*/
import React, { useState } from 'react';
import ControlRange from '../control-range';

export default function Example() {
  const [value, setValue] = useState([25, 50, 75]);
  return (
    <ControlRange
      id="name"
      label="Which thumb should you move?"
      optional={true}
      value={[...value]}
      min={10}
      max={100}
      step={1}
      onChange={setValue}
      tooltip={true}
      themeControlRange='range--purple w-full h-full'
      themeControlRangeActive='bg-purple-dark'
    />
  );
}
