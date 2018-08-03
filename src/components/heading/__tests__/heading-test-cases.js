import Heading from '../heading';

const testCases = {};

testCases.primary = {
  description: 'Primary',
  component: Heading,
  props: {
    children: 'Primary',
    variant: 'primary'
  }
};

testCases.secondary = {
  description: 'Secondary',
  component: Heading,
  props: {
    children: 'Secondary',
    variant: 'secondary'
  }
};

testCases.tertiary = {
  description: 'Tertiary',
  component: Heading,
  props: {
    children: 'Tertiary',
    variant: 'tertiary'
  }
};

testCases.minor = {
  description: 'Minor',
  component: Heading,
  props: {
    children: 'Minor',
    variant: 'minor'
  }
};

export { testCases };
