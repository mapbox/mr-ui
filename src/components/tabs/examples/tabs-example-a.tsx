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
      tabBorder={false}
      themeTabsContainer="mb12"
      themeTabItem="color-gray color-gray-dark-on-active color-blue-on-hover pr12 txt-bold txt-s"
      items={[
        { id: 'one', label: 'Tab 1 title', content: 'Tab 1 content' },
        { id: 'two', label: 'Tab 2 title', content: 'Tab 2 content' },
        {
          id: 'three',
          label: 'Tab 3 title',
          content: <div>Tab 3 content</div>
        },
        { id: 'four', label: 'Tab 4 title', content: <div>Tab 4 content</div> }
      ]}
    />
  );
}
