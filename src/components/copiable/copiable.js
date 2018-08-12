import React from 'react';
import PropTypes from 'prop-types';
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
      copyTooltipActive: false
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
    this.copyHintText = (
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

  setTextEl = el => {
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

  handleTextBlur = event => {
    if (!this.textEl.contains(event.relatedTarget)) {
      this.setState({ copyTooltipActive: false });
    }
  };

  render() {
    const { props } = this;

    const copyBtn = typeof document !== 'undefined' &&
      CopyButton.isCopySupported() && (
        <div className="fr py6 px6">
          <CopyButton text={props.value} textEl={this.textEl} block={true} />
        </div>
      );

    const copyHintPopover = this.state.copyTooltipActive && (
      <Popover
        getAnchorElement={this.getTextEl}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        accessibleTitle="Copy the selected text"
        padding="small"
      >
        <div className="txt-s">{this.copyHintText}</div>
      </Popover>
    );

    return (
      <div className="clearfix bg-darken5 round">
        {copyBtn}
        <div
          tabIndex="-1"
          ref={this.setTextEl}
          onFocus={this.handleTextFocus}
          onBlur={this.handleTextBlur}
          className="py6 px12 txt-mono txt-s"
          data-test="copiable-text-el"
        >
          <div className="my3">{props.value}</div>
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
  value: PropTypes.string.isRequired
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
