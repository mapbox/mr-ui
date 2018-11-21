/*
Controlled alert with options.
*/
import React from 'react';
import ControlAlert from '../control-alert';
import Icon from '../../icon';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true
    };
  }

  toggleAlert = () => {
    const { showAlert } = this.state;

    this.setState({
      showAlert: !showAlert
    });
  };

  renderShowAlertButton() {
    const { showAlert } = this.state;

    if (showAlert) return null;

    return (
      <div className="flex-parent flex-parent--end-main mr18 mb18">
        <button
          className="color-gray-dark color-blue-on-hover flex-child"
          onClick={this.toggleAlert}
          type="button"
        >
          <span className="inline-block txt-s">
            Show alert again <Icon name="refresh" inline={true} />
          </span>
        </button>
      </div>
    );
  }

  renderAlert() {
    const { showAlert } = this.state;

    if (!showAlert) return null;

    return (
      <div className="animation-fade-in animation--speed-1 txt-s">
        <ControlAlert onButtonClick={this.toggleAlert} theme="warning">
          <p className="mx6 align-center txt-uppercase txt-em">
            The yellow power ranger
          </p>
        </ControlAlert>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderShowAlertButton()}
        {this.renderAlert()}
      </div>
    );
  }
}
