/*
Warning popover.
*/
import React, { ReactElement, useState, useRef } from 'react';
import Popover from '../popover';
import Button from '../../button';

export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const renderPopover = (
    <Popover
      coloring="warning"
      getAnchorElement={anchor.current}
      onExit={() => setOpen(false)}
      ignoreClickWithinElement={(el: HTMLElement) => el === anchor.current}
      alignment="center"
    >
      This is a warning popover.
    </Popover>
  );

  return (
    <>
      <Button
        onClick={() => setOpen(open ? false : true)}
        size="medium"
        passthroughProps={{
          'aria-label': 'Toggle popover',
          ref: anchor
        }}
      >
        Toggle popover
      </Button>
      {open && renderPopover}
    </>
  );
}
