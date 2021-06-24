/* eslint-disable react/display-name */

import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import ControlledAccordion from '../controlled-accordion';

const testCases = {};

testCases.basic = {
  description: 'basic',
  component: ControlledAccordion,
  props: {
    onToggle: safeSpy(),
    items: [
      { id: 'one', header: () => <span>one</span>, body: 'First body' },
      { id: 'two', header: () => <span>two</span>, body: 'Second body' },
      { id: 'three', header: () => <span>three</span>, body: 'Third body' }
    ]
  }
};

testCases.disabled = {
  description: 'disabled',
  component: ControlledAccordion,
  props: {
    onToggle: safeSpy(),
    items: [
      { id: 'one', header: () => <span>one</span>, body: 'First body' },
      { id: 'two', header: () => <span>two</span>, body: 'Second body' },
      {
        id: 'three',
        header: () => <span>three</span>,
        body: 'Third body',
        disabled: true
      }
    ]
  }
};

testCases.allOptions = {
  description: 'all options',
  component: ControlledAccordion,
  props: {
    onToggle: safeSpy(),
    items: [
      {
        id: 'one',
        header: (active) => {
          return (
            <div>
              one
              {active && <span className="ml6 txt-normal">I am active</span>}
            </div>
          );
        },
        body: 'First body'
      },
      {
        id: 'two',
        header: (active) => {
          return (
            <div>
              two
              {active && <span className="ml6 txt-normal">I am active</span>}
            </div>
          );
        },
        body: 'Second body'
      },
      {
        id: 'third',
        header: (active) => {
          return (
            <div>
              third
              {active && <span className="ml6 txt-normal">I am active</span>}
            </div>
          );
        },
        body: 'Third body'
      }
    ],
    activeItem: 'one',
    themeItem: 'bg-red-faint border-b border--red-dark',
    themeItemHeader:
      'bg-red txt-l txt-bold link link--white bg-red-dark-on-hover px6 py6',
    themeItemBody: 'py6 px6 txt-l bg-red-light'
  }
};

export { testCases };
