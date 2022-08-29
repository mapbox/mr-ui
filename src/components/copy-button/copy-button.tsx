import React, { ReactElement, useState, useEffect, useCallback, HTMLAttributes} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard/dist/clipboard.min.js';
import Icon from '../icon';
import Popover from '../popover';
import Tooltip from '../tooltip';

const FEEDBACK_TIME = 800;

interface Props {
  text: string;
  onCopy?: (text: string) => void;
  block?: boolean;
  focusTrapPaused?: boolean;
  className?: string;
  passthroughProps?: HTMLAttributes<HTMLButtonElement>;
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
  focusTrapPaused,
  className = 'btn btn--xs py3 px3 round',
  passthroughProps
}: Props): ReactElement {
  const [clipboard, setClipboard] = useState(null);
  const [clipboardElement, setClipboardElement] = useState(null);
  const [showingFeedback, setShowingFeedback] = useState(false);

  const makeClipboard = useCallback(() => {
    if (clipboardElement) {
      setClipboard(new Clipboard(clipboardElement, {
        // Setting the container is necessary for Clipboard to function within
        // focus traps, like in a Modal.
        ...(!focusTrapPaused && { container: clipboardElement })
      }));
    }
  }, [focusTrapPaused, clipboardElement]);

  const reinitializeClipboard = () => {
    if (clipboard) {
      clipboard.destroy();
      makeClipboard();
    }
  };

  useEffect(() => {
    return () => {
      if (clipboard) {
        clipboard.destroy();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // initialize clipboard once ref is set
    if (clipboardElement && !clipboard) {
      makeClipboard();
    }
  }, [clipboardElement, clipboard, makeClipboard]);

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
    // Clipboard.js attaches its own click handlers for copying
    if (onCopy) {
      onCopy(text);
    }

    // Show feedback
    setShowingFeedback(true);
    reinitializeClipboard();
  };

  const iconName = showingFeedback ? 'check' : 'clipboard';
  const buttonClasses = classnames(className, {
    block
  });

  // data-clipboard-text and the container ref are used by clipboard.js
  // to copy text. Note that this wont have as nice a failure mode.
  return (
    <div
      role="button"
      aria-label="Copy"
      data-testid="copy-button"
      ref={ref => setClipboardElement(ref)}
      data-clipboard-text={text}
      onClick={handleCopyButtonClick}
    >
      <Popover
        content={<div className="txt-s">Copied!</div>}
        active={showingFeedback}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        padding="small"
      >
        <Tooltip
          disabled={showingFeedback}
          content="Copy"
        >
          <button 
            type="button"
            className={buttonClasses}
            {...passthroughProps}
          >
            <Icon name={iconName} />
          </button>
        </Tooltip>
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
   * If `true`, this will allow interaction with elements outside of the
   * modal container. You normally don't want to set this, but it can be
   * useful for nesting different components that are displaced to other
   * parts of the DOM.
   */
  focusTrapPaused: PropTypes.bool,
  /**
   * The `className` prop of the `<button>`.
   */
  className: PropTypes.string,
  /**
   * An object of props that you want to pass through to the `<button>`.
   */
  passthroughProps: PropTypes.object
};

CopyButton.isCopySupported = () => {
  return Clipboard.isSupported();
};
