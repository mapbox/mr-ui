import NewTabLink from '../new-tab-link';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: NewTabLink,
  props: {
    children: 'Hello explorer!',
    href: ''
  }
};

testCases.styling = {
  description: 'styling',
  component: NewTabLink,
  props: {
    children: 'Hello explorer!',
    className: 'link link--pink',
    href: 'http://www.mapbox.com'
  }
};

export { testCases };
