/*
Error popover.
*/
import React, { ReactElement, useState } from 'react';
import Popover from '../popover';

export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);

  const renderPopover = (
    <>
      This is a error popover.
    </>
  );

  return (
    <Popover
      active={open}
      content={renderPopover}
      coloring="error"
      onExit={() => setOpen(false)}
      alignment="start"
    >
      <button
        onClick={() => setOpen(!open)}
        className="btn btn--red"
      >
        Toggle popover
      </button>
    </Popover>
  );
}
