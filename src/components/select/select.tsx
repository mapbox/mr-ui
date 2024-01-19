import React, {ReactElement, ReactNode} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from '../utils/omit';
import { getTheme } from '../utils/styles';
import * as SelectPrimitive from '@radix-ui/react-select';

const propNames = [
  'options',
  'value',
  'onChange',
  'optional',
  'label',
  'aside',
  'disabled',
  'validationError',
  'themeSelectItem'
];

type Option = {
  label: ReactNode;
  value?: string;
  disabled?: boolean;
  options?: Array<Option>
}

interface Props {
  options: Array<Option>;
  onChange: (value: string) => void;
  children: ReactNode;
  value?: string;
  disabled?: boolean;
  coloring?: 'light' | 'dark';
  padding?: 'medium' | 'small' | 'none';
  themeSelectItem?: string;
}

export default function Select({
  children,
  onChange,
  options,
  value = '',
  coloring = 'light',
  padding = 'medium',
  disabled = false,
  themeSelectItem = 'transition color-gray-dark w-full block bg-gray-light-on-active block py6 txt-break-word-soft bg-darken5-on-hover color-blue-on-hover cursor-pointer round px6',
  ...props
}: Props): ReactElement {
  const { background, borderColor, color } = getTheme('light');
  const extraProps = omit(props, propNames);

  const selectProps = {
    disabled,
    value,
    onValueChange: (e) => onChange(e.target.value)
  };

  const contentClasses = classnames(
    `${background} ${borderColor} ${color} border shadow-darken25 round`,
    {
      'px12 py12': padding === 'medium',
      'px12 py6': padding === 'small',
      [`border border-1 border--${borderColor}`]: borderColor
    }
  );

  const renderOptions = ({ label, value, disabled, options }: Option) => {
    if (options) {
      return (
        <SelectPrimitive.Group>
          {options.map(renderOptions)}
        </SelectPrimitive.Group>
      );
    } else {
      return (
        <SelectPrimitive.Item className={themeSelectItem} disabled={disabled} key={value} value={value}>
          {label}
        </SelectPrimitive.Item>
      );
    }
  };

  return (
    <SelectPrimitive.Root {...selectProps} {...extraProps}>

      <SelectPrimitive.Trigger>
        {children}
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={contentClasses} position="popper" side="right">
          {options.map(renderOptions)}
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>

    </SelectPrimitive.Root>
  );
}

Select.propTypes = {
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
  /**
   * `'light'`, `'dark'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark']),
  /**
   * `'medium'`, `'small'`, or `'none'`.
   */
  padding: PropTypes.oneOf(['medium', 'small', 'none']),
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
  themeSelectItem: PropTypes.string,
};
