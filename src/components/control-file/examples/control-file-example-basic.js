/*
Basic.
*/
import React from 'react';
import ControlFile from '../control-file';

export default class Example extends React.Component {
  render() {
    return (
      <ControlFile
        id="name"
        onChange={
          (/* value, id */) => {
            /* console.log(value, id); */
          }
        }
      />
    );
  }
}
