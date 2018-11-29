import PageHeader from '../page-header';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: PageHeader,
  props: {
    siteName: 'Studio',
    items: [
      {
        href: '/styles',
        text: 'Styles'
      },
      {
        href: '/tilesets',
        text: 'Tilesets'
      },
      {
        href: '/datasets',
        text: 'Datasets'
      }
    ]
  }
};

export { testCases };
