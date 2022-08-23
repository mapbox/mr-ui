import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import Icon from '../icon';
import classnames from 'classnames';
import ControlWrapper from '../control-wrapper';
import { InputProps } from '../typings';

interface Props {
  id: string;
  onChange: (value: Array<string>, id: string) => void;
  options: Array<InputProps & {
    label: ReactNode;
  }>;
  value?: Array<string>;
  icon?: string;
  autoFocus?: boolean;
  validationError?: ReactNode;
  themeCheckboxContainer?: string,
  themeCheckbox?: string,
  themeControlWrapper?: string
}

export default function ControlCheckboxSet({
  id,
  onChange,
  value = [],
  options,
  autoFocus = false,
  icon = 'check',
  validationError,
  themeCheckboxContainer = 'txt-s block mb6 flex',
  themeCheckbox = 'mr6 inline-block checkbox--blue checkbox--s-label',
  themeControlWrapper
}: Props): ReactElement {

  const onCheckboxChange = (e) => {
    const current = e.target.value;
    const index = value.indexOf(current);
    const newValue = value;

    if (index === -1) {
      newValue.push(current);
    } else {
      newValue.splice(index, 1);
    }

    return onChange(newValue, id);
  };

  const groupProps = {
    id,
    'data-testid': `${id}-input`
  };

  if (validationError) {
    groupProps['aria-invalid'] = true;
  }

  const renderOptions = ({ label, ...d }, index: number) => {
    const isActive = value.includes(value);
    const extraProps = omit(d, ['value', 'label']);
    const checkboxLabelClasses = classnames(`checkbox-container ${themeCheckboxContainer}`, {
      'cursor-pointer': !d.disabled
    })

    return (
      <label
        key={d.value}
        className={checkboxLabelClasses}
      >
        <input
          value={d.value}
          checked={isActive}
          aria-checked={isActive}
          autoFocus={autoFocus && isActive}
          onChange={onCheckboxChange}
          name={id}
          data-testid={`${id}-${index}-input`}
          type="checkbox"
          {...extraProps}
        />
        <div className={`${themeCheckbox} checkbox`}>
          <Icon name={icon} />
        </div>
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

ControlCheckboxSet.propTypes = {
  /** Unique id for this control. */
  id: PropTypes.string.isRequired,
  /**
   * An array of object(s) that represent each option of the set.
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
  /** Accepts an array of strings, where each string matches the value property of an entry in the options prop. */
  value: PropTypes.array,
  /** Icon to use for the checkbox active style. Must match an icon name available in Assembly. */
  icon: PropTypes.string,
  /** When `true`, autofocus attributes are applied to the input that matches the `value` prop passed. */
  autoFocus: PropTypes.bool,
  /** A validation error to display beneath the control. */
  validationError: PropTypes.node,
  /** Classes to apply to the checkbox container. */
  themeCheckboxContainer: PropTypes.string,
  /** Classes to apply to the checkbox element. */
  themeCheckbox: PropTypes.string,
  /** Classes to apply to the control container. */
  themeControlWrapper: PropTypes.string
};
