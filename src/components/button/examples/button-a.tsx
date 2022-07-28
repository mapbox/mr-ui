/*
All the standard variants.
*/
import React, { ReactElement } from 'react';
import Button from '../button';

export default function Example(): ReactElement {
  return (
    <>
      <div className="my6">
        <Button onClick={noop} passthroughProps={{ 'role': 'button' }}>
          Primary
        </Button>
      </div>
      <div className="my6">
        <Button
          variant="secondary"
          onClick={noop}
        >
          Secondary
        </Button>
      </div>
      <div className="my6">
        <Button
          variant="tertiary"
          onClick={noop}
        >
          Tertiary
        </Button>
      </div>
      <div className="my6">
        <Button
          variant="destructive"
          onClick={noop}
        >
          Destructive
        </Button>
      </div>
      <div className="my6">
        <Button
          variant="appPrimary"
          onClick={noop}
        >
          AppPrimary
        </Button>
      </div>
      <div className="my6">
        <Button
          variant="appSecondary"
          onClick={noop}
        >
          AppSecondary
        </Button>
      </div>
      <div className="my6">
        <Button
          onClick={noop}
          disabled={true}
        >
          Disabled
        </Button>
      </div>
    </>
  );
}

function noop() {}
