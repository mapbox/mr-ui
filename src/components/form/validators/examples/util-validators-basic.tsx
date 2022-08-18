/*
Frontend validators.
*/
import React, { useState, ReactNode } from 'react';
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
import validateStyleUri from '../validate-style-uri';
import validateZoom from '../validate-zoom';
import ControlText from '../../../control-text';

export default function Example() {
  const [accessToken, setAccessToken] = useState('');
  const [accessTokenValidationError, setAccessTokenValidationError] = useState('');
  const [bearing, setBearing] = useState('');
  const [bearingValidationError, setBearingValidationError] = useState('');
  const [date, setDate] = useState('');
  const [dateValidationError, setDateValidationError] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');
  const [latitude, setLatitude] = useState('');
  const [latitudeValidationError, setLatitudeValidationError] = useState('');
  const [longitude, setLongitude] = useState('');
  const [longitudeValidationError, setLongitudeValidationError] = useState('');
  const [numberBetween, setNumberBetween] = useState('');
  const [numberBetweenValidationError, setNumberBetweenValidationError] = useState('');
  const [number, setNumber] = useState('');
  const [numberValidationError, setNumberValidationError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidationError, setPasswordValidationError] = useState<ReactNode>('');
  const [pitch, setPitch] = useState('');
  const [pitchValidationError, setPitchValidationError] = useState('');
  const [required, setRequired] = useState('');
  const [requiredValidationError, setRequiredValidationError] = useState('');
  const [styleUri, setStyleUri] = useState('');
  const [styleUriValidationError, setStyleUriValidationError] = useState('');
  const [zoom, setZoom] = useState('');
  const [zoomValidationError, setZoomValidationError] = useState('');

  const updateAccessToken = (v: string) => {
    setAccessToken(v);
    setAccessTokenValidationError(validateAccessToken(v));
  };

  const updateBearing = (v: string) => {
    setBearing(v);
    setBearingValidationError(validateBearing(v));
  };

  const updateDate = (v: string) => {
    setDate(v);
    setDateValidationError(validateDate(v));
  };

  const updateEmail = (v: string) => {
    setEmail(v);
    setEmailValidationError(validateEmail(v));
  };

  const updateLatitude = (v: string) => {
    setLatitude(v);
    setLatitudeValidationError(validateLatitude(v));
  };

  const updateLongitude = (v: string) => {
    setLongitude(v);
    setLongitudeValidationError(validateLongitude(v));
  };

  const updateNumberBetween = (v: string) => {
    setNumberBetween(v);
    const validateNumberBetween0and10 = validateNumberBetween(0, 10);
    setNumberBetweenValidationError(validateNumberBetween0and10(numberBetween));
  };

  const updateNumber = (v: string) => {
    setNumber(v);
    setNumberValidationError(validateNumber(v));
  };

  const updatePassword = (v: string) => {
    setPassword(v);
    setPasswordValidationError(validatePassword(v));
  };

  const updatePitch = (v: string) => {
    setPitch(v);
    setPitchValidationError(validatePitch(v));
  };

  const updateRequired = (v: string) => {
    setRequired(v);
    setRequiredValidationError(validateRequired('a value', v));
  };

  const updateStyleUri = (v: string) => {
    setStyleUri(v);
    setStyleUriValidationError(validateStyleUri(v));
  };

  const updateZoom = (v: string) => {
    setZoom(v);
    setZoomValidationError(validateZoom(v));
  };

  return (
    <>
      <ControlText
        id="access-token"
        label="Access token"
        placeholder="pk.ey..."
        value={accessToken}
        onChange={updateAccessToken}
        validationError={accessTokenValidationError}
      />
      <ControlText
        id="bearing"
        label="Bearing"
        placeholder="16"
        value={bearing}
        onChange={updateBearing}
        validationError={bearingValidationError}
      />
      <ControlText
        id="date"
        label="Date"
        placeholder="MM/DD/YYYY"
        value={date}
        onChange={updateDate}
        validationError={dateValidationError}
      />
      <ControlText
        id="email"
        label="Email"
        placeholder="hello@mapbox.com"
        value={email}
        onChange={updateEmail}
        validationError={emailValidationError}
      />
      <ControlText
        id="latitude"
        label="Latitude"
        placeholder="30.2672"
        value={latitude}
        onChange={updateLatitude}
        validationError={latitudeValidationError}
      />
      <ControlText
        id="longitude"
        label="Longitude"
        placeholder="-97.7431"
        value={longitude}
        onChange={updateLongitude}
        validationError={longitudeValidationError}
      />
      <ControlText
        id="number-between"
        label="Number between (0 and 10)"
        placeholder="6"
        value={numberBetween}
        onChange={updateNumberBetween}
        validationError={numberBetweenValidationError}
      />
      <ControlText
        id="number"
        label="Number"
        placeholder="27"
        value={number}
        onChange={updateNumber}
        validationError={numberValidationError}
      />
      <ControlText
        id="password"
        label="Password"
        placeholder="71yB4..."
        value={password}
        onChange={updatePassword}
        validationError={passwordValidationError}
      />
      <ControlText
        id="pitch"
        label="Pitch"
        placeholder="30"
        value={pitch}
        onChange={updatePitch}
        validationError={pitchValidationError}
      />
      <ControlText
        id="required"
        label="Required"
        placeholder="something"
        value={required}
        onChange={updateRequired}
        validationError={requiredValidationError}
      />
      <ControlText
        id="style-uri"
        label="Style URI"
        placeholder="mapbox://styles/..."
        value={styleUri}
        onChange={updateStyleUri}
        validationError={styleUriValidationError}
      />
      <ControlText
        id="zoom"
        label="Zoom"
        placeholder="12"
        value={zoom}
        onChange={updateZoom}
        validationError={zoomValidationError}
      />
    </>
  );
}
