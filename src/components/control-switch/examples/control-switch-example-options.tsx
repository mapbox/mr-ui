/*
All options.
*/
import React, { ReactElement, useState } from 'react';
import ControlSwitch from '../control-switch';


function label(): ReactElement {
  return (
    <div className="txt-bold color-purple">Active fancy animal</div>
  );
}

export default function Example(): ReactElement {
  const [error, setError] = useState('');

  return (
    <ControlSwitch
      id="fancy-animal"
      label={label()}
      validationError={error}
      value={true}
      themeControlWrapper="border border--purple px6 py6"
      themeControlSwitchContainer="bg-pink-faint px12 py6 round"
      themeControlSwitch="switch--purple switch--s-label"
      onChange={() => setError("Can't deactivate a fancy animal!")}
    />
  );
}

