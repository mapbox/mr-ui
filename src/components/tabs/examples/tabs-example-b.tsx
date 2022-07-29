/*
Pass themeTabsContainer css classes
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';

const items = [
  {
    label: 'Breakfast',
    id: 'bf',
    content: (
      <ul>
        <li>Eggs</li>
        <li>Bacon</li>
        <li>Tomatos</li>
      </ul>
    )
  },
  {
    label: 'Lunch',
    id: 'ln',
    content: (
      <ul>
        <li>Stake</li>
        <li>Fries</li>
        <li>Tomatoes</li>
      </ul>
    )
  },
  {
    label: 'Dinner',
    id: 'dr',
    content: (
      <ul>
        <li>Salad</li>
        <li>Carrots</li>
        <li>Chicken</li>
      </ul>
    )
  },
];

export default function Example(): ReactElement {
  const [active, setActive] = useState('bf');

  return (
    <Tabs
      items={items}
      active={active}
      onChange={(id: string) => setActive(id)}
      overlapBorder={true}
      themeTabsContainer={"mb12 border-b border--gray-light"}
    />
  );
}
