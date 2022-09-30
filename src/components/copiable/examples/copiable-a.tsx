/*
All Copiables work the same way.
*/
import React from 'react';
import Copiable from '../copiable';

export default function Example() {
  return (
    <>
      <div className="mb12">
        <Copiable value="The length of this copiable text is to illustrate to you how this component's styling works when the text wraps to multiple lines" />
      </div>
      <div>
        <Copiable
          value="https://www.mapbox.com/something/special/for/you/to/see/be/truncated/in/length/if/you/shrink/your/browser/window/today"
          truncated={true}
        />
      </div>
    </>
  );
}
