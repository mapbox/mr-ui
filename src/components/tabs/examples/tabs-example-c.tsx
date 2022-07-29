/*
Small, unbolded tabs, as in Studio's style editor.

Each item's label is derived from its ID instead of separately provided.

Also, the container's layout classes illustrate one way that you can
right-align the tabs.
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';

const items = [
  {
    id: 'colors'
  },
  {
    id: 'sizes'
  },
  {
    id: 'shapes'
  }
];

export default function Example(): ReactElement {
  const [active, setActive] = useState('sizes');

  return (
    <div className="px12 py12 bg-gray-faint">
      <Tabs
        items={items}
        active={active}
        onChange={(id: string) => setActive(id)}
        size="small"
        overlapBorder={true}
        bold={false}
        themeTabsContainer={"border-b border--gray-light w300 flex flex--end-main"}
      />
    </div>
  );
}
