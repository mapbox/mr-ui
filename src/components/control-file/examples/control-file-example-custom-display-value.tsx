/*
Basic.
*/
import React from 'react';
import ControlFile from '../control-file';

export default function Example() {
  return (
    <ControlFile
      id="name"
      displayValue={<span className="w180 txt-truncate">A long truncated display value</span>}
      onChange={(value, id) => {
        console.log(value, id);
      }}
    />
  );
}
