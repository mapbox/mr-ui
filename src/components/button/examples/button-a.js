/*
All the standard variants.
*/
import React from 'react';
import Button from '../button';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div className="my6">
          <Button onClick={noop}>Primary</Button>
        </div>
        <div className="my6">
          <Button variant="secondary" onClick={noop}>
            Secondary
          </Button>
        </div>
        <div className="my6">
          <Button variant="discouraging" onClick={noop}>
            Discouraging
          </Button>
        </div>
        <div className="my6">
          <Button variant="destructive" onClick={noop}>
            Destructive
          </Button>
        </div>
        <div className="my6">
          <Button variant="appPrimary" onClick={noop}>
            AppPrimary
          </Button>
        </div>
        <div className="my6">
          <Button variant="appSecondary" onClick={noop}>
            AppSecondary
          </Button>
        </div>
      </div>
    );
  }
}

function noop() {}
