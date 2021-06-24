/*
Control alert with callback to toggle warning themed alert in view.
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
      <div className="flex flex--end-main mr18 mb18">
        <button
          aria-label="Show alert again"
          className="color-gray-dark color-blue-on-hover"
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
          <p className="mx6">The yellow power ranger is the best.</p>
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
