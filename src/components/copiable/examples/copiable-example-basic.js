/*
Basic.
*/
import React from 'react';
import Copiable from '../copiable';

export default class Example extends React.Component {
  state = { text: '' };

  onCopy = text => {
    this.setState({ text });
  };

  render() {
    return (
      <Copiable value="the text you copy the text you copy the text you copy the text you copy the text you copy" />
    );
  }
}
