/*
Frontend validators.
*/
import React from 'react';
import validateAccessToken from '../validate-access-token';
import validateBearing from '../validate-bearing';
import validateDate from '../validate-date';
import validateEmail from '../validate-email';
import validateLatitude from '../validate-latitude';
import validateLongitude from '../validate-longitude';
import validateNumberBetween from '../validate-number-between';
import validateNumber from '../validate-number';
import validatePassword from '../validate-password';
import validatePitch from '../validate-pitch';
import validateRequired from '../validate-required';
import validateStartDateBeforeEndDate from '../validate-start-date-before-end-date';
import validateStyleUri from '../validate-style-uri';
import validateZoom from '../validate-zoom';
import moment from 'moment';
import ControlDate from '../../../control-date';
import ControlText from '../../../control-text';

export default class Example extends React.Component {
  state = {
    accessToken: '',
    accessTokenValidationError: '',
    bearing: '',
    bearingValidationError: '',
    date: '',
    dateValidationError: '',
    dateRange: '',
    dateRangeValidationError: '',
    email: '',
    emailValidationError: '',
    latitude: '',
    latitudeValidationError: '',
    longitude: '',
    longitudeValidationError: '',
    numberBetween: '',
    numberBetweenValidationError: '',
    number: '',
    numberValidationError: '',
    password: '',
    passwordValidationError: '',
    pitch: '',
    pitchValidationError: '',
    required: '',
    requiredValidationError: '',
    styleUri: '',
    styleUriValidationError: '',
    zoom: '',
    zoomValidationError: ''
  };

  updateAccessToken = (accessToken) => {
    const accessTokenValidationError = validateAccessToken(accessToken);
    this.setState({ accessToken, accessTokenValidationError });
  };

  updateBearing = (bearing) => {
    const bearingValidationError = validateBearing(bearing);
    this.setState({ bearing, bearingValidationError });
  };

  updateDate = (date) => {
    const dateValidationError = validateDate(date);
    this.setState({ date, dateValidationError });
  };

  updateDateRange = (dateRange) => {
    const dateRangeValidationError = validateStartDateBeforeEndDate(dateRange);
    this.setState({ dateRange, dateRangeValidationError });
  };

  updateEmail = (email) => {
    const emailValidationError = validateEmail(email);
    this.setState({ email, emailValidationError });
  };

  updateLatitude = (latitude) => {
    const latitudeValidationError = validateLatitude(latitude);
    this.setState({ latitude, latitudeValidationError });
  };

  updateLongitude = (longitude) => {
    const longitudeValidationError = validateLongitude(longitude);
    this.setState({ longitude, longitudeValidationError });
  };

  updateNumberBetween = (numberBetween) => {
    const validateNumberBetween0and10 = validateNumberBetween(0, 10);
    const numberBetweenValidationError =
      validateNumberBetween0and10(numberBetween);
    this.setState({ numberBetween, numberBetweenValidationError });
  };

  updateNumber = (number) => {
    const numberValidationError = validateNumber(number);
    this.setState({ number, numberValidationError });
  };

  updatePassword = (password) => {
    const passwordValidationError = validatePassword(password);
    this.setState({ password, passwordValidationError });
  };

  updatePitch = (pitch) => {
    const pitchValidationError = validatePitch(pitch);
    this.setState({ pitch, pitchValidationError });
  };

  updateRequired = (required) => {
    const validateRequiredDescription = validateRequired('a value');
    const requiredValidationError = validateRequiredDescription(required);
    this.setState({ required, requiredValidationError });
  };

  updateStyleUri = (styleUri) => {
    const styleUriValidationError = validateStyleUri(styleUri);
    this.setState({ styleUri, styleUriValidationError });
  };

  updateZoom = (zoom) => {
    const zoomValidationError = validateZoom(zoom);
    this.setState({ zoom, zoomValidationError });
  };

  render() {
    return (
      <div>
        <ControlText
          id="access-token"
          label="Access token"
          placeholder="pk.ey..."
          value={this.state.accessToken}
          onChange={this.updateAccessToken}
          validationError={this.state.accessTokenValidationError}
        />
        <ControlText
          id="bearing"
          label="Bearing"
          placeholder="16"
          value={this.state.bearing}
          onChange={this.updateBearing}
          validationError={this.state.bearingValidationError}
        />
        <ControlText
          id="date"
          label="Date"
          placeholder="MM/DD/YYYY"
          value={this.state.date}
          onChange={this.updateDate}
          validationError={this.state.dateValidationError}
        />
        <ControlText
          id="email"
          label="Email"
          placeholder="hello@mapbox.com"
          value={this.state.email}
          onChange={this.updateEmail}
          validationError={this.state.emailValidationError}
        />
        <ControlText
          id="latitude"
          label="Latitude"
          placeholder="30.2672"
          value={this.state.latitude}
          onChange={this.updateLatitude}
          validationError={this.state.latitudeValidationError}
        />
        <ControlText
          id="longitude"
          label="Longitude"
          placeholder="-97.7431"
          value={this.state.longitude}
          onChange={this.updateLongitude}
          validationError={this.state.longitudeValidationError}
        />
        <ControlText
          id="number-between"
          label="Number between (0 and 10)"
          placeholder="6"
          value={this.state.numberBetween}
          onChange={this.updateNumberBetween}
          validationError={this.state.numberBetweenValidationError}
        />
        <ControlText
          id="number"
          label="Number"
          placeholder="27"
          value={this.state.number}
          onChange={this.updateNumber}
          validationError={this.state.numberValidationError}
        />
        <ControlText
          id="password"
          label="Password"
          placeholder="71yB4..."
          value={this.state.password}
          onChange={this.updatePassword}
          validationError={this.state.passwordValidationError}
        />
        <ControlText
          id="pitch"
          label="Pitch"
          placeholder="30"
          value={this.state.pitch}
          onChange={this.updatePitch}
          validationError={this.state.pitchValidationError}
        />
        <ControlText
          id="required"
          label="Required"
          placeholder="something"
          value={this.state.required}
          onChange={this.updateRequired}
          validationError={this.state.requiredValidationError}
        />
        <ControlDate
          id="dateRange"
          moment={moment}
          value={this.state.dateRangeValue}
          onChange={this.updateDateRange}
          dateRange={true}
          placeholder="start"
          endDatePlaceholder="end"
          label="Start date before end date"
          minDate={new Date('2017-10-1')}
          maxDate={new Date('2018-10-1')}
          validationError={this.state.dateRangeValidationError}
        />
        <ControlText
          id="style-uri"
          label="Style URI"
          placeholder="mapbox://styles/..."
          value={this.state.styleUri}
          onChange={this.updateStyleUri}
          validationError={this.state.styleUriValidationError}
        />
        <ControlText
          id="zoom"
          label="Zoom"
          placeholder="12"
          value={this.state.zoom}
          onChange={this.updateZoom}
          validationError={this.state.zoomValidationError}
        />
      </div>
    );
  }
}
