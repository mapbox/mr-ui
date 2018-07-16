/*
Basic.
*/
import React from 'react';
import Form from '../form';
// import FormSubmit from '../form-submit';
// import ControlText from '../control-text';

const formConfig = {
  name: {
    label: 'Your name',
    placeHolder: 'Enter your name'
  }
};

export default class Example extends React.Component {
  renderForm = (/* getControlProps, onSubmit */) => {
    return (
      <div className="grid grid--gut24">
        <div className="col col--12 col--6-mm">
          {/* <ControlText {...getControlProps('name')} /> */}
        </div>
        <div className="col col--12 col--6-mm">
          {/* <FormSubmit onSubmit={onSubmit} /> */}
        </div>
      </div>
    );
  };

  handleFormData = (/* formData */) => {
    // console.log(formData);
  };

  render() {
    return (
      <Form
        config={formConfig}
        renderForm={this.renderForm}
        handleFormData={this.handleFormData}
      />
    );
  }
}
