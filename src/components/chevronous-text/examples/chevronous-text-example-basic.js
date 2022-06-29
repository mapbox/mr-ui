/*
Basic.
*/
import React from 'react';
import ChevronousText from '../chevronous-text';

export default class Example extends React.Component {
  render() {
    return (
      <div style={{ lineHeight: '24px' }}>
        <ChevronousText text="Hello explorer" />
      </div>
    );
  }
}
