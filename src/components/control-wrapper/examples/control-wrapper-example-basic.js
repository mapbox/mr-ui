/*
Basic.
*/
import React from 'react';
import ControlWrapper from '../control-wrapper';

export default class Example extends React.Component {
  render() {
    return (
      <ControlWrapper id="name" validationError="A value was not entered">
        <input id="name" type="text" placeholder="Enter name" />
      </ControlWrapper>
    );
  }
}
