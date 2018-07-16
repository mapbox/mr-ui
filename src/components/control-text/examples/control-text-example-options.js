/*
More options
*/
import React from 'react';
import ControlText from '../control-text';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', id: '' };
  }

  handleChange = (value, id) => {
    this.setState({ value, id });
  };

  render() {
    return (
      <ControlText
        id="more-options"
        label="Enter your email"
        type="email"
        validationError="Oh no!"
        errorStyle="inline"
        themeControlWrapper="bg-gray-faint px12 py12"
        themeControlInput="input input--s"
        themeLabel="txt-bold"
        errorTooltipTheme="color-white round py6 px12 shadow-darken25 txt-xs"
        errorTooltipBackgroundColor="#2c3d54"
        onChange={this.handleChange}
        placeholder="Enter an email address"
        value="foo@bar.baz"
        optional={true}
        noAuto={true}
        aside={<span>Aside text</span>}
      />
    );
  }
}
