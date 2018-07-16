/*
Basic.
*/
import React from 'react';
import CopyButton from '../copy-button';

export default class Example extends React.Component {
  state = { text: '' };

  onCopy = text => {
    this.setState({ text });
  };

  render() {
    return (
      <CopyButton
        text="Hello explorer"
        feedbackTime={500}
        onCopy={this.onCopy}
      />
    );
  }
}
