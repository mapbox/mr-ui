import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import maybeAddPeriod from '../utils/maybe-add-period';

interface Props {
  id: string;
  children: ReactElement;
  themeControlWrapper?: string;
  validationError?: ReactElement | string;
}

export default function ControlWrapper({
  id,
  themeControlWrapper = '',
  validationError,
  children
}: Props): ReactElement {
  let errorEl = null;
  if (validationError) {
    const validationErrorId = `${id}-error`;
    const errorBody =
      typeof validationError === 'string'
        ? maybeAddPeriod(validationError)
        : validationError;
    errorEl = (
      <div
        className="bg txt-s mt3 py6 px12 bg-red-faint round border border--red color-red"
        id={validationErrorId}
        data-testid={validationErrorId}
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

ControlWrapper.propTypes = {
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
