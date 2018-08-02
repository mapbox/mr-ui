/*
To control button width, you can use `width: "full"` and put the button in a
wrapper container with an Assembly width class.

Sometimes, for example, you might want a column or row of equal-width buttons.
*/
import React from 'react';
import MbxButton from '../mbx-button';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div className="mb24 flex-parent">
          <div className="flex-child w120 mr12">
            <MbxButton size="medium" width="full" onClick={noop}>
              Door
            </MbxButton>
          </div>
          <div className="flex-child w120 mr12">
            <MbxButton size="medium" width="full" onClick={noop}>
              Dog
            </MbxButton>
          </div>
          <div className="flex-child w120 mr12">
            <MbxButton size="medium" width="full" onClick={noop}>
              Dash
            </MbxButton>
          </div>
        </div>
        <div className="w60">
          <div className="my3">
            <MbxButton
              variant="secondary"
              size="medium"
              width="full"
              onClick={noop}
            >
              A
            </MbxButton>
          </div>
          <div className="my3">
            <MbxButton
              variant="secondary"
              size="medium"
              width="full"
              onClick={noop}
            >
              B
            </MbxButton>
          </div>
          <div className="my3">
            <MbxButton
              variant="secondary"
              size="medium"
              width="full"
              onClick={noop}
            >
              C
            </MbxButton>
          </div>
        </div>
      </div>
    );
  }
}

function noop() {}
