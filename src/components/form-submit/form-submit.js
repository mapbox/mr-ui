import React from 'react';
import PropTypes from 'prop-types';

export default class FormSubmit extends React.PureComponent {
  static propTypes = {
    /** Function called when the button is clicked. */
    onSubmit: PropTypes.func.isRequired,
    /** Submit button label. */
    label: PropTypes.string,
    /** Toggle disabled state of the element. */
    disabled: PropTypes.bool,
    /** Identifier for the purposes of testing. */
    testId: PropTypes.string,
    /** A space seperated list of Assembly class names. */
    themeButton: PropTypes.string
  };

  static defaultProps = {
    label: 'Submit',
    testId: '',
    disabled: false,
    themeButton: 'btn px24 py12 round-full txt-s'
  };

  render() {
    const { testId, disabled, label, onSubmit, themeButton } = this.props;

    const inputProps = {
      onClick: onSubmit,
      disabled: disabled,
      'data-test': testId
    };

    return (
      <button
        aria-label={label}
        type="button"
        className={themeButton}
        {...inputProps}
      >
        {label}
      </button>
    );
  }
}
