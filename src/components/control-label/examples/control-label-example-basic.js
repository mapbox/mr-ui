/*
Basic.
*/
import React from 'react';
import ControlLabel from '../control-label';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <ControlLabel id="name" text="Enter your name" />
        <input id="name" type="text" placeholder="Enter name" />
      </div>
    );
  }
}
