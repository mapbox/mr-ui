/*
Options.
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
        iconButtonProps={{
          themeButton: 'btn--xs py3 px3 round bg-pink',
          tooltipProps: {
            content: 'Copy?'
          }
        }}
      />
    );
  }
}
