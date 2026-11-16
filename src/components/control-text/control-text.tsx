import React, {
  ReactElement,
  ReactNode,
  useState,
  useRef,
  ChangeEvent,
  HTMLInputTypeAttribute
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from '../utils/omit';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';
import Popover from '../popover';
import Icon from '../icon';
import { PopoverProps } from '../popover/popover';
import { InputProps } from '../typings';

export interface ControlTextProps extends Omit<InputProps, 'onChange'> {
  id: string;
  onChange: (value: string, id: string) => void;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  label?: string | ReactNode;
  noAuto?: boolean;
  optional?: boolean;
  aside?: ReactNode;
  validationError?: ReactNode;
  errorStyle?: 'default' | 'inline';
  popoverProps?: Partial<PopoverProps>;
  themeControlInput?: string;
  themeControlWrapper?: string;
  themeLabel?: string;
}

const propNames = [
  'id',
  'value',
  'onChange',
  'type',
  'label',
  'noAuto',
  'optional',
  'aside',
  'validationError',
  'errorStyle',
  'popoverProps',
  'themeControlInput',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

export default function ControlText({
  id,
  onChange,
  value = '',
  label,
  aside,
  type = 'text',
  optional = false,
  validationError,
  errorStyle = 'default',
  noAuto = false,
  themeLabel,
  themeControlInput = 'input',
  themeControlWrapper,
  ...props
}: ControlTextProps): ReactElement {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const extraProps = omit(props, propNames);
  const inputElement = useRef(null);
  const errorElement = useRef(null);

  const onErrorClick = () => {
    if (inputElement.current) inputElement.current.select();
  };

  const isActive = () => {
    if (typeof window === 'undefined') return false;

    return (
      window.document.activeElement === inputElement.current ||
      window.document.activeElement === errorElement.current
    );
  };

  const onContainerMouseOver = () => {
    if (isActive()) return;
    setPopoverOpen(true);
  };

  const onContainerMouseOut = () => {
    if (isActive()) return;
    setPopoverOpen(false);
  };

  const renderLabel = () => {
    return (
      <ControlLabel
        text={label}
        id={id}
        aside={aside}
        optional={optional}
        themeLabel={themeLabel}
      />
    );
  };

  const inputProps: {
    id: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    type: HTMLInputTypeAttribute;
    className: string;
    'aria-required': boolean;
    'data-testid': string;
    autoCapitalize?: string;
    autoCorrect?: string;
    spellCheck?: boolean;
    'aria-describedby'?: string;
  } = {
    id,
    name: id,
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value, id),
    value,
    type,
    className: themeControlInput,
    'aria-required': !optional,
    'data-testid': `${id}-input`
  };

  if (noAuto) {
    inputProps.autoCapitalize = 'none';
    inputProps.autoCorrect = 'off';
    inputProps.spellCheck = false;
  }

  if (validationError) {
    inputProps['aria-invalid'] = true;
    inputProps['aria-describedby'] = `${id}-error`;
    inputProps.className = classnames(themeControlInput, 'input--border-red', {
      'round-l flex-child-grow': errorStyle === 'inline'
    });
  }

  const labelElement = label ? renderLabel() : null;

  let control = <input {...inputProps} {...extraProps} />;

  if (errorStyle === 'inline') {
    if (validationError) {
      control = (
        <div
          onMouseOver={onContainerMouseOver}
          onMouseOut={onContainerMouseOut}
          data-testid="control-text-container"
          className="flex"
        >
          <input
            ref={inputElement}
            onFocus={() => setPopoverOpen(true)}
            onBlur={() => setPopoverOpen(false)}
            {...inputProps}
            {...extraProps}
          />
          <Popover
            active={popoverOpen}
            content={validationError}
            placement="top"
            aria-label="Validation error"
            {...props.popoverProps}
          >
            <button
              type="button"
              onFocus={() => setPopoverOpen(true)}
              onBlur={() => setPopoverOpen(false)}
              ref={errorElement}
              onClick={onErrorClick}
              data-testid="validation-error"
              aria-label="Show validation error"
              className="flex flex--center-cross bg-red color-white round-r px6 cursor-pointer"
            >
              <Icon name="alert" />
            </button>
          </Popover>
          <span id={`${id}-error`} role="alert" className="hide-visually">
            {validationError}
          </span>
        </div>
      );
    }

    return (
      <ControlWrapper themeControlWrapper={themeControlWrapper} id={id}>
        {labelElement}
        {control}
      </ControlWrapper>
    );
  }

  return (
    <ControlWrapper
      themeControlWrapper={themeControlWrapper}
      id={id}
      validationError={validationError}
    >
      {labelElement}
      {control}
    </ControlWrapper>
  );
}

ControlText.propTypes = {
  /** Unique id for this control. Required if you want a `label`. */
  id: PropTypes.string.isRequired,
  /**
   * Invoked when the control's value changes.
   * Passed two arguments:
   *
   * - `value` the current value of the input passes as a string
   * - The `id` prop.
   */
  onChange: PropTypes.func.isRequired,
  /** The control's value. Can be an empty string to indicate no value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Type attribute to override the existing default of 'text' */
  type: PropTypes.string,
  /** Label for the control. Label can be string or ReactNode. */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Enable/Disable browser enabled autocorrect or spelling suggestions from the element. */
  noAuto: PropTypes.bool,
  /** If provided, "(optional)" is appended to the value of the legend element. */
  optional: PropTypes.bool,
  /** Additional content inserted alongside the label element. */
  aside: PropTypes.node,
  /** If provided, the value of this propery displays as an error message. */
  validationError: PropTypes.node,
  /**
   * Sets the style of the error message. There are two options:
   *
   * - `default` the standard presentation control components display an error
   *   message: beneath the input.
   * - `inline` An error indicator is displayed to the right of the element
   *   with the value of `validationError` prop displayed in a tooltip.
   */
  errorStyle: PropTypes.oneOf(['default', 'inline']),
  /**
   * Props to pass directly to the [Popover](#popover) component when inline error validation is in use. See Popover's
   * documentation for details.
   */
  popoverProps: PropTypes.object,
  /** Classes to apply to the input element */
  themeControlInput: PropTypes.string,
  /** Classes to apply to the control wrapper */
  themeControlWrapper: PropTypes.string,
  /** classes to apply to the label element */
  themeLabel: PropTypes.string
};
