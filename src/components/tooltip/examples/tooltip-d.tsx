/*
Other themes & positions.
*/
import React, { ReactElement } from 'react';
import Tooltip from '../tooltip';

export default function Example(): ReactElement {
  return (
    <>
      <Tooltip coloring="warning" placement="left" alignment="end" content="Here's your tooltip">
        <button className="btn btn--orange mr6">
          Warning
        </button>
      </Tooltip>
      <Tooltip coloring="error" placement="right" alignment="start" content="Here's your tooltip">
        <button className="btn btn--red">
          Error
        </button>
      </Tooltip>
    </>
  );
}
