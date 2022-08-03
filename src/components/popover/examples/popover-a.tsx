/*
Standard popover.
*/
import React, { ReactElement, useState } from 'react';
import Popover, { PopoverAnchor } from '../popover';
import Button from '../../button';

export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);

  const renderPopover = (
    <Popover
      onExit={() => setOpen(false)}
      alignment="center"
    >
      This is a popover.
    </Popover>
  );

  return (
    <>
      <PopoverAnchor>
        <Button
          onClick={() => setOpen(open ? false : true)}
          size="medium"
          passthroughProps={{
            'aria-label': 'Toggle popover'
          }}
        >
          Toggle popover
        </Button>
      </PopoverAnchor>
      {open && renderPopover}
    </>
  );
}
