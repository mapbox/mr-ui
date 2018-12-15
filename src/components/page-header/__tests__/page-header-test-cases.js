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

testCases.accounts = {
  description: 'Account',
  component: PageHeader,
  props: {
    siteName: 'Account',
    items: [
      {
        href: '/',
        text: 'Dashboard'
      },
      {
        href: '/access-tokens/',
        text: 'Tokens'
      },
      {
        href: '/statistics/',
        text: 'Statistics'
      },
      {
        href: '/invoices/',
        text: 'Invoices'
      },
      {
        href: '',
        text: 'Settings'
      }
    ]
  }
};

export { testCases };
