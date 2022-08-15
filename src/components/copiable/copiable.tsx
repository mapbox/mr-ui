import React, { ReactElement, useState, useEffect, useRef, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CopyButton from '../copy-button';
import Popover from '../popover';
import OSKey from 'os-key';
import select from 'select';
import getWindow from '../utils/get-window';

const DISABLE_CLICK_TO_SELECT_THRESHOLD = 640;
const FEEDBACK_TIME = 2000;

function getCopyKeys(ua: string): string {
  const keys = OSKey(ua);
  if (!keys) return;
  if (keys.primaryMeta) {
    // ⌘+C
    return `${keys.meta.symbol}+C`;
  } else {
    // Ctrl+C
    return `${keys.ctrl.abbreviation}+C`;
  }
}

interface Props {
  value: string;
  focusTrapPaused?: boolean;
  truncated?: boolean;
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
  focusTrapPaused,
  truncated = false
}: Props): ReactElement {
  const textEl = useRef(null);
  const [showCopyButton, setShowCopyButton] = useState(false);
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

  useEffect(() => {
    if (typeof window !== 'undefined' && CopyButton.isCopySupported()) {
      setShowCopyButton(true);
    }
  }, []);

  const handleTextFocus = () => {
    if (getWindow().innerWidth < DISABLE_CLICK_TO_SELECT_THRESHOLD) return;
    select(() => textEl.current);
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
        focusTrapPaused={focusTrapPaused}
      />
    </div>
  );

  const renderCopyHintText = (
    <span>
      <span className="txt-kbd">
        {getCopyKeys(getWindow().navigator.userAgent)}
      </span>{' '}
      to copy
    </span>
  );

  const copyHintPopover = (
    <Popover
      getAnchorElement={() => textEl.current}
      placement="top"
      alignment="center"
      hideWhenAnchorIsOffscreen={true}
      accessibleTitle="Copy the selected text"
      padding="small"
    >
      <div className="txt-s">{showCopyButton && renderCopyHintText}</div>
    </Popover>
  );

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
      {showCopyButton && renderCopyButton}
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
      {copyTooltipActive && copyHintPopover}
    </div>
  );
}

Copiable.propTypes = {
  /**
   * The text that will be displayed and copied.
   */
  value: PropTypes.string.isRequired,
  /**
   * If `true`, this will allow interaction with elements outside of the
   * modal container. You normally don't want to set this, but it can be
   * useful for nesting different components that are displaced to other
   * parts of the DOM.
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
  truncated: PropTypes.bool
};
