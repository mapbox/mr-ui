import React from 'react';
import ControlLegend from '../control-legend';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlLegend,
  props: {
    text: 'basic legend',
    id: 'legend-id'
  }
};

testCases.basicWithAside = {
  description: 'basic with aside',
  component: ControlLegend,
  props: {
    text: 'basic legend',
    id: 'legend-id',
    aside: <span>Aside text</span>
  }
};

testCases.basicWithOptional = {
  description: 'basic with optional',
  component: ControlLegend,
  props: {
    text: 'basic legend',
    id: 'legend-id',
    optional: true,
    aside: 'This is an aside',
    themeLegend: 'color-red'
  }
};

export { testCases };
