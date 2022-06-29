/*
Go see the next thing!
*/
import React from 'react';
import IconText from '../icon-text';

export default class Example extends React.Component {
  render() {
    return (
      <button
        aria-label="Take me there"
        type="button"
        className="link link-purple"
      >
        <IconText iconAfter="chevron-right">Take me there</IconText>
      </button>
    );
  }
}
