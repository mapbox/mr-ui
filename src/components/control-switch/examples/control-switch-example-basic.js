/*
Basic.
*/
import React from 'react';
import ControlSwitch from '../control-switch';

export default class Example extends React.Component {
  render() {
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
}
