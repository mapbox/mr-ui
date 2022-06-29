/*
Basic.
*/
import React from 'react';
import FormSubmit from '../form-submit';

export default class Example extends React.Component {
  render() {
    return (
      <FormSubmit
        onSubmit={
          (/* e */) => {
            /* console.log(e); */
          }
        }
        id="submit"
        label="Submit me"
      />
    );
  }
}
