/*
Basic.
*/
import React, { ReactElement } from 'react';
import ControlSwitch from '../control-switch';

export default function Example(): ReactElement {
  return (
    <ControlSwitch
      id="active-animal"
      label="Activate animal"
      onChange={
        (/* value, id */) => {
          /* console.log(value, id); */
        }
      }
    />
  );
}
