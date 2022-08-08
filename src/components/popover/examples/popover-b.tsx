/*
Dark popover.
*/
import React, { ReactElement, useState } from 'react';
import Popover from '../popover';

export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);

  const renderPopover = (
    <>
      This is a dark popover.
    </>
  );

  return (
    <Popover
      active={open}
      content={renderPopover}
      coloring="dark"
      onExit={() => setOpen(false)}
      alignment="center"
    >
      <button className="btn btn--gray" onClick={() => setOpen(open ? false : true)}>
        Toggle popover
      </button>
    </Popover>
  );
}
