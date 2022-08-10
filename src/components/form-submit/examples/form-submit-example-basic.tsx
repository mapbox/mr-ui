/*
Basic.
*/
import React from 'react';
import FormSubmit from '../form-submit';

export default function Example() {

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <FormSubmit
      onSubmit={onSubmit}
      label="Submit me"
    />
  );
}
