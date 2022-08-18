/*
Chevronous text with options.
*/
import React from 'react';
import ChevronousText from '../chevronous-text';

export default function Example() {
  return (
    <div className="txt-xl">
      <ChevronousText text="Hello Explorer" iconBefore={true} iconSize={45} />
    </div>
  );
}
