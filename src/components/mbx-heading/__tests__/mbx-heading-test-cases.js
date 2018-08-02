import MbxHeading from '../mbx-heading';

const testCases = {};

testCases.primary = {
  description: 'Primary',
  component: MbxHeading,
  props: {
    children: 'Primary',
    variant: 'primary'
  }
};

testCases.secondary = {
  description: 'Secondary',
  component: MbxHeading,
  props: {
    children: 'Secondary',
    variant: 'secondary'
  }
};

testCases.tertiary = {
  description: 'Tertiary',
  component: MbxHeading,
  props: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
};

testCases.minor = {
  description: 'Minor',
  component: MbxHeading,
  props: {
    children: 'Minor',
    variant: 'minor'
  }
};

export { testCases };
