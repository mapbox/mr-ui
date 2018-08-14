/*
A standard tooltip.
*/
import React from 'react';
import Tooltip from '../tooltip';
import Button from '../../button';

export default class Example extends React.Component {
  render() {
    return (
      <Tooltip content="Here's your tooltip">
        <Button size="medium">Basic</Button>
      </Tooltip>
    );
  }
}
