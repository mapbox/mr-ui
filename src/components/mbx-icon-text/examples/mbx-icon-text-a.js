/*
The standard button-without-a-background look. Also useful for menu items.
*/
import React from 'react';
import MbxIconText from '../mbx-icon-text';

export default class Example extends React.Component {
  render() {
    return (
      <button type="button" className="link txt-bold txt-s block">
        <MbxIconText iconBefore="duplicate">Duplicate</MbxIconText>
      </button>
    );
  }
}
