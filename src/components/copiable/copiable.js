import React from 'react';
import PropTypes from 'prop-types';
import CopyButton from '../copy-button';
import Popover from '../popover';
import OSKey from 'os-key';
import select from 'select';
import Clipboard from 'clipboard/dist/clipboard.min.js';
import debounce from 'debounce';
import getWindow from '../utils/get-window';

const DISABLE_CLICK_TO_SELECT_THRESHOLD = 640;
const FEEDBACK_TIME = 2000;

export default class Copiable extends React.Component {
  static propTypes = {
    /** The text that will be displayed and copied. */
    value: PropTypes.string.isRequired,
    /** Styling for the component wrapper. */
    themeWrapper: PropTypes.string,
    /** Styling for the copy button's container. */
    themeCopyButtonContainer: PropTypes.string,
    /** Styling for the copy button. */
    themeCopyButton: PropTypes.string,
    /** Styling for the text readout. */
    themeText: PropTypes.string,
    /** Styling for the copy hint tooltip. */
    themeTooltip: PropTypes.string
  };
  static defaultProps = {
    themeWrapper: 'relative round z0 scroll-styled',
    themeCopyButtonContainer: 'absolute z2 top right mr3 mt3 color-white',
    themeCopyButton: 'btn btn--xs py3 px3 round',
    themeText: 'color-gray bg-darken5 round-l txt-mono py6 px6 pr36 txt-s'
  };

  state = {
    copyTooltipActive: false,
    disableClickToSelect: false
  };

  showCopyTooltip = () => {
    this.setState({ copyTooltipActive: true }, () => {
      this.revertTimer = setTimeout(() => {
        this.setState({ copyTooltipActive: false });
      }, FEEDBACK_TIME);
    });
  };

  componentDidMount() {
    const { handleWindowResize } = this;
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    this.copyHintText = `${this.getCopyKeys(
      getWindow().navigator.userAgent
    )} to copy!`;
  }

  componentWillUnmount = () => {
    const { handleWindowResize, revertTimer } = this;
    if (revertTimer) {
      clearTimeout(revertTimer);
    }
    window.removeEventListener('resize', handleWindowResize);
  };

  handleWindowResize = debounce(() => {
    const w = this.getWindowWidth();
    if (
      w <= DISABLE_CLICK_TO_SELECT_THRESHOLD &&
      !this.state.disableClickToSelect
    ) {
      this.setState({ disableClickToSelect: true });
    } else if (
      w > DISABLE_CLICK_TO_SELECT_THRESHOLD &&
      this.state.disableClickToSelect
    ) {
      this.setState({ disableClickToSelect: false });
    }
  }, 300);

  setTextEl = el => {
    this.textEl = el;
  };

  getTextEl = () => {
    return this.textEl;
  };

  getWindowWidth() {
    return getWindow().innerWidth;
  }

  getCopyKeys = ua => {
    const keys = OSKey(ua);
    if (!keys) return;
    if (keys.primaryMeta) {
      // ⌘+C
      return `${keys.meta.symbol}+C`;
    } else {
      // Ctrl+C
      return `${keys.ctrl.abbreviation}+C`;
    }
  };

  handleSelect = () => {
    if (this.state.disableClickToSelect) return;
    select(this.getTextEl());
    this.showCopyTooltip();
  };

  render() {
    const {
      value,
      themeWrapper,
      themeCopyButton,
      themeCopyButtonContainer,
      themeText,
      themeTooltip
    } = this.props;

    const quickSelect = (
      <span ref={this.setTextEl} onClick={this.handleSelect}>
        {this.props.value}
      </span>
    );

    const copyBtn = typeof document !== 'undefined' &&
      Clipboard.isSupported() && (
        <div className={themeCopyButtonContainer}>
          <CopyButton
            text={value}
            iconButtonProps={{
              themeButton: themeCopyButton
            }}
            textEl={this.textEl}
          />
        </div>
      );

    const copyHintPopover = this.state.copyTooltipActive && (
      <Popover
        themePopover={themeTooltip}
        getAnchorElement={this.getTextEl}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        accessibleTitle={this.copyHintText}
      >
        <div className="txt-s">{this.copyHintText}</div>
      </Popover>
    );

    return (
      <div className={themeWrapper}>
        <div className={themeText}>{quickSelect}</div>
        {copyBtn}
        {copyHintPopover}
      </div>
    );
  }
}
