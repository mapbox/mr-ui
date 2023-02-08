/*
Optional child.
*/
import React from 'react';
import CopyButton from '../copy-button';

export default function Example() {
  return (
    <div className="inline-block">
      <CopyButton themeTooltip="dark" text="Some copy from the custom element">
        <button className="w240 btn">Just a custom element</button>
      </CopyButton>
    </div>
  );
}
