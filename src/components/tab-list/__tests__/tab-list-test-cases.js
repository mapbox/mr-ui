import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import TabList from '../tab-list';
import Icon from '../../icon';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: TabList,
  props: {
    onChange: safeSpy(),
    activeItem: 'three',
    items: [
      { id: 'one', label: 'Label one' },
      { id: 'two', label: 'Label two' },
      { id: 'three', label: 'Label three' },
      { id: 'four', label: 'Label four' }
    ]
  }
};

testCases.links = {
  description: 'links',
  component: TabList,
  props: {
    activeItem: 'one',
    items: [
      { id: 'one', label: 'Label one', href: '#' },
      { id: 'two', label: 'Label two', href: '#' },
      { id: 'three', label: 'Label three', href: '#' },
      { id: 'four', label: 'Label four', href: '#' }
    ]
  }
};

testCases.truncateAll = {
  description: 'truncate all',
  component: TabList,
  props: {
    activeItem: 'one',
    truncateBy: 0,
    items: [
      { id: 'one', label: 'Label one', href: '#' },
      { id: 'two', label: 'Label two', href: '#' },
      { id: 'three', label: 'Label three', href: '#' },
      { id: 'four', label: 'Label four', href: '#' }
    ]
  }
};

testCases.moreButtonOnlyIfNeeded = {
  description:
    'only show the more + button if there are more items not currently visible',
  component: TabList,
  props: {
    activeItem: 'one',
    truncateBy: 2,
    items: [
      { id: 'one', label: 'Label one' },
      { id: 'two', label: 'Label two' }
    ]
  }
};

testCases.labelNode = {
  description: 'a label contains a node',
  component: TabList,
  props: {
    onChange: safeSpy(),
    activeItem: 'three',
    items: [
      { id: 'one', label: <Icon name="star" /> },
      { id: 'two', label: 'Label two' },
      { id: 'three', label: 'Label three' },
      { id: 'four', label: 'Label four' }
    ]
  }
};

export { testCases };
