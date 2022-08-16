/*
Basic.
*/
import React from 'react';
import ControlLabel from '../control-label';

export default function Example() {
  return (
    <>
      <ControlLabel id="name" text="Enter your name" />
      <input id="name" type="text" placeholder="Enter name" />
    </>
  );
}
