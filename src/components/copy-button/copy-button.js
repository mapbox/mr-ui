import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard/dist/clipboard.min.js';
import Icon from '../icon';
import Popover from '../popover';
import Tooltip from '../tooltip';

const FEEDBACK_TIME = 800;

/**
 * A button that, when clicked, copies the designated text to the clipboard.
 *
 * The static function `CopyButton.isCopySupported` returns a boolean
 * indicating whether the current browser will support automatic copying.
 * If it does not, you might want to hide your copy button and make sure
 * the user is able to manually select and copy the text.
 */
export default class CopyButton extends React.PureComponent {
  state = {
    showingFeedback: false
  };

  componentDidMount() {
    if (this.props.textEl && Clipboard.isSupported()) {
      this.setClipboard(this.props.textEl);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.revertTimer);
    this.destroyClipboard();
  }

  handleCopyButtonClick = (event) => {
    // Clipboard.js attaches its own click handlers for copying
    const { onCopy, text } = this.props;
    if (onCopy) {
      onCopy(text);
    }
    this.showFeedback();
    this.destroyClipboard(); // destroy clipboard
    if (event) this.setClipboard(event.target); // reinitialize clipboard
  };

  showFeedback = () => {
    this.setState({ showingFeedback: true });
    this.revertTimer = setTimeout(() => {
      this.setState({ showingFeedback: false });
    }, FEEDBACK_TIME);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const copyAvailable = Clipboard.isSupported();
    if (nextProps.textEl !== this.props.textEl && copyAvailable) {
      this.setClipboard(nextProps.textEl);
    }
    if (!copyAvailable) {
      this.destroyClipboard();
    }
  }

  setContainer = (element) => {
    if (!element) return;
    const { textEl } = this.props;
    this.container = element;
    if (!textEl && Clipboard.isSupported()) {
      this.setClipboard(element);
    }
  };

  getContainer = () => {
    return this.container;
  };

  destroyClipboard = () => {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  };

  setClipboard(element) {
    const { focusTrapPaused } = this.props;
    this.clipboard = new Clipboard(element, {
      // Setting the container is necessary for Clipboard to function within
      // focus traps, like in a Modal.
      ...(!focusTrapPaused && { container: element })
    });
  }

  renderFeedbackPopover() {
    const { state } = this;
    if (!state.showingFeedback) {
      return null;
    }

    return (
      <Popover
        // We don't need this one to be as accessible as a regular tooltip
        getAnchorElement={this.getContainer}
        placement="top"
        alignment="center"
        hideWhenAnchorIsOffscreen={true}
        accessibleTitle={null}
        padding="small"
      >
        <div className="txt-s">Copied!</div>
      </Popover>
    );
  }

  render() {
    const { props, state } = this;
    // don't render the button if you can't use it to copy,
    // or are in Node during a static build
    if (typeof document !== 'undefined' && !Clipboard.isSupported()) {
      return null;
    }

    const iconName = state.showingFeedback ? 'check' : 'clipboard';
    const buttonClasses = classnames(props.className, {
      block: props.block
    });

    // data-clipboard-text and the container ref are used by clipboard.js
    // to copy text if you do not pass in a textEl as a prop.
    // Note that this wont have as nice a failure mode.
    return (
      <Tooltip
        disabled={state.showingFeedback}
        content="Copy"
        block={props.block}
      >
        <button
          aria-label="Copy"
          type="button"
          className={buttonClasses}
          {...props.passthroughProps}
          ref={this.setContainer}
          data-clipboard-text={props.text}
          onClick={this.handleCopyButtonClick}
        >
          <Icon name={iconName} />
          {this.renderFeedbackPopover()}
        </button>
      </Tooltip>
    );
  }
}

CopyButton.propTypes = {
  /**
   * The text that will be copied when the button is clicked.
   */
  text: PropTypes.string.isRequired,
  /**
   * Pass in an element containing text to copy instead of the raw text
   * to provide a better fallback, where the text is selected for you if
   * `execcopy` is not supported.
   */
  textEl: PropTypes.object,
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

CopyButton.defaultProps = {
  className: 'btn btn--xs py3 px3 round',
  block: false
};

CopyButton.isCopySupported = () => {
  return Clipboard.isSupported();
};
