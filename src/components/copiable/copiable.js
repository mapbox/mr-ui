import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CopyButton from '../copy-button';
import Popover from '../popover';
import OSKey from 'os-key';
import select from 'select';
import getWindow from '../utils/get-window';

const DISABLE_CLICK_TO_SELECT_THRESHOLD = 640;
const FEEDBACK_TIME = 2000;

/**
 * Make some text easily copiable.
 *
 * Comes with a [CopyButton](#copybutton) that you can click to automatically
 * copy the text.
 *
 * Also, on wider viewports a click on the text will automatically select it
 * all, so you can easily copy with your favorite keyboard shortcut.
 */
export default class Copiable extends React.Component {
  constructor(props) {
    super(props);

    this.copyHintText = '';
    this.state = {
      copyTooltipActive: false,
      showCopyButton: false
    };
  }

  showCopyTooltip = () => {
    this.setState({ copyTooltipActive: true }, () => {
      this.revertTimer = setTimeout(() => {
        this.setState({ copyTooltipActive: false });
      }, FEEDBACK_TIME);
    });
  };

  componentDidMount() {
    this.setState({
      showCopyButton:
        typeof window !== 'undefined' && CopyButton.isCopySupported()
    });
  }

  renderCopyHintText() {
    if (!this.state.showCopyButton) {
      return null;
    }

    return (
      <span>
        <span className="txt-kbd">
          {getCopyKeys(getWindow().navigator.userAgent)}
        </span>{' '}
        to copy
      </span>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.revertTimer);
  }

  setTextEl = (el) => {
    this.textEl = el;
  };

  getTextEl = () => {
    return this.textEl;
  };

  getWindowWidth() {
    return getWindow().innerWidth;
  }

  handleTextFocus = () => {
    if (getWindow().innerWidth < DISABLE_CLICK_TO_SELECT_THRESHOLD) return;
    select(this.getTextEl());
    this.showCopyTooltip();
  };

  handleTextBlur = (event) => {
    if (!this.textEl.contains(event.relatedTarget)) {
      this.setState({ copyTooltipActive: false });
    }
  };

  renderCopyButton() {
    const { props, state } = this;

    if (!state.showCopyButton) {
      return null;
    }

    return (
      <div className="absolute top right px6 py6">
        <CopyButton
          text={props.value}
          block={true}
          focusTrapPaused={props.focusTrapPaused}
        />
      </div>
    );
  }

  render() {
    const { props } = this;
    const copyButton = this.renderCopyButton();
    const copyHintPopover = this.state.copyTooltipActive && (
      <Popover
        getAnchorElement={this.getTextEl}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        accessibleTitle="Copy the selected text"
        padding="small"
      >
        <div className="txt-s">{this.renderCopyHintText()}</div>
      </Popover>
    );

    const textClasses = classnames('my3 txt-mono txt-s mr24', {
      'txt-truncate': props.truncated
    });
    const textStyle = {};
    if (!props.truncated) {
      textStyle.wordWrap = 'break-word';
      textStyle.overflowWrap = 'break-word';
    }

    return (
      <div className="relative clearfix bg-darken5 round">
        {copyButton}
        <div
          tabIndex="-1"
          ref={this.setTextEl}
          onFocus={this.handleTextFocus}
          onBlur={this.handleTextBlur}
          className="py6 px12"
          data-test="copiable-text-el"
        >
          <div className={textClasses} style={textStyle}>
            {props.value}
          </div>
        </div>
        {copyHintPopover}
      </div>
    );
  }
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

Copiable.defaultProps = {
  truncated: false
};

function getCopyKeys(ua) {
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
