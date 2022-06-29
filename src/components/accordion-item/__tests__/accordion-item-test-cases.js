/* eslint-disable react/display-name */

import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import AccordionItem from '../accordion-item';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: AccordionItem,
  props: {
    onToggle: safeSpy(),
    id: 'one',
    header: () => <span>one</span>,
    body: 'First body'
  }
};

testCases.disabled = {
  description: 'disabled',
  component: AccordionItem,
  props: {
    onToggle: safeSpy(),
    id: 'one',
    header: () => <span>one</span>,
    body: 'First body',
    disabled: true
  }
};

testCases.allOptions = {
  description: 'all options',
  component: AccordionItem,
  props: {
    onToggle: safeSpy(),
    id: 'one',
    active: true,
    header: () => <span>one</span>,
    body: 'First body',
    themeItem: 'bg-red-faint border-b border--red-dark',
    themeItemHeader:
      'bg-red txt-l txt-bold link link--white bg-red-dark-on-hover px6 py6',
    themeItemBody: 'py6 px6 txt-l bg-red-light'
  }
};

export { testCases };
