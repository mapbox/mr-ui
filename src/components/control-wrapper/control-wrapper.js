import React from 'react';
import PropTypes from 'prop-types';
import maybeAddPeriod from '../utils/maybe-add-period';

export default class ControlWrapper extends React.PureComponent {
  static propTypes = {
    /** Should correspond to the identifier of the input. */
    id: PropTypes.string.isRequired,
    /**
     * If provided, the value of this property will show up as an error message.
     * Strings will end with periods.
     */
    validationError: PropTypes.node,
    /** The contents the controlWrapper contains */
    children: PropTypes.node,
    /** A space separated list of Assembly class names to override the existing presentation. */
    themeControlWrapper: PropTypes.string
  };

  static defaultProps = {
    themeControlWrapper: ''
  };

  render() {
    const { children, themeControlWrapper, validationError } = this.props;

    let errorEl = null;
    if (validationError) {
      const validationErrorId = `${this.props.id}-error`;
      const errorBody =
        typeof validationError === 'string'
          ? maybeAddPeriod(validationError)
          : validationError;
      errorEl = (
        <div
          className="bg txt-s mt3 py6 px12 bg-red-faint round border border--red color-red"
          id={validationErrorId}
          data-test={validationErrorId}
        >
          {errorBody}
        </div>
      );
    }

    const wrapperClasses = `relative ${themeControlWrapper}`;

    return (
      <div className={wrapperClasses}>
        {children}
        <div role="alert">{errorEl}</div>
      </div>
    );
  }
}
