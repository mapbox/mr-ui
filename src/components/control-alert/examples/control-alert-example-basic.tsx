/*
Basic.
*/
import React from 'react';
import ControlAlert from '../control-alert';

export default function Example() {
  return (
    <ControlAlert theme="success">
      <p className="mx6">
        <a className="link" href="http://www.mapbox.com">
          You're the best!
        </a>{' '}
        Around! Nothing's gonna keep you down. You're the best! Around!
        Nothing's gonna keep you down.
      </p>
    </ControlAlert>
  );
}
