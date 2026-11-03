import React, { ChangeEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ControlWrapper from '../control-wrapper';

export interface ControlSwitchProps {
  id: string,
  onChange: (checked: boolean, id: string) => void;
  disabled?: boolean;
  value?: boolean;
  label?: ReactElement | string;
  validationError?: ReactElement | string;
  themeControlSwitchContainer?: string;
  themeControlSwitch?: string;
  themeControlWrapper?: string;
  themeLabel?: string;
}

export default function ControlSwitch(props: ControlSwitchProps): ReactElement {
  const {
    id,
    onChange,
    disabled = false,
    validationError,
    label,
    value = false,
    themeControlWrapper = '',
    themeControlSwitchContainer = '',
    themeControlSwitch = '',
    themeLabel = 'txt-s ml6'
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked, id);
  };

  const labelClasses = classnames(`switch-container ${themeControlSwitchContainer}`, {
    'cursor-pointer': !disabled
  })

  return (
    <ControlWrapper
      themeControlWrapper={themeControlWrapper}
      id={id}
      validationError={validationError}
    >
      <label htmlFor={id} className={labelClasses}>
        <input
          type="checkbox"
          role="switch"
          id={id}
          checked={value}
          disabled={disabled}
          onChange={handleChange}
          data-testid={`${id}-switch`}
        />
        <div className={`switch ${themeControlSwitch}`} />
        {label && <span className={themeLabel}>{label}</span>}
      </label>
    </ControlWrapper>
  );
}

ControlSwitch.propTypes = {
  /** Identifying value for input element. */
  id: PropTypes.string.isRequired,
  /** Input value */
  value: PropTypes.bool,
  /** Called during changes to the input element. Two arguments are received: 1. The incoming value and 2. the ID of the input. */
  onChange: PropTypes.func.isRequired,
  /** Value passed to the label element. */
  label: PropTypes.node,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /** Assembly classes to apply to the switch container */
  themeControlSwitchContainer: PropTypes.string,
  /** Assembly classes to apply to the switch element */
  themeControlSwitch: PropTypes.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string,
  /** Assembly classes to apply to the label element */
  themeLabel: PropTypes.string
};

