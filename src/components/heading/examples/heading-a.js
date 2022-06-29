/*
All the heading variants.

(You can see in this example that the semantics determined by an `<h*>`
element are independent of the styling performed by this component.)
*/
import React from 'react';
import Heading from '../heading';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mb12">
          <Heading variant="primary">Primary</Heading>
        </h2>
        <h3 className="mb12">
          <Heading variant="secondary">Secondary</Heading>
        </h3>
        <h2 className="mb12">
          <Heading variant="tertiary">Tertiary</Heading>
        </h2>
        <h6>
          <Heading variant="minor">Minor</Heading>
        </h6>
      </div>
    );
  }
}
