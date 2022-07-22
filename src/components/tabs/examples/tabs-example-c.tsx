/*
Small, unbolded tabs, as in Studio's style editor.

Each item's label is derived from its ID instead of separately provided.

Also, the container's layout classes illustrate one way that you can
right-align the tabs.
*/
import React, { ReactElement, useState } from 'react';
import Tabs from '../tabs';

const tabs = [
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
  const [activeTab, setActiveTab] = useState('sizes');

  const onTabChange = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="px12 py12 bg-gray-faint">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        size="small"
        overlapBorder={true}
        bold={false}
        themeTabsContainer={"border-b border--gray-light w300 flex flex--end-main"}
      />
    </div>
  );
}
