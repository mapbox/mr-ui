/*
All Copiables work the same way.
*/
import React from 'react';
import Copiable from '../copiable';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <div className="mb12">
          <Copiable value="The length of this copiable text is to illustrate to you how this component's styling works when the text wraps to multiple lines" />
        </div>
        <div>
          <Copiable
            value="https://www.mapbox.com/something/special/for/you"
            truncated={true}
          />
        </div>
      </div>
    );
  }
}
