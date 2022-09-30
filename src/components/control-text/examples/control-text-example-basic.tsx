/*
Basic
*/
import React, { useState } from 'react';
import ControlText from '../control-text';

export default function Example() {
  const [ value, setValue ] = useState('');
  return <ControlText id="basic" value={value} onChange={setValue} />;
}
