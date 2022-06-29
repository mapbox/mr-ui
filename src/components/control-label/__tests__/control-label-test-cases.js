import React from 'react';
import ControlLabel from '../control-label';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlLabel,
  props: {
    text: 'basic label',
    id: 'label-id'
  }
};

testCases.basicWithAside = {
  description: 'basic with aside',
  component: ControlLabel,
  props: {
    text: 'basic label',
    id: 'label-id',
    aside: <span>Aside text</span>
  }
};

testCases.basicWithOptional = {
  description: 'basic with optional',
  component: ControlLabel,
  props: {
    text: 'basic label',
    id: 'label-id',
    aside: 'This is an aside',
    optional: true,
    themeLabel: 'color-red'
  }
};

export { testCases };
