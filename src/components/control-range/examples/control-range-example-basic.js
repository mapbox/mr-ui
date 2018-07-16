/*
Basic.
*/
import React from 'react';
import ControlRange from '../control-range';

export default class Example extends React.Component {
  render() {
    return (
      <ControlRange
        id="name"
        min={10}
        max={1000}
        step={10}
        onChange={
          (/* value, id */) => {
            /* console.log(value, id); */
          }
        }
      />
    );
  }
}
