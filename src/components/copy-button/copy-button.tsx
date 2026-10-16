import React, { ReactElement, useState, useEffect, HTMLAttributes, ReactNode} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Popover from '../popover';
import Tooltip from '../tooltip';
import { DataAttributes } from '../utils/data-attributes';

const FEEDBACK_TIME = 800;

export interface CopyButtonProps {
  text: string;
  onCopy?: (text: string) => void;
  block?: boolean;
  /** @deprecated No longer has any effect; copying works inside focus traps. */
  focusTrapPaused?: boolean;
  className?: string;
  tooltipColoring?: 'light' | 'dark';
  tooltipTextSize?: 'xs' | 's' | 'none';
  tooltipContent?: string;
  children?: ReactNode;
  passthroughProps?: HTMLAttributes<HTMLButtonElement> & DataAttributes;
}

/**
 * A button that, when clicked, copies the designated text to the clipboard.
 *
 * The static function `CopyButton.isCopySupported` returns a boolean
 * indicating whether the current browser will support automatic copying.
 * If it does not, you might want to hide your copy button and make sure
 * the user is able to manually select and copy the text.
 */
export default function CopyButton({
  text,
  onCopy,
  block = false,
  className = 'btn btn--xs py3 px3 round',
  children,
  tooltipColoring = 'light',
  tooltipTextSize = 's',
  tooltipContent = 'Copy',
  passthroughProps
}: CopyButtonProps): ReactElement {
  const [showingFeedback, setShowingFeedback] = useState(false);

  useEffect(() => {
    let timer;

    if (showingFeedback) {
      timer = setTimeout(() => {
        setShowingFeedback(false);
      }, FEEDBACK_TIME);
    }

    return () => clearTimeout(timer);
  }, [showingFeedback]);

  const handleCopyButtonClick = () => {
    if (!CopyButton.isCopySupported()) return;

    navigator.clipboard.writeText(text).then(
      () => {
        if (onCopy) {
          onCopy(text);
        }
        setShowingFeedback(true);
      },
      () => {}
    );
  };

  const iconName = showingFeedback ? 'check' : 'clipboard';
  const buttonClasses = classnames(className, {
    block
  });

  const body = children ? children : <button 
    type="button"
    className={buttonClasses}
    {...passthroughProps}
  >
    <Icon name={iconName} />
  </button>

  let popoverContent: ReactNode = 'Copied!';
  if (tooltipTextSize !== 'none') {
    popoverContent = (
      <div className={`txt-${tooltipTextSize}`}>{popoverContent}</div>
    );
  }

  return (
    <div
      role="button"
      aria-label={tooltipContent}
      data-testid="copy-button"
      onClick={handleCopyButtonClick}
    >
      <Popover
        content={popoverContent}
        active={showingFeedback}
        coloring={tooltipColoring}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        padding="small"
      >
        <div> 
          <Tooltip
            disabled={showingFeedback}
            coloring={tooltipColoring}
            textSize={tooltipTextSize}
            content={tooltipContent}
          >
            {body}
          </Tooltip>
        </div>
      </Popover>
    </div>
  );
}

CopyButton.propTypes = {
  /**
   * The text that will be copied when the button is clicked.
   */
  text: PropTypes.string.isRequired,
  /**
   * Invoked when the button is clicked.
   * Passed one argument: the `text` prop.
   */
  onCopy: PropTypes.func,
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout, if you don't
   * want the extra line-height that wraps inline elements. Typically, you
   * should only set `block` to `true` if the parent element is controlling
   * width (in a layout that uses flexbox, absolute positioning, or floats).
   */
  block: PropTypes.bool,
  /**
   * Deprecated. No longer has any effect, since copying works inside focus
   * traps like `Modal` without any extra configuration.
   */
  focusTrapPaused: PropTypes.bool,
  /**
   * The `className` prop of the `<button>`.
   */
  className: PropTypes.string,
  /**
   * An object of props that you want to pass through to the `<button>`.
   */
  passthroughProps: PropTypes.object,
  /**
   * Either `'light'` or `'dark'`. This value is passed as the `coloring` prop found in Tooltip and Popover.
   */
  tooltipColoring: PropTypes.oneOf(['light', 'dark']),
  /**
   * `'xs'` (extra small), `'s'` (small), or `'none'` (no size class).
   */
  tooltipTextSize: PropTypes.oneOf(['xs', 's', 'none']),
  /**
   * The text shown in the tooltip and used as the button's `aria-label`.
   * Defaults to `'Copy'`.
   */
  tooltipContent: PropTypes.string,
  /** Optional content to represent the button. */
  children: PropTypes.node
};

CopyButton.isCopySupported = () => {
  return typeof navigator !== 'undefined' && !!navigator.clipboard?.writeText;
};
