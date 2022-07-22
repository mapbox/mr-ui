/*
Large tabs with custom colors, a disabled item, and a container without a bottom border.
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';

const items = [
  {
    id: 'Robots',
    content: "Robots content"
  },
  {
    id: 'Animals',
    disabled: true,
    content: "Animals content"
  },
  {
    id: 'Clouds',
    content: "Clouds content"
  },
  {
    id: 'Messes',
    content: "Messes content"
  }
];

export default function Example(): ReactElement {
  const [activeTab, setActiveTab] = useState('Clouds');

  const onTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <Tabs
      tabs={items}
      activeTab={activeTab}
      onTabChange={onTabChange}
      size="large"
      activeColor="pink"
      inactiveColor="purple"
      hoverColor="purple-dark"
    />
  );
}
