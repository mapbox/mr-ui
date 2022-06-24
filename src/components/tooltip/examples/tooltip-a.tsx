/*
A standard tooltip.
*/
import React, { ReactElement } from 'react';
import Tooltip from '../tooltip';

export default function Example(): ReactElement {
  return (
    <Tooltip content="Here's your tooltip">
      <div>Here</div>
    </Tooltip>
  );
}
