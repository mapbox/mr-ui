/*
Basic.
*/
import React, { useState } from 'react';
import ControlTextarea from '../control-textarea';

export default function Example() {
  const [value, setValue] = useState('');
  return (
    <ControlTextarea
      id="story"
      label="Your story"
      onChange={setValue}
      value={value}
    />
  );
}
