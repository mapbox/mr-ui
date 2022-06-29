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
  'noAuto',
  'optional',
  'aside',
  'validationError',
  'themeControlTextarea',
  'themeControlWrapper',
  'themeLabel',
  // Passed when used with the Form component
  'initialValue',
  'validator'
];

export default class ControlTextarea extends React.Component {
  static propTypes = {
    /** Unique id for this control. Required if you want a `label`. */
    id: PropTypes.string,
    /** The control's value. */
    value: PropTypes.string,
    /**
     * Invoked when the control's value changes.
     * Passed two arguments: the new value, and the `id` prop.
     */
    onChange: PropTypes.func.isRequired,
    /** Label for the control. */
    label: PropTypes.string,
    /** If `true`, autocorrect and spelling suggestions will be disabled. */
    noAuto: PropTypes.bool,
    /** If `true`, the text `(optional)` is appended to the label element. */
    optional: PropTypes.bool,
    /** Additional content inserted alongside the label element. */
    aside: PropTypes.node,
    /** A validation error to display beneath the control. */
    validationError: PropTypes.node,
    /** Classes to apply to the textarea element. */
    themeControlTextarea: PropTypes.string,
    /** Classes to apply to the control wrapper. */
    themeControlWrapper: PropTypes.string,
    /** Classes to apply to the label element. */
    themeLabel: PropTypes.string
  };

  onChange = (e) => {
    return this.props.onChange(e.target.value, this.props.id);
  };

  static defaultProps = {
    value: '',
    optional: false,
    noAuto: false,
    themeControlTextarea: 'textarea hmin120'
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
      noAuto,
      themeControlTextarea,
      themeControlWrapper,
      themeLabel
    } = this.props;

    const textareaProps = {
      id,
      name: id,
      onChange: this.onChange,
      value,
      className: themeControlTextarea,
      'aria-required': optional ? false : true,
      'data-test': `${id}-textarea`
    };

    if (noAuto) {
      textareaProps.autoCapitalize = 'none';
      textareaProps.autoCorrect = 'off';
      textareaProps.spellCheck = false;
    }

    if (validationError) {
      textareaProps['aria-invalid'] = true;
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
        <textarea {...textareaProps} {...extraProps} />
      </ControlWrapper>
    );
  }
}
