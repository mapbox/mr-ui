import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';
import Popover from '../popover';
import Icon from '../icon';
import getWindow from '../utils/get-window';

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
  'errorTooltipTheme',
  'errorTooltipBackgroundColor',
  'themeControlInput',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

export default class ControlText extends React.Component {
  inputElement = null;
  errorElement = null;

  static propTypes = {
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
    /** Label for the control. */
    label: PropTypes.string,
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
    /** Background color of the error tooltip when `errorStyle: "inline"` is set. */
    errorTooltipBackgroundColor: PropTypes.string,
    /** Classes to style the error tooltip container. */
    errorTooltipTheme: PropTypes.string,
    /** Classes to apply to the input element */
    themeControlInput: PropTypes.string,
    /** Classes to apply to the control wrapper */
    themeControlWrapper: PropTypes.string,
    /** classes to apply to the label element */
    themeLabel: PropTypes.string
  };

  onChange = (e) => {
    return this.props.onChange(e.target.value, this.props.id);
  };

  static defaultProps = {
    value: '',
    type: 'text',
    optional: false,
    noAuto: false,
    errorStyle: 'default',
    themeControlInput: 'input'
  };

  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };
  }

  setInputElement = (el) => {
    this.inputElement = el;
  };

  setErrorElement = (el) => {
    this.errorElement = el;
  };

  getErrorElement = () => {
    return this.errorElement;
  };

  onErrorClick = () => {
    if (this.inputElement) this.inputElement.select();
  };

  onFocus = () => {
    this.setState({ popoverOpen: true });
  };

  onBlur = () => {
    this.setState({ popoverOpen: false });
  };

  isActive = () => {
    return (
      getWindow().document.activeElement === this.inputElement ||
      getWindow().document.activeElement === this.errorElement
    );
  };

  onContainerMouseOver = () => {
    if (this.isActive()) return;
    this.setState({ popoverOpen: true });
  };

  onContainerMouseOut = () => {
    if (this.isActive()) return;
    this.setState({ popoverOpen: false });
  };

  renderLabel = () => {
    const { id, label, optional, aside, themeLabel } = this.props;

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

  renderPopover = () => {
    const { validationError, errorTooltipTheme, errorTooltipBackgroundColor } =
      this.props;

    const popoverProps = {
      getAnchorElement: this.getErrorElement,
      placement: 'top',
      receiveFocus: false,
      accessibleTitle: 'Validation error'
    };

    if (errorTooltipBackgroundColor) {
      popoverProps.backgroundColor = errorTooltipBackgroundColor;
    }

    if (errorTooltipTheme) {
      popoverProps.themePopover = errorTooltipTheme;
    }

    return <Popover {...popoverProps}>{validationError}</Popover>;
  };

  render() {
    const extraProps = omit(this.props, propNames);

    const {
      id,
      value,
      label,
      type,
      optional,
      validationError,
      errorStyle,
      noAuto,
      themeControlInput,
      themeControlWrapper
    } = this.props;

    const { popoverOpen } = this.state;

    const inputProps = {
      id,
      name: id,
      onChange: this.onChange,
      value,
      type,
      className: themeControlInput,
      'aria-required': optional ? false : true,
      'data-test': `${id}-input`
    };

    if (noAuto) {
      inputProps.autoCapitalize = 'none';
      inputProps.autoCorrect = 'off';
      inputProps.spellCheck = false;
    }

    if (validationError) {
      inputProps['aria-invalid'] = true;
    }

    if (validationError && errorStyle === 'inline') {
      inputProps.className = `${themeControlInput} round-l flex-child-grow`;
      inputProps.style = {
        boxShadow: 'inset 0 0 0 1px #f74e4e'
      };
    }

    const labelElement = label ? this.renderLabel() : null;

    const popover = popoverOpen ? this.renderPopover() : null;

    let control = <input {...inputProps} {...extraProps} />;

    if (errorStyle === 'inline') {
      if (validationError) {
        control = (
          <div
            onMouseOver={this.onContainerMouseOver}
            onMouseOut={this.onContainerMouseOut}
            data-test="control-text-container"
            className="flex"
          >
            <input
              ref={this.setInputElement}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              {...inputProps}
              {...extraProps}
            />
            <button
              type="button"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              ref={this.setErrorElement}
              onClick={this.onErrorClick}
              role="alert"
              aria-label={validationError}
              className="bg-red color-white round-r px6"
            >
              <span className="flex flex--center-cross flex--center-main">
                <Icon name="alert" themeIcon="cursor-pointer" />
              </span>
            </button>
          </div>
        );
      }

      return (
        <ControlWrapper themeControlWrapper={themeControlWrapper} id={id}>
          {labelElement}
          {control}
          {popover}
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
}
