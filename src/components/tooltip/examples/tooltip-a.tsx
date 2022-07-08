/*
A standard tooltip.
*/
import React, { ReactElement } from 'react';
import Tooltip from '../tooltip';
import Button from '../../button';

export default function Example(): ReactElement {
  return (
    <Tooltip content="Here's your tooltip">
      <Button size="medium">
        Basic
      </Button>
    </Tooltip>
  );
}
