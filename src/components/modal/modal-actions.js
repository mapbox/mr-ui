import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

export default class ModalActions extends React.Component {
  renderSecondary() {
    const { props } = this;
    if (!props.primaryAction || !props.secondaryAction) {
      return null;
    }

    return (
      <div className="flex-child-no-shrink mr12">
        <Button
          variant="discouraging"
          size="medium"
          onClick={props.secondaryAction.callback}
          data-test="secondary-modal-action"
          passthroughProps={{ 'aria-label': props.secondaryAction.text }}
        >
          {props.secondaryAction.text}
        </Button>
      </div>
    );
  }

  renderTertiary() {
    const { props } = this;
    if (
      !props.primaryAction ||
      !props.secondaryAction ||
      !props.tertiaryAction
    ) {
      return null;
    }

    return (
      <div className="flex-child-grow flex-child-no-shrink mr12">
        <button
          aria-label={props.tertiaryAction.text}
          type="button"
          className="link link--gray txt-bold txt-s"
          onClick={props.tertiaryAction.callback}
          data-test="tertiary-modal-action"
        >
          {props.tertiaryAction.text}
        </button>
      </div>
    );
  }

  render() {
    const { props } = this;

    const primaryButtonVariant = props.primaryAction.destructive
      ? 'destructive'
      : 'primary';

    return (
      <div className="flex flex--center-main flex--center-cross flex--row-reverse flex--wrap">
        <div className="flex-child-no-shrink">
          <Button
            variant={primaryButtonVariant}
            size="medium"
            onClick={props.primaryAction.callback}
            data-test="primary-modal-action"
            passthroughProps={{ 'aria-label': props.primaryAction.text }}
          >
            {props.primaryAction.text}
          </Button>
        </div>
        {this.renderSecondary()}
        {this.renderTertiary()}
      </div>
    );
  }
}

ModalActions.propTypes = {
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    destructive: PropTypes.bool
  }).isRequired,
  secondaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  }),
  tertiaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  })
};
