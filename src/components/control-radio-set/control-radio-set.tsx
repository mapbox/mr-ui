import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlWrapper from '../control-wrapper';
import { InputProps } from '../typings';

interface Props {
  id: string;
  onChange: (value: string, id: string) => void;
  options: Array<InputProps & {
    label: ReactNode;
  }>;
  value?: string;
  optional?: boolean;
  autoFocus?: boolean;
  validationError?: ReactNode;
  themeRadioContainer?: string,
  themeRadio?: string,
  themeControlWrapper?: string
}

export default function ControlRadioSet({
  id,
  onChange,
  value = '',
  options,
  optional = false,
  autoFocus = false,
  validationError,
  themeRadioContainer = 'txt-s block mb6 flex',
  themeRadio = 'mr6 radio--blue radio--s-label inline-block',
  themeControlWrapper
}: Props): ReactElement {

  const groupProps = {
    id,
    role: 'radiogroup',
    'aria-required': optional ? false : true,
    'data-testid': `${id}-input`
  };

  if (validationError) {
    groupProps['aria-invalid'] = true;
  }

  const renderOptions = ({ label, ...d }, index: number) => {
    const extraProps = omit(d, ['value', 'label']);
    return (
      <label
        key={d.value}
        className={`radio-container ${themeRadioContainer}`}
      >
        <input
          value={d.value}
          checked={d.value === value}
          autoFocus={autoFocus && d.value === value}
          onChange={(e) => onChange(e.target.value, id)}
          name={id}
          data-testid={`${id}-${index}-input`}
          type="radio"
          {...extraProps}
        />
        <div className={`${themeRadio} radio`} />
        {label}
      </label>
    );
  };

  return (
    <ControlWrapper
      themeControlWrapper={themeControlWrapper}
      id={id}
      validationError={validationError}
    >
      <div {...groupProps}>{options.map(renderOptions)}</div>
    </ControlWrapper>
  );
}

ControlRadioSet.propTypes = {
  /** Unique id for this control. Required if you want a `label`. */
  id: PropTypes.string.isRequired,
  /**
   * An array of objects that represent each option of the set.
   * Each object should contain two fields:
   *
   * - `label` which can either be a string or valid JSX
   * - `value` a unique string value
   *
   * Any additional fields added will be passed as attributes to the input
   * element.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /**
   * Invoked when the control's value changes.
   * Passed two arguments:
   *
   * - The value. A string matching the `value` field of one of the `options`
   *   props passed.
   * - The `id` prop.
   */
  onChange: PropTypes.func.isRequired,
  /** The control's value. Can be an empty string to indicate no value. */
  value: PropTypes.string,
  /** If provided, aria-required=true is added to the control element. */
  optional: PropTypes.bool,
  /** When set, auto focus attributes are applied to the input that matches the `value` prop passed. */
  autoFocus: PropTypes.bool,
  /** A validation error to display beneath the control. */
  validationError: PropTypes.node,
  /** Classes to apply to the radio container */
  themeRadioContainer: PropTypes.string,
  /** Classes to apply to the radio element */
  themeRadio: PropTypes.string,
  /** Classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string
};
