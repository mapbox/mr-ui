/*
Basic.
*/
import React, { ReactElement } from 'react';
import ControlWrapper from '../control-wrapper';

export default function Example(): ReactElement {
  return (
    <ControlWrapper id="name" validationError="A value was not entered">
      <input id="name" type="text" placeholder="Enter name" />
    </ControlWrapper>
  );
}
