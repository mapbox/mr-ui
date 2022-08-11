/*
Basic.
*/
import React from 'react';
import Form from '../form';
import FormSubmit from '../../form-submit';
import ControlText from '../../control-text';
import validateRequired from '../validators/validate-required';

const formConfig = {
  name: {
    label: 'Your name',
    placeholder: 'Enter your name',
    validator: validateRequired('Your name')
  }
};

export default function Example() {
  const renderForm = (getControlProps, onSubmit) => {
    return (
      <>
        <div className="w-full w-1/2-mm mb12">
          <ControlText {...getControlProps('name')} />
        </div>
        <div className="w-full w-1/2-mm">
          <FormSubmit onSubmit={onSubmit} />
        </div>
      </>
    );
  };

  const handleFormData = (controlValues) => {
    console.log(controlValues);
    return controlValues;
  };

  return (
    <Form
      config={formConfig}
      renderForm={renderForm}
      handleFormData={handleFormData}
    />
  );
}
