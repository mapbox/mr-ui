import Badge from '../badge';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: Badge,
  props: {
    badgeText: 'Hello'
  }
};

testCases.color = {
  description: 'color',
  component: Badge,
  props: {
    badgeText: 'Blue',
    coloring: 'blue'
  }
};

testCases.tooltip = {
  description: 'tooltip',
  component: Badge,
  props: {
    badgeText: 'Friday',
    tooltipText: 'The best day.'
  }
};

testCases.colorAndTooltip = {
  description: 'color and tooltip',
  component: Badge,
  props: {
    badgeText: 'Ahoy',
    coloring: 'purple',
    tooltipText:
      'A call used to greet someone or draw attention to something from a distance.'
  }
};

export { testCases };
