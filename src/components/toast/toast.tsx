import React, { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as ToastPrimitive from '@radix-ui/react-toast';
import Icon from '../icon';

interface Props {
  content: string;
  action?: {
    text: string;
    callback: () => void;
  };
  duration?: number;
  closeButton?: boolean;
  children: ReactNode;
  active: boolean;
  onExit: () => void;
}

export default function Toast({
  content,
  duration = 5000,
  action,
  closeButton = true,
  children,
  active,
  onExit
}: Props): ReactElement {
  const timerRef = React.useRef(0);

  let actionBtnClass = closeButton ? '' : 'pr12';
  return (
    <ToastPrimitive.Provider swipeDirection="down" duration={duration}>
      <span
        onClick={() => {
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {}, 100);
        }}
      >
        {children}
      </span>
      <ToastPrimitive.Root
        type="foreground"
        open={active}
        onOpenChange={onExit}
        className="bg-gray-dark round wmax600 w-11/12 flex flex--center-cross row flex--space-between-main py12 pl12 hmin60"
      >
        <ToastPrimitive.Description className="color-gray-lighter txt-truncate w-auto mr12">
          {content}
        </ToastPrimitive.Description>
        <span
          className={`flex flex-row flex--center-cross ${actionBtnClass} flex-child-no-shrink`}
        >
          {action && (
            <ToastPrimitive.Action
              altText="Open"
              className="btn"
              type="button"
              onClick={action.callback}
              data-testid="toast-action"
            >
              {action.text}
            </ToastPrimitive.Action>
          )}
          {closeButton && (
            <ToastPrimitive.Close
              className="btn btn--transparent color-gray-light"
              type="button"
              aria-label="Close"
              data-testid="toast-close"
            >
              <Icon name="close" />
            </ToastPrimitive.Close>
          )}
        </span>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed left bottom mb24 w-full flex flex--center-main" />
    </ToastPrimitive.Provider>
  );
}

Toast.propTypes = {
  /**
   * The trigger element.
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * The toast content. This can either be a string, valid JSX, or a function
   * returning either. Content text will truncate.
   */
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * The duration the toast should appear for. Recommended toast duration is 5 seconds with 1 extra second for every additional 300 characters in the toast body.
   */
  duration: PropTypes.number,
  /**
   * When `true` the toast will have a separate close button (in addition to the call-to-action button).
   * When `false` toast will only have action button.
   */
  closeButton: PropTypes.bool,
  /**
   * The primary action for the toast.
   *
   * The value is an object with the following properties:
   * - `text`: **(required)** The text of the button.
   * - `callback`: **(required)** Invoked when the button is clicked.
   */
  action: PropTypes.shape({
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  }),
  /**
   * A function called when popover is dismissed. You need to use this callback
   * to remove the Toast from the rendered page.
   */
  onExit: PropTypes.func.isRequired,
  /**
   * Triggers the active state of the toast. When true, the toast appears.
   */
  active: PropTypes.bool.isRequired
};
