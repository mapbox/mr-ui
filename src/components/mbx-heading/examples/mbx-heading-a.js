/*
All the heading variants.

(You can see in this example that the semantics determined by an `<h*>`
element are independent of the styling performed by this component.)
*/
import React from 'react';
import MbxHeading from '../mbx-heading';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mb12">
          <MbxHeading variant="primary">Primary</MbxHeading>
        </h2>
        <h3 className="mb12">
          <MbxHeading variant="secondary">Secondary</MbxHeading>
        </h3>
        <h2 className="mb12">
          <MbxHeading variant="tertiary">Tertiary</MbxHeading>
        </h2>
        <h6>
          <MbxHeading variant="minor">Minor</MbxHeading>
        </h6>
      </div>
    );
  }
}
