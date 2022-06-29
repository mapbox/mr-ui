import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlWrapper from '../control-wrapper';

const propNames = [
  'id',
  'value',
  'onChange',
  'label',
  'optional',
  'validationError',
  'themeControlSwitchContainer',
  'themeControlSwitch',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

export default class ControlSwitch extends React.Component {
  static propTypes = {
    /** Identifying value for input element. */
    id: PropTypes.string.isRequired,
    /** Input value */
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([''])]),
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

  onChange = (e) => {
    return this.props.onChange(e.target.checked, this.props.id);
  };

  static defaultProps = {
    value: false,
    themeControlSwitchContainer: '',
    themeControlSwitch: 'switch--s-label',
    optional: false,
    themeLabel: 'txt-s ml6'
  };

  render() {
    const extraProps = omit(this.props, propNames);

    const {
      id,
      value,
      label,
      validationError,
      themeControlSwitchContainer,
      themeControlSwitch,
      themeControlWrapper,
      optional,
      themeLabel
    } = this.props;

    // value might be an empty string. Form will do this if no initialValue
    // is set.
    const checked = value === '' ? false : value;

    const inputProps = {
      id,
      checked,
      onChange: this.onChange,
      type: 'checkbox',
      'data-test': `${id}-input`
    };

    if (validationError) {
      inputProps['aria-invalid'] = true;
    }

    return (
      <ControlWrapper
        themeControlWrapper={themeControlWrapper}
        id={id}
        validationError={validationError}
      >
        <label className={`switch-container ${themeControlSwitchContainer}`}>
          <input {...inputProps} {...extraProps} />
          <div className={`switch ${themeControlSwitch}`} />
          <span className={themeLabel}>
            {label}
            {optional && <span className="ml3 txt-normal">(optional)</span>}
          </span>
        </label>
      </ControlWrapper>
    );
  }
}
