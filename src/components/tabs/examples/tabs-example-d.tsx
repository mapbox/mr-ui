/*
Large tabs with custom style, a disabled item, a none string tab, and a container without a bottom border.
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';
import Tooltip from '../../tooltip/tooltip';

const items = [
  {
    id: 'Robots',
    content: 'Robots content'
  },
  {
    id: 'Animals',
    disabled: true,
    content: 'Animals content'
  },
  {
    id: 'Clouds',
    content: 'Clouds content'
  },
  {
    id: 'Messes',
    label: (
      <Tooltip content="Messes">
        <span>Messes</span>
      </Tooltip>
    ),
    content: 'Messes content'
  }
];

export default function Example(): ReactElement {
  const [active, setActive] = useState('Clouds');

  return (
    <Tabs
      items={items}
      active={active}
      onChange={(id: string) => setActive(id)}
      tabBorder={false}
      size="large"
      themeTabsContainer="mb12"
      themeTabItem="color-pink-on-active color-purple bg-blue-faint-on-active color-purple-dark-on-hover px12 py6 round txt-bold"
    />
  );
}
