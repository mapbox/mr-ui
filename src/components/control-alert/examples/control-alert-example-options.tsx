/*
Control alert with callback to toggle warning themed alert in view.
*/
import React, { useState } from 'react';
import ControlAlert from '../control-alert';
import Icon from '../../icon';

export default function Example() {
  const [showAlert, setShowAlert] = useState(true);

  const renderShowAlertButton = () => {
    return (
      <div className="flex flex--end-main mr18 mb18">
        <button
          aria-label="Show alert again"
          className="color-gray-dark color-blue-on-hover"
          onClick={() => setShowAlert(true)}
          type="button"
        >
          <span className="inline-block txt-s">
            Show alert again <Icon name="refresh" inline={true} />
          </span>
        </button>
      </div>
    );
  }

  const renderAlert = () => {
    return (
      <div className="animation-fade-in animation--speed-1 txt-s">
        <ControlAlert onButtonClick={() => setShowAlert(false)} theme="warning">
          <p className="mx6">The yellow power ranger is the best.</p>
        </ControlAlert>
      </div>
    );
  }

  return (
    <div>
      {!showAlert && renderShowAlertButton()}
      {showAlert && renderAlert()}
    </div>
  );
}
