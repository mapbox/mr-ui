import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

interface Props {
  primaryAction?: {
    text: string;
    callback: () => void;
    destructive?: boolean;
    disabled?: boolean;
  },
  secondaryAction?: {
    text: string;
    callback: () => void;
    disabled?: boolean;
  },
  tertiaryAction?: {
    text: string;
    callback: () => void;
    disabled?: boolean;
  }
}

export default function ModalActions({
  primaryAction,
  secondaryAction,
  tertiaryAction
}: Props): ReactElement {
  const renderSecondary = (): ReactElement => {
    if (!primaryAction || !secondaryAction) {
      return null;
    }

    return (
      <div className="flex-child-no-shrink mr12">
        <Button
          variant="secondary"
          size="medium"
          onClick={secondaryAction.callback}
          disabled={secondaryAction.disabled}
          data-test="secondary-modal-action"
          passthroughProps={{ 'aria-label': secondaryAction.text }}
        >
          {secondaryAction.text}
        </Button>
      </div>
    );
  }

  const renderTertiary = (): ReactElement => {
    if (
      !primaryAction ||
      !secondaryAction ||
      !tertiaryAction
    ) {
      return null;
    }

    return (
      <div className="flex-child-no-shrink mr12">
        <Button
          aria-label={tertiaryAction.text}
          variant="tertiary"
          onClick={tertiaryAction.callback}
          disabled={tertiaryAction.disabled}
          data-test="tertiary-modal-action"
        >
          {tertiaryAction.text}
        </Button>
      </div>
    );
  }

  const primaryButtonVariant = primaryAction.destructive
    ? 'destructive'
    : 'primary';

  return (
    <div className="flex flex--center-main flex--center-cross flex--row-reverse flex--wrap">
      <div className="flex-child-no-shrink">
        <Button
          variant={primaryButtonVariant}
          size="medium"
          onClick={primaryAction.callback}
          disabled={primaryAction.disabled}
          data-test="primary-modal-action"
          passthroughProps={{
            tabIndex: 0,
            'aria-label': primaryAction.text
          }}
        >
          {primaryAction.text}
        </Button>
      </div>
      {renderSecondary()}
      {renderTertiary()}
    </div>
  );
}

ModalActions.propTypes = {
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    destructive: PropTypes.bool,
    disabled: PropTypes.bool
  }).isRequired,
  secondaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  }),
  tertiaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  })
};
