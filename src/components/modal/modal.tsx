import React, { ReactElement, ReactNode, CSSProperties } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Tooltip from '../tooltip';
import Icon from '../icon';
import ModalActions from './modal-actions';
import EventTrap from './event-trap';

interface Props {
  children: ReactNode;
  accessibleTitle: string;
  size?: 'small' | 'large' | 'auto';
  padding?: 'large' | 'none';
  margin?: 'large' | 'default';
  onExit?: () => void;
  exitOnUnderlayClicked?: boolean;
  allowEventBubbling?: boolean;
  initialFocus?: string;
  primaryAction?: {
    text: string;
    callback: () => void;
    destructive?: boolean;
    disabled?: boolean;
  };
  secondaryAction?: {
    text: string;
    callback: () => void;
    disabled?: boolean;
  };
  tertiaryAction?: {
    text: string;
    callback: () => void;
    disabled?: boolean;
  };
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
  margin = 'default',
  allowEventBubbling = false,
  exitOnUnderlayClicked = true,
  initialFocus,
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
  };

  let widthClass = 'wmax-full';
  if (size === 'small') {
    widthClass = 'wmax360 w-11/12';
  } else if (size === 'large') {
    widthClass = 'wmax600 w-11/12';
  }

  let marginClass = 'my12 my60-mm';
  if (margin === 'large') {
    marginClass = 'my120';
  }

  const overlayProps: {
    className: string;
    style: CSSProperties;
    'data-testid': string;
  } = {
    className: 'fixed top bottom left right bg-darken50',
    style: {
      display: 'grid',
      overflowY: 'auto',
      placeItems: 'start center'
    },
    'data-testid': 'modal-overlay'
  };

  const rootProps: {
    defaultOpen: true;
    onOpenChange?: () => void;
  } = {
    defaultOpen: true
  };

  if (onExit && exitOnUnderlayClicked) {
    rootProps.onOpenChange = onExit;
  }

  const contentProps: {
    className: string;
    onOpenAutoFocus?: (e) => void;
  } = {
    className: classnames(
      `relative ${marginClass} ${widthClass} bg-white round`,
      { 'px36 py36': padding === 'large' }
    )
  };

  if (initialFocus) {
    contentProps.onOpenAutoFocus = (e) => {
      const el: HTMLElement | null = document.querySelector(initialFocus);
      if (el !== null) {
        e.preventDefault();
        el.focus();
      }
    };
  }

  const modal = (
    <DialogPrimitive.Root {...rootProps} open={true}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay {...overlayProps}>
          <DialogPrimitive.Content {...contentProps}>
            <VisuallyHidden.Root>
              <DialogPrimitive.Title>{accessibleTitle}</DialogPrimitive.Title>
            </VisuallyHidden.Root>
            {children}
            {renderActions()}
            {onExit && (
              <Tooltip content="Close">
                <button
                  onClick={onExit}
                  type="button"
                  data-testid="modal-close"
                  aria-label="Close"
                  className="btn btn--transparent unround-t unround-br color-gray py12 px12 absolute top right"
                >
                  <Icon name="close" />
                </button>
              </Tooltip>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );

  if (!allowEventBubbling) {
    return <EventTrap>{modal}</EventTrap>;
  }

  return modal;
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
   * If `onExit` is provided but this prop is set as false, a click on the underlay will
   * not close the modal. The only way of closing the modal is clicking on the close button.
   */
  exitOnUnderlayClicked: PropTypes.bool,
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
   * `'large'` to compensate for a fixed top header or `'default'` to be closer to the top of the viewport.
   */
  margin: PropTypes.oneOf(['large', 'default']),
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
