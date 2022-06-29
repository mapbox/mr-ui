/*
Basic.
*/
import React from 'react';
import ControlCard from '../control-card';

export default class Example extends React.Component {
  render() {
    return (
      <ControlCard>
        <p className="bg-gray-faint txt-mono txt-break-word px12 py12">
          console.log('Hello world!');
        </p>
      </ControlCard>
    );
  }
}
