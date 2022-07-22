/*
Pass themeTabsContainer css classes
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';

const tabs = [
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
  const [activeTab, setActiveTab] = useState('bf');

  const onTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
      overlapBorder={true}
      themeTabsContainer={"border-b border--gray-light"}
    />
  );
}
