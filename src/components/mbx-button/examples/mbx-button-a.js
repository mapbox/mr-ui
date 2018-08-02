/*
All the standard variants.
*/
import React from 'react';
import MbxButton from '../mbx-button';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div className="my6">
          <MbxButton onClick={noop}>Primary</MbxButton>
        </div>
        <div className="my6">
          <MbxButton variant="secondary" onClick={noop}>
            Secondary
          </MbxButton>
        </div>
        <div className="my6">
          <MbxButton variant="discouraging" onClick={noop}>
            Discouraging
          </MbxButton>
        </div>
        <div className="my6">
          <MbxButton variant="destructive" onClick={noop}>
            Destructive
          </MbxButton>
        </div>
        <div className="my6">
          <MbxButton variant="appPrimary" onClick={noop}>
            AppPrimary
          </MbxButton>
        </div>
        <div className="my6">
          <MbxButton variant="appSecondary" onClick={noop}>
            AppSecondary
          </MbxButton>
        </div>
      </div>
    );
  }
}

function noop() {}
