import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import ControlLabel from '../control-label';
import ControlWrapper from '../control-wrapper';

const propNames = [
  'id',
  'value',
  'onChange',
  'label',
  'optional',
  'aside',
  'validationError',
  'themeControlRange',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

export default class ControlRange extends React.Component {
  static propTypes = {
    /** Identifying value for input element. */
    id: PropTypes.string.isRequired,
    /** Input value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Called during changes to the input element. */
    onChange: PropTypes.func.isRequired,
    /** Value passed to the label element. */
    label: PropTypes.string,
    /** If provided the text, "(optional)" is appended to the value of the label element. */
    optional: PropTypes.bool,
    /** Additional content inserted alongside the label element. */
    aside: PropTypes.node,
    /** If provided, the value of this propery displays as an error message. */
    validationError: PropTypes.node,
    /** Assembly classes to apply to the range element */
    themeControlRange: PropTypes.string,
    /** Assembly classes to apply to the control wrapper */
    themeControlWrapper: PropTypes.string,
    /** Assembly classes to apply to the label element */
    themeLabel: PropTypes.string
  };

  onChange = (e) => {
    return this.props.onChange(e.target.value, this.props.id);
  };

  static defaultProps = {
    value: '',
    optional: false,
    themeControlRange: ''
  };

  render() {
    const extraProps = omit(this.props, propNames);

    const {
      id,
      value,
      label,
      optional,
      aside,
      validationError,
      themeControlRange,
      themeControlWrapper,
      themeLabel
    } = this.props;

    const inputProps = {
      id,
      name: id,
      onChange: this.onChange,
      value,
      type: 'range',
      'aria-required': optional ? false : true,
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
        {label && (
          <ControlLabel
            text={label}
            id={id}
            aside={aside}
            optional={optional}
            themeLabel={themeLabel}
          />
        )}
        <div className={`range ${themeControlRange}`}>
          <input {...inputProps} {...extraProps} />
        </div>
      </ControlWrapper>
    );
  }
}
