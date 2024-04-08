/*
With icon.
*/
import React from 'react';
import ControlLabel from '../control-label';
import Icon from '../../icon/icon';

export default function Example() {
  const getLabelWithIcon = (
    <>
      <Icon name="marker" inline={true} />
      Your story
    </>
  );
  return (
    <>
      <ControlLabel id="name" text={getLabelWithIcon} />
      <input id="name" type="text" placeholder="Enter name" />
    </>
  );
}
