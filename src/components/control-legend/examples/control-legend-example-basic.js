/*
Basic.
*/
import React from 'react';
import ControlLegend from '../control-legend';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <ControlLegend id="name" text="Enter your name" />
        <input id="name" type="text" placeholder="Enter name" />
      </div>
    );
  }
}
