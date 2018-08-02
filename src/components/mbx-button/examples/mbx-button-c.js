/*
A link that looks like a  slightly short button.

The additional prop `data-test` is passed on directly to the `<a>`.
*/
import React from 'react';
import MbxButton from '../mbx-button';

export default class Example extends React.Component {
  render() {
    return (
      <div id="mbx-button-c">
        <MbxButton href="#mbx-button-c" size="medium" data-test="link-to-c">
          You are here
        </MbxButton>
      </div>
    );
  }
}
