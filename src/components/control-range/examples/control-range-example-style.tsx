/*
Additional Style Options
*/
import React, { useState } from 'react';
import ControlRange from '../control-range';

export default function Example() {
  const [value, setValue] = useState([25]);
  return (
    <ControlRange
      id="name"
      optional={true}
      value={[...value]}
      min={10}
      max={100}
      step={1}
      onChange={setValue}
      tooltip={true}
      themeControlRangeActive='bg-blue round'
      themeControlTrack='bg-gray h3'
      themeControlThumb='bg-blue border--0 h12 w12 shadow-darken25'
      themeTooltipColoring='dark'
    />
  );
}
