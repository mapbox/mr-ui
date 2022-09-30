/*
Warning popover.
*/
import React, { ReactElement, useState } from 'react';
import Popover from '../popover';

export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);

  const renderPopover = (
    <>
      This is a warning popover.
    </>
  );

  return (
    <Popover
      active={open}
      content={renderPopover}
      coloring="warning"
      onExit={() => setOpen(false)}
      placement="left"
    >
      <button
        onClick={() => setOpen(!open)}
        className="btn btn--orange"
      >
        Toggle popover
      </button>
    </Popover>
  );
}
