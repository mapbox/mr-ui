import LoaderFull from '../loader-full';

const testCases = {};

testCases.loaderBasic = {
  description: 'basic',
  component: LoaderFull.WrappedComponent,
  props: {},
  noDisplay: true
};

testCases.loaderOpaque = {
  description: 'basic',
  component: LoaderFull.WrappedComponent,
  props: {
    opaque: true
  },
  noDisplay: true
};

export { testCases };
