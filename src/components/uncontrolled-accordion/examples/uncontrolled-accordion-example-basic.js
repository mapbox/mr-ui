/*
Basic.
*/
import React from 'react';
import UncontrolledAccordion from '../uncontrolled-accordion';

export default class Example extends React.Component {
  render() {
    return (
      <UncontrolledAccordion
        items={[
          { id: 'one', header: () => <span>one</span>, body: 'First body' },
          { id: 'two', header: () => <span>two</span>, body: 'Second body' },
          { id: 'three', header: () => <span>three</span>, body: 'Third body' }
        ]}
      />
    );
  }
}
