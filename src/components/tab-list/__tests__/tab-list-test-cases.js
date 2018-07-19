import safeSpy from '../../../test-utils/safe-spy';
import TabList from '../tab-list';

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

export { testCases };
