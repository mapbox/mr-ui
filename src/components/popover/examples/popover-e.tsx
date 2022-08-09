/*
Popover with non-static height.
*/

import React, { ReactElement, useState } from 'react';
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

  const renderPopover = (
    <ExampleInner />
  );

  return (
    <div className="flex flex--space-between-main">
      <button
        onClick={() => setOpen(!open)}
        className="btn"
      >
        Trigger here
      </button>
      <Popover
        active={open}
        content={renderPopover}
        onExit={() => setOpen(false)}
        placement="top"
        alignment="start"
      >
        Anchor here
      </Popover>
    </div>
  );
}
