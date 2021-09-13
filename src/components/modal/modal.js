import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import AriaModal from 'react-aria-modal';
import Tooltip from '../tooltip';
import Icon from '../icon';
import getWindow from '../utils/get-window';
import ModalActions from './modal-actions';
import EventTrap from './event-trap';

/**
 * An accessible modal dialog.
 *
 * To get a standard button arrangement at the bottom of the modal, use the
 * `primaryAction`, `secondaryAction`, and `tertiaryAction` props.
 *
 * This modal *traps focus within it*. You should be aware of that, because it
 * can sometimes introduce a hurdle when integrating the modal with other
 * things, especially third-party libraries. But it's an essential UX feature.
 */
export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.setDialogEl = this.setDialogEl.bind(this);
  }

  componentDidMount() {
    // After the modal has mounted, it will receive focus (unless initialFocus)
    // is set. If it is taller than the viewport, the browser will scroll down
    // so the top of the modal is at the top of the viewport, instead of
    // staying at the top where you can see the nice padding. To show the
    // padding, we get the underlay element and scroll to the top of that
    // right after the component mounts.
    if (!this.dialogEl || typeof window === 'undefined') return;
    // A slight delay is necessary so this happens after focus is placed.
    this.scrollTimeout = getWindow().setTimeout(() => {
      const offsetParent = this.dialogEl.offsetParent;
      if (offsetParent.tagName === 'BODY' || offsetParent.tagName === 'HTML') {
        return;
      }
      offsetParent.scrollTop = 0;
    }, 0);
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') return;
    getWindow().clearTimeout(this.scrollTimeout);
  }

  setDialogEl(el) {
    this.dialogEl = el;
  }

  renderActions() {
    const { primaryAction, secondaryAction, tertiaryAction } = this.props;
    if (!primaryAction) {
      return null;
    }

    return (
      <div className="mt24">
        <ModalActions
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
          tertiaryAction={tertiaryAction}
        />
      </div>
    );
  }

  render() {
    const { props } = this;

    let closeButton = null;
    if (props.onExit) {
      closeButton = (
        <div className="absolute top right">
          <Tooltip block={true} content="Close">
            <button
              aria-label="Close"
              type="button"
              className="btn btn--transparent unround-t unround-br color-gray py12 px12"
              onClick={props.onExit}
              data-test="modal-close"
            >
              <Icon name="close" />
            </button>
          </Tooltip>
        </div>
      );
    }

    let widthClass = '';
    if (props.size === 'small') {
      widthClass = 'w360';
    } else if (props.size === 'large') {
      widthClass = 'w600';
    }

    const containerClasses = classnames(
      `relative wmax-full ${widthClass} bg-white round`,
      { 'px36 py36': props.padding === 'large' }
    );

    const dialogBody = (
      <div ref={this.setDialogEl} className={containerClasses}>
        {props.children}
        {this.renderActions()}
        {closeButton}
      </div>
    );

    const modalProps = {
      titleText: props.accessibleTitle,
      getApplicationNode: props.getApplicationNode,
      underlayProps: { 'data-popover-ignore-clicks': true },
      underlayClass: 'bg-darken50 px12 py12 px60-mm py60-mm ',
      underlayStyle: {
        zIndex: 1
      },
      alert: props.alert
    };

    if (props.onExit) {
      modalProps.onExit = props.onExit;
    }

    if (props.initialFocus) {
      modalProps.initialFocus = props.initialFocus;
    } else {
      modalProps.focusDialog = true;
    }

    if (props.focusTrapPaused) {
      modalProps.focusTrapPaused = true;
    }

    if (!props.allowEventBubbling) {
      // stopPropagation prevents child modals from closing parent modals when nesting
      return (
        <EventTrap>
          <AriaModal {...modalProps}>{dialogBody}</AriaModal>
        </EventTrap>
      );
    }

    return <AriaModal {...modalProps}>{dialogBody}</AriaModal>;
  }
}

Modal.propTypes = {
  /**
   * A screen-reader-friendly modal title. Required for accessibility.
   *
   * This **will not be displayed.** It's only for screen readers.
   * You can visually display your own header text however you'd like.
   */
  accessibleTitle: PropTypes.string.isRequired,
  /**
   * Invoked when the modal should close. When this callback is provided,
   * a close button will be in the top right corner, and a click on the underlay
   * or the Escape key will close the modal.
   *
   * If this prop is not provided, the close button will not be present and
   * a click on the underlay or Escape will not close the modal. The reason
   * you might not provide this function is that you want to force the user
   * to do something, instead of allowing them to sneak out of the modal.
   */
  onExit: PropTypes.func,
  /**
   * A function that should the primary application node, which should be
   * `aria-hidden` when the modal is open. By default, returns
   * `document.getElementById('app')`.
   */
  getApplicationNode: PropTypes.func,
  /**
   * Modal container size. Options are `small`, `large`, or `auto`. If `auto`
   * is provided, a width is not specified.
   */
  size: PropTypes.oneOf(['small', 'large', 'auto']),
  /**
   * Selector for a specific element that should receive initial focus. The
   * value will be passed to `querySelector`.
   */
  initialFocus: PropTypes.string,
  /**
   * The content of the modal.
   */
  children: PropTypes.node.isRequired,
  /**
   * `'large'` or `'none'`.
   */
  padding: PropTypes.oneOf(['large', 'none']),
  /**
   * If `true`, this will allow interaction with elements outside of the
   * modal container. You normally don't want to set this, but it can be
   * useful for nesting different components that are displaced to other
   * parts of the DOM.
   */
  focusTrapPaused: PropTypes.bool,
  /**
   * If `true`, the modal will have the accessibility props of an alert modal.
   * (Only affects screen readers.)
   */
  alert: PropTypes.bool,
  /**
   * The modal's primary action. If this is provided, an encouraging
   * button will be rendered at the bottom of the modal.
   *
   * Provide this and other action props if you want a standard button
   * arrangement at the bottom of the modal. If you need a more custom
   * arrangement, leave them out and insert your buttons into the content.
   *
   * The value is an object with the following properties:
   * - `text`: **(required)** The text of the button.
   * - `callback`: **(required)** Invoked when the button is clicked.
   * - `destructive`: If `true`, the [Button](#button) will be primed for
   *   desctruction.
   */
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    destructive: PropTypes.bool
  }),
  /**
   * The modal's secondary action. If this is provided, a discouraging button
   * will be rendered at the bottom of the modal. See the description of
   * `primaryAction`.
   *
   * **Can only be used in combination with `primaryAction`.**
   *
   * The value is an object with the following properties:
   * - `text`: **(required)** The text of the button.
   * - `callback`: **(required)** Invoked when the button is clicked.
   */
  secondaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  }),
  /**
   * The modal's tertiary action. **You should rarely if ever need this.**
   * If this is provided, a *very* discouraging button
   * will be rendered at the bottom of the modal. See the description of
   * `primaryAction`.
   *
   * **Can only be used in combination with `primaryAction` and
   * `secondaryAction`.**
   *
   * The value is an object with the following properties:
   * - `text`: **(required)** The text of the button.
   * - `callback`: **(required)** Invoked when the button is clicked.
   */
  tertiaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  }),
  /**
   * We stop propagation on clicks by default to enable more intuitive
   * operation with React Portals. If you need click events to bubble up
   * to parent components, set this prop to true
   */
  allowEventBubbling: PropTypes.bool
};

Modal.defaultProps = {
  size: 'large',
  getApplicationNode: () => document.getElementById('app'),
  padding: 'large'
};
