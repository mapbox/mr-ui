/*
Basic.
*/
import React from 'react';
import ControlFile from '../control-file';

export default function Example() {
  return (
    <ControlFile
      id="name"
      onChange={(value, id) => {
        console.log(value, id);
      }}
    />
  );
}
