/*
A standard tooltip.
*/
import React from 'react';
import Tooltip from '../tooltip';

export default class Example extends React.Component {
  render() {
    return (
      <Tooltip content="Here's your tooltip">
        <button className="btn">Basic</button>
      </Tooltip>
    );
  }
}
