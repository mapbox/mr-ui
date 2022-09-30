/*
Basic.
*/
import React, { useState, ReactElement } from 'react';
import Accordion from '../accordion';

export default function Example(): ReactElement {
  const [active, setActive] = useState(null);
  return (
    <Accordion
      onToggle={(id: string) => setActive(id === active ? '' : id)}
      activeItem={active}
      items={[
        { id: 'one', header: () => <span>one</span>, body: 'First body' },
        { id: 'two', header: () => <span>two</span>, body: 'Second body' },
        { id: 'three', header: () => <span>three</span>, body: 'Third body' }
      ]}
    />
  );
}
