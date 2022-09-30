/*
Disabled state.
*/
import React, { ReactElement } from 'react';
import Tooltip from '../tooltip';

export default function Example(): ReactElement {
  return (
    <>
      <Tooltip disabled coloring="warning" content="Here's your tooltip">
        <button className="btn mr6">
          A tooltip should not appear
        </button>
      </Tooltip>
      <Tooltip coloring="warning" content="Here's your tooltip">
        <button disabled className="btn">
          A tooltip should appear
        </button>
      </Tooltip>
    </>
  );
}
