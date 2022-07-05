import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import ControlWrapper from '../control-wrapper';
import * as Switch from '@radix-ui/react-switch';

interface Props {
  id: string,
  onChange: (checked: boolean, id: string) => void;
  disabled?: boolean;
  value?: boolean;
  optional?: boolean;
  label?: ReactElement | string;
  validationError?: ReactElement;
  themeControlSwitchContainer?: string;
  themeControlSwitch?: string;
  themeControlWrapper?: string;
  themeLabel?: string;
}

export default function ControlSwitch(props: Props): ReactElement {
  const {
    id,
    onChange,
    disabled = false,
    validationError,
    label,
    value = false,
    themeControlWrapper = '',
    themeControlSwitchContainer = '',
    themeControlSwitch = 'switch--s-label',
    optional = false,
    themeLabel = 'txt-s ml6'
  } = props;

  const switchProps = {
    id,
    checked: value,
    disabled,
    onCheckedChange: (v: boolean) => onChange(v, id),
    'data-testid': `${id}-switch`
  };

  return (
    <ControlWrapper
      themeControlWrapper={themeControlWrapper}
      id={id}
      validationError={validationError}
    >
      <fieldset className="flex flex--center-cross">
        <Switch.Root {...switchProps} className={`switch ${themeControlSwitch}`}>
          <Switch.Thumb />
        </Switch.Root>
        <label htmlFor={id} className={`switch-container ${themeControlSwitchContainer}`}>
          <span className={themeLabel}>
            {label}
            {optional && <span className="ml3 txt-normal">(optional)</span>}
          </span>
        </label>
      </fieldset>
    </ControlWrapper>
  );
}

ControlSwitch.propTypes = {
  /** Identifying value for input element. */
  id: PropTypes.string.isRequired,
  /** Input value */
  value: PropTypes.bool,
  /** If provided the text, "(optional)" is appended to the value of the label element. */
  optional: PropTypes.bool,
  /** Called during changes to the input element. */
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

