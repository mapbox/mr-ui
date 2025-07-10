/*
Standard popover.
*/
import React, { ReactElement, useState } from 'react';
import Popover from '../popover';

export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);

  const renderPopover = <div>This is a popover.</div>;

  return (
    <Popover
      active={open}
      content={renderPopover}
      onExit={() => setOpen(false)}
      alignment="center"
    >
      <button className="btn" onClick={() => setOpen(!open)}>
        Toggle popover
      </button>
    </Popover>
  );
}
