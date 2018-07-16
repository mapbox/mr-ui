import React from 'react';
import PropTypes from 'prop-types';
import xtend from 'xtend';
import Clipboard from 'clipboard/dist/clipboard.min.js';
import IconButton from '../icon-button';
import Icon from '../icon';
import Popover from '../popover';
import omit from '../utils/omit';

export default class CopyButton extends React.PureComponent {
  // If you add propsTypes, add the corresponding propNames.
  static propTypes = {
    /** The text that will be copied when the button is clicked. */
    text: PropTypes.string.isRequired,
    /**
     * Pass in an element containing text to copy instead of the raw text to provide a better fallback,
     * where the text is selected for you if execcopy is not supported
     */
    textEl: PropTypes.object,
    /** The interval for which `Copied!` is displayed to the user. */
    feedbackTime: PropTypes.number,
    /**
     * Invoked when the button is clicked.
     * Passed one argument: the `text` prop.
     */
    onCopy: PropTypes.func,
    /** Extra props to pass to the IconButton component. */
    iconButtonProps: PropTypes.object
  };
  static propNames = [
    'text',
    'feedbackTime',
    'onCopy',
    'iconButtonProps',
    'textEl'
  ];

  static defaultProps = {
    feedbackTime: 800,
    iconButtonProps: {
      themeButton: 'btn--xs py3 px3 round'
    }
  };

  state = {
    showingFeedback: false
  };

  componentDidMount() {
    if (this.props.textEl && Clipboard.isSupported()) {
      this.setClipboard(this.props.textEl);
    }
  }

  componentWillUnmount() {
    if (this.revertTimer) clearTimeout(this.revertTimer);
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }

  handleCopyButtonClick = () => {
    // Clipboard.js attaches its own click handlers for copying
    const { onCopy, text } = this.props;
    if (onCopy) {
      onCopy(text);
    }
    this.showFeedback();
  };

  showFeedback = () => {
    this.setState({ showingFeedback: true });
    this.revertTimer = setTimeout(() => {
      this.setState({ showingFeedback: false });
    }, this.props.feedbackTime);
  };

  componentWillReceiveProps(nextProps) {
    const copyAvailable = Clipboard.isSupported();
    if (nextProps.textEl !== this.props.textEl && copyAvailable) {
      this.setClipboard(nextProps.textEl);
    }
    if (!copyAvailable && this.clipboard) {
      this.clipboard.destroy();
    }
  }

  setContainer = element => {
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

  setClipboard = element => {
    this.clipboard = new Clipboard(element);
  };

  render() {
    const { props, state } = this;
    // don't render the button if you can't use it to copy,
    // or are in Node during a static build
    if (typeof document !== 'undefined' && !Clipboard.isSupported()) {
      return null;
    }

    let tooltipText = state.showingFeedback ? 'Copied!' : 'Copy';
    let icon = state.showingFeedback ? 'check' : 'clipboard';

    const extraProps = omit(this.props, CopyButton.propNames);
    let iconButtonProps = props.iconButtonProps;
    let tooltipProps = {
      content: tooltipText
    };

    if (props.iconButtonProps.tooltipProps) {
      tooltipProps = xtend(tooltipProps, props.iconButtonProps.tooltipProps);
    }
    iconButtonProps.tooltipProps = tooltipProps;

    let button = null;
    if (state.showingFeedback) {
      // When the action is complete, we switch from the tooltip-powered IconButton
      // to a regular old button a regular old Popover. We do this so we can
      // control the display of the Popover, for it to be there for the full
      // this.props.feedbackTime.
      button = (
        <button
          type="button"
          className={`btn ${props.iconButtonProps.themeButton}`}
          {...extraProps}
        >
          <Icon name={icon} />
          <Popover
            // We don't need this one to be as accessible as a regular tooltip
            getAnchorElement={this.getContainer}
            placement="top"
            alignment="center"
            hideWhenAnchorIsOffscreen={true}
            accessibleTitle={null}
          >
            <span className="block txt-s">{tooltipText}</span>
          </Popover>
        </button>
      );
    } else {
      button = (
        <IconButton
          onClick={this.handleCopyButtonClick}
          icon={icon}
          {...iconButtonProps}
          {...extraProps}
        />
      );
    }

    // data-clipboard-text and the container ref are used by clipboard.js
    // to copy text if you do not pass in a textEl as a prop.
    // Note that this wont have as nice a failure mode.
    return (
      <div
        ref={this.setContainer}
        className="inline-block"
        data-clipboard-text={this.props.text}
      >
        {button}
      </div>
    );
  }
}
