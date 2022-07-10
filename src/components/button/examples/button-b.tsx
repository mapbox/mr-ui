/*
A slightly wider, outlined button with an alternate color, using [IconText](#icontext) to prefix the text with an icon.
*/
import React, { ReactElement } from 'react';
import Button from '../button';
import IconText from '../../icon-text';

export default function Example(): ReactElement {
  return (
    <Button
      onClick={() => {}}
      width="large"
      outline={true}
      color="purple"
      passthroughProps={{ 'aria-label': 'Save your map' }}
    >
      <IconText iconBefore="floppy">Save your map</IconText>
    </Button>
  );
}
