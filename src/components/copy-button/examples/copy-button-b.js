/*
Custom styling.
*/
import React from 'react';
import CopyButton from '../copy-button';

export default class Example extends React.Component {
  render() {
    return (
      <div className="flex-parent flex-parent--center-cross">
        <div className="flex-child mr24">
          <CopyButton
            text="Hello fancy explorer"
            className="px6 py6 btn btn--purple btn--stroke"
          />
        </div>
        <div className="flex-child flex-child--grow">
          <input
            className="input input--s wmax360"
            placeholder="Paste text here"
          />
        </div>
      </div>
    );
  }
}
