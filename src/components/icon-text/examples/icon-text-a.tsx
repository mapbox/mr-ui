/*
The standard button-without-a-background look. Also useful for menu items.
*/
import React from 'react';
import IconText from '../icon-text';

export default class Example extends React.Component {
  render() {
    return (
      <button
        aria-label="Duplicate"
        type="button"
        className="link txt-bold txt-s block"
      >
        <IconText iconBefore="duplicate">Duplicate</IconText>
      </button>
    );
  }
}
