import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import Tooltip from '../tooltip';
import Icon from '../icon';
import getWindow from '../utils/get-window';
import ModalActions from './modal-actions';

interface Props {
  children: ReactNode;
  accessibleTitle: string;
  size?: 'small' | 'large' | 'auto';
  padding?: 'large' | 'none';
  onExit?: () => void;
  primaryAction?: {
    text: string;
    callback: () => void;
    destructive?: boolean;
  },
  secondaryAction?: {
    text: string;
    callback: () => void;
  },
  tertiaryAction?: {
    text: string;
    callback: () => void;
  }
}

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

export default function Modal({
  children,
  accessibleTitle,
  size = 'large',
  padding = 'large',
  primaryAction,
  secondaryAction,
  tertiaryAction,
  onExit
}: Props): ReactElement {

  const renderActions = (): ReactElement => {
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

  let closeButton = null;
  if (onExit) {
    closeButton = (
      <div className="absolute top right">
        <Icon name="close" />
      </div>
    );
  }

  let widthClass = '';
  if (size === 'small') {
    widthClass = 'w360';
  } else if (size === 'large') {
    widthClass = 'w600';
  }

  const containerClasses = classnames(
    `relative wmax-full ${widthClass} bg-white round`,
    { 'px36 py36': padding === 'large' }
  );

  const contentClasses = 'fixed top px12 py12 px60-mm py60-mm z1'
  const overlayClasses = 'fixed bg-darken50';

  const modalProps = {
    titleText: accessibleTitle,
    // TODO serve an alert dialog
    alert
  };

  // if (onExit) {
  //   modalProps.onExit = onExit;
  // }

  // if (props.initialFocus) {
  //   modalProps.initialFocus = props.initialFocus;
  // } else {
  //   modalProps.focusDialog = true;
  // }

  // if (props.focusTrapPaused) {
  //   modalProps.focusTrapPaused = true;
  // }

  // if (!props.allowEventBubbling) {
  //   // stopPropagation prevents child modals from closing parent modals when nesting
  //   return (
  //     <EventTrap>
  //       <AriaModal {...modalProps}>{dialogBody}</AriaModal>
  //     </EventTrap>
  //   );
  // }

  const DialogContent = React.forwardRef(
    ({ children, ...props }, forwardedRef) => {

      console.log('props', props);
      return (
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay style={{ inset: '0px' }} className={overlayClasses} />
          <DialogPrimitive.Content {...props} className={contentClasses} ref={forwardedRef as React.RefObject<HTMLDivElement>}>
            <div className={containerClasses}>
              {children}
              {renderActions()}
            </div>
            <DialogPrimitive.Close aria-label="Close">
              {closeButton}
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      );
    }
  );

  return (
    <DialogPrimitive.Root onOpenChange={onExit} defaultOpen={true}>
      <DialogContent />
    </DialogPrimitive.Root>
  );
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
