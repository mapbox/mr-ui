/*
A standard tooltip.
*/
import React, { ReactElement } from 'react';
import Tooltip from '../tooltip';

export default function Example(): ReactElement {
  return (
    <Tooltip content="Here's your tooltip">
      <button className="btn">
        Basic
      </button>
    </Tooltip>
  );
}
