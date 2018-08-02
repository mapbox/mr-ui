/*
A slightly wider, outlined button with an alternate color, using [MbxIconText](#mbxicontext) to prefix the text with an icon.
*/
import React from 'react';
import MbxButton from '../mbx-button';
import MbxIconText from '../../mbx-icon-text';

export default class Example extends React.Component {
  render() {
    return (
      <MbxButton onClick={() => {}} width="large" outline={true} color="purple">
        <MbxIconText iconBefore="floppy">Save your map</MbxIconText>
      </MbxButton>
    );
  }
}
