/*
Popover with non-static height.
*/

import React, { ReactElement, useState, useRef } from 'react';
import Popover from '../popover';
import Button from '../../button';

function ExampleInner(): ReactElement {
  const [items, setItems] = useState([0]);

  return (
    <>
      <ul>
        {items &&
          items.map((_: number, index: number) => (
            <li key={index}>This is a popover!</li>
          ))}
      </ul>
      <div className="flex flex--row mt6">
        <Button onClick={() => setItems([...items, 0])} size="medium">
          Add
        </Button>
        <span className="ml6">
          <Button onClick={() => setItems(items.slice(1))} size="medium">
            Remove
          </Button>
        </span>
      </div>
    </>
  );
}


export default function Example(): ReactElement {
  const [open, setOpen] = useState(false);
  const anchor = useRef(null);

  const renderPopover = (
    <Popover
      getAnchorElement={anchor.current}
      onExit={() => setOpen(false)}
      ignoreClickWithinElement={(el: HTMLElement) => el === anchor.current}
      placement="top"
      alignment="left"
    >
      <ExampleInner />
    </Popover>
  );

  return (
    <>
      <Button
        coloring="error"
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
