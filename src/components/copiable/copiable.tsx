import React, {
  ReactElement,
  useState,
  useEffect,
  useRef,
  CSSProperties
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CopyButton from '../copy-button';
import Popover from '../popover';
import { isMac } from '../utils/is-mac';

const DISABLE_CLICK_TO_SELECT_THRESHOLD = 640;
const FEEDBACK_TIME = 2000;

/**
 * Select all text inside an element, so it can be copied with the keyboard.
 */
function selectContents(element: Node): void {
  const range = document.createRange();
  range.selectNodeContents(element);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

export interface CopiableProps {
  value: string;
  /** @deprecated No longer has any effect; copying works inside focus traps. */
  focusTrapPaused?: boolean;
  truncated?: boolean;
  onCopy?: (text: string) => void;
}

/**
 * Make some text easily copiable.
 *
 * Comes with a [CopyButton](#copybutton) that you can click to automatically
 * copy the text.
 *
 * Also, on wider viewports a click on the text will automatically select it
 * all, so you can easily copy with your favorite keyboard shortcut.
 */
export default function Copiable({
  value,
  onCopy,
  truncated = false
}: CopiableProps): ReactElement {
  const textEl = useRef(null);
  const showCopyButton = useRef(CopyButton.isCopySupported());
  const [copyTooltipActive, setCopyTooltipActive] = useState(false);

  useEffect(() => {
    let timer;

    if (copyTooltipActive) {
      timer = setTimeout(() => {
        setCopyTooltipActive(false);
      }, FEEDBACK_TIME);
    }

    return () => clearTimeout(timer);
  }, [copyTooltipActive]);

  const handleTextFocus = () => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < DISABLE_CLICK_TO_SELECT_THRESHOLD) return;
    selectContents(textEl.current);
    setCopyTooltipActive(true);
  };

  const handleTextBlur = (event) => {
    if (!textEl.current.contains(event.relatedTarget)) {
      setCopyTooltipActive(false);
    }
  };

  const renderCopyButton = (
    <div className="absolute top right px6 py6">
      <CopyButton
        text={value}
        block={true}
        onCopy={onCopy}
      />
    </div>
  );

  const renderCopyHintText = () => {
    if (typeof window === 'undefined') return;

    return (
      <span>
        <span className="txt-kbd">{isMac() ? '⌘+C' : 'Ctrl+C'}</span> to copy
      </span>
    );
  };

  const textClasses = classnames('my3 txt-mono txt-s mr24', {
    'txt-truncate': truncated
  });
  const textStyle: CSSProperties = {};
  if (!truncated) {
    textStyle.wordWrap = 'break-word';
    textStyle.overflowWrap = 'break-word';
  }

  return (
    <div className="relative clearfix bg-darken5 round">
      {showCopyButton.current && renderCopyButton}
      <Popover
        content={
          <div className="txt-s">
            {showCopyButton.current && renderCopyHintText()}
          </div>
        }
        active={copyTooltipActive}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        aria-label="Copy the selected text"
        padding="small"
      >
        <div
          tabIndex={-1}
          ref={textEl}
          onFocus={handleTextFocus}
          onBlur={handleTextBlur}
          className="py6 px12"
          data-testid="copiable-text-el"
        >
          <div className={textClasses} style={textStyle}>
            {value}
          </div>
        </div>
      </Popover>
    </div>
  );
}

Copiable.propTypes = {
  /**
   * The text that will be displayed and copied.
   */
  value: PropTypes.string.isRequired,
  /**
   * Deprecated. No longer has any effect, since copying works inside focus
   * traps like `Modal` without any extra configuration.
   */
  focusTrapPaused: PropTypes.bool,
  /**
   * If `false` (default), the text will be overflow to multiple lines,
   * and words longer than a single line (e.g. long access tokens or URLs)
   * will be broken to enforce wrapping.
   *
   * If `true`, the Copiable's text will be truncated to a single line
   * of text. **Only set this to `true` if you know that your target
   * browsers support the copy button!** Some browsers will not effectively
   * copy text that is truncated by CSS, so the risk is that some of your
   * users might have *no way* to view and copy all the text if the copy
   * button does not work for them.
   *
   * Horizontal scrolling is not an option because of things end up getting
   * pretty gross across browsers.
   */
  truncated: PropTypes.bool,
  /**
   * Invoked when the button is clicked.
   * Passed one argument: the `text` prop.
   */
  onCopy: PropTypes.func
};
