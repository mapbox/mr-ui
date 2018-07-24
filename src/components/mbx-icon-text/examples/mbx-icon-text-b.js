/*
Go see the next thing!
*/
import React from 'react';
import MbxIconText from '../mbx-icon-text';

export default class Example extends React.Component {
  render() {
    return (
      <button type="button" className="link link-purple">
        <MbxIconText iconAfter="chevron-right">Take me there</MbxIconText>
      </button>
    );
  }
}
