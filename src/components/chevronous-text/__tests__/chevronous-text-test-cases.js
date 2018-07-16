import ChevronousText from '../chevronous-text';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ChevronousText,
  props: {
    text: 'Explore Mapbox'
  }
};

testCases.additionalIconClasses = {
  description: 'additional icon classes',
  component: ChevronousText,
  props: {
    text: 'Explore Mapbox',
    themeIcon: 'color-blue'
  }
};

export { testCases };
