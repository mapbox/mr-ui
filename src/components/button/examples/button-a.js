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
          <Button onClick={noop} passthroughProps={{ 'aria-label': 'Primary' }}>
            Primary
          </Button>
        </div>
        <div className="my6">
          <Button
            variant="secondary"
            onClick={noop}
            passthroughProps={{ 'aria-label': 'Primary' }}
          >
            Secondary
          </Button>
        </div>
        <div className="my6">
          <Button
            variant="discouraging"
            onClick={noop}
            passthroughProps={{ 'aria-label': 'Discouraging' }}
          >
            Discouraging
          </Button>
        </div>
        <div className="my6">
          <Button
            variant="destructive"
            onClick={noop}
            passthroughProps={{ 'aria-label': 'Destructive' }}
          >
            Destructive
          </Button>
        </div>
        <div className="my6">
          <Button
            variant="appPrimary"
            onClick={noop}
            passthroughProps={{ 'aria-label': 'AppPrimary' }}
          >
            AppPrimary
          </Button>
        </div>
        <div className="my6">
          <Button
            variant="appSecondary"
            onClick={noop}
            passthroughProps={{ 'aria-label': 'AppSecondary' }}
          >
            AppSecondary
          </Button>
        </div>
      </div>
    );
  }
}

function noop() {}
