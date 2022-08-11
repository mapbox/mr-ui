import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

interface Props {
  onSubmit: (e: any) => void;
  label?: string;
  disabled?: boolean;
  testId?: string;
  themeButton?: string;
}

export default function FormSubmit({
  label = 'Submit',
  testId = '',
  disabled = false,
  themeButton = 'btn',
  onSubmit,
}: Props): ReactElement {

  const inputProps = {
    onClick: onSubmit,
    disabled,
    'data-testid': testId || 'form-submit-handler'
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

FormSubmit.propTypes = {
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
