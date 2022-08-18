import React, {ReactElement, ReactNode} from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlWrapper from '../control-wrapper';

interface Props {
  id: string;
  onChange: (value: string, id: string) => void;
  options: Array<{
    label: ReactNode;
    value: string;
  }>;
  value?: string;
  optional?: boolean;
  autoFocus?: boolean;
  validationError?: ReactNode;
  themeToggleContainer?: string;
  themeToggleGroup?: string;
  themeToggle?: string;
  themeControlWrapper?: string;
}

export default function ControlToggleSet({
  id,
  options,
  onChange,
  value = '',
  optional = false,
  validationError,
  autoFocus = false,
  themeToggleGroup = 'border border--2 border--blue bg-blue',
  themeToggleContainer = '',
  themeToggle = 'txt-s py3 toggle--white toggle--active-blue',
  themeControlWrapper
}: Props): ReactElement {

  const groupProps = {
    id,
    className: `toggle-group round-full ${themeToggleGroup}`,
    role: 'radiogroup',
    'aria-required': optional ? false : true,
    'data-testid': `${id}-input`
  };

  if (validationError) {
    groupProps['aria-invalid'] = true;
  }

  const renderOptions = ({ label, ...d}) => {
    const extraProps = omit(d, ['value', 'label']);
    return (
      <label
        key={value}
        className={`toggle-container ${themeToggleContainer}`}
      >
        <input
          value={d.value}
          checked={d.value === value}
          autoFocus={autoFocus && d.value === value}
          onChange={(e) => onChange(e.target.value, id)}
          name={id}
          type="radio"
          {...extraProps}
        />
        <div className={`${themeToggle} toggle`}>{label}</div>
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

ControlToggleSet.propTypes = {
  /** Identifying value for input element. */
  id: PropTypes.string.isRequired,
  /** Function that's called when text changes in the input element. Argument that's returned the id prop and value entered. */
  onChange: PropTypes.func.isRequired,
  /** An array of objects containing `label` `value` key value pairings to represent each option. Any additional keys are passed as props to the input. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  /** input value */
  value: PropTypes.string,
  /** If provided, aria-required=true is added to the control element. */
  optional: PropTypes.bool,
  /** Add auto focus attributes. */
  autoFocus: PropTypes.bool,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /** Assembly classes to apply to the toggle group */
  themeToggleGroup: PropTypes.string,
  /** Assembly classes to apply to the toggle container */
  themeToggleContainer: PropTypes.string,
  /** Assembly classes to apply to the toggle element */
  themeToggle: PropTypes.string,
  /** Assembly classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string
};
