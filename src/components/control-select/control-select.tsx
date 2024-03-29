import React, {ReactElement, ReactNode} from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';

const propNames = [
  'id',
  'options',
  'value',
  'onChange',
  'optional',
  'label',
  'aside',
  'disabled',
  'validationError',
  'themeControlSelect',
  'themeControlSelectContainer',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

type Option = {
  label: string;
  value?: string | number;
  disabled?: boolean;
  options?: Array<Option>
}

interface Props {
  id: string;
  options: Array<Option>;
  onChange: (value: string, id: string) => void;
  value?: string | number;
  label?: string;
  optional?: boolean;
  aside?: ReactNode;
  disabled?: boolean;
  validationError?: ReactNode;
  themeControlSelectContainer?: string;
  themeControlSelect?: string;
  themeControlWrapper?: string;
  themeLabel?: string;
}

export default function ControlSelect({
  id,
  onChange,
  options,
  value = '',
  label,
  optional = false,
  aside,
  disabled = false,
  validationError,
  themeControlSelectContainer = '',
  themeControlSelect = '',
  themeControlWrapper,
  themeLabel,
  ...props
}: Props): ReactElement {
  const extraProps = omit(props, propNames);

  const selectProps = {
    id,
    disabled,
    value,
    className: `select ${themeControlSelect}`,
    onChange: (e) => onChange(e.target.value, id),
    'aria-required': optional ? false : true,
    'data-testid': `${id}-select`
  };

  if (validationError) {
    selectProps['aria-invalid'] = true;
  }

  const renderOptions = ({ label, value, disabled, options }: Option) => {
    if (options) {
      return (
        <optgroup key={label} label={label}>
          {options.map(renderOptions)}
        </optgroup>
      );
    } else {
      return (
        <option disabled={disabled} key={value} value={value}>
          {label}
        </option>
      );
    }
  };

  return (
    <ControlWrapper
      id={id}
      themeControlWrapper={themeControlWrapper}
      validationError={validationError}
    >
      {label && (
        <ControlLabel
          text={label}
          id={id}
          aside={aside}
          optional={optional}
          themeLabel={themeLabel}
        />
      )}
      <div className={`select-container ${themeControlSelectContainer}`}>
        <select {...selectProps} {...extraProps}>
          {options.map(renderOptions)}
        </select>
        <div className="select-arrow" />
      </div>
    </ControlWrapper>
  );
}

ControlSelect.propTypes = {
  /** Identifying value for input element. */
  id: PropTypes.string.isRequired,
  /** An array of objects containing `label` `value` key value pairings to represent each option. An optional `disable` key can be provided to disable the selection of an indiviual `<option>`. If `value` is not present but an `options` array is provided containing the same `label` `value` key value pairings, options will be grouped within a `<optgroup>` element as defined by `label` child key. Note that each `label` value must be unique. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: (props, propName, componentName) => {
        if (
          !props.value &&
          typeof props.value !== 'string' &&
          props.options === undefined
        ) {
          return new Error(
            `The prop "${propName}" is required in ${componentName} if a options array is not provided for select groups.`
          );
        } else if (
          props.value &&
          typeof props.value !== 'number' &&
          typeof props.value !== 'string'
        ) {
          return new Error(
            `${
              props.value
            } of type ${typeof props.value} supplied to ${componentName}, expected a number or string.`
          );
        } else if (props.value !== undefined && props.options !== undefined) {
          return new Error(
            `You've provided both an 'options' & 'value' key to one of your options object groups. Only 'options' will be used.`
          );
        }
      },
      disabled: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string,
          disabled: PropTypes.bool
        })
      )
    })
  ).isRequired,
  /** Called during changes to the input element. */
  onChange: PropTypes.func.isRequired,
  /** Input value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Value passed to the label element. */
  label: PropTypes.string,
  /** If provided the text, "(optional)" is appended to the value of the label element. */
  optional: PropTypes.bool,
  /** Additional content inserted alongside the label element. */
  aside: PropTypes.node,
  /** Pass disabled attribute */
  disabled: PropTypes.bool,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /** Assembly classes to apply to the select element */
  themeControlSelect: PropTypes.string,
  /** Assembly classes to apply to the select container */
  themeControlSelectContainer: PropTypes.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string,
  /** Assembly classes to apply to the label element */
  themeLabel: PropTypes.string
};
