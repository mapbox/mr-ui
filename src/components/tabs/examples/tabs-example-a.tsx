/*
Basic.
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';

export default function Example(): ReactElement {
  const [active, setActive] = useState('');

  return (
    <Tabs
      onChange={(id: string) => setActive(id)}
      active={active}
      themeTabsContainer="mb12"
      items={[
        { id: 'one', label: 'Tab 1 title', content: "Tab 1 content" },
        { id: 'two', label: 'Tab 2 title', content: "Tab 2 content" },
        { id: 'three', label: 'Tab 3 title', content: <div>Tab 3 content</div> },
        { id: 'four', label: 'Tab 4 title', content: <div>Tab 4 content</div> },
      ]}
    />
  );
}
