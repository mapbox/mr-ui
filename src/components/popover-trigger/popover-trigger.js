import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import hoverintent from 'hoverintent';
import Popover from '../popover';

const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';

/**
 * A smart trigger for managing the state of a [Popover](#popover).
 *
 * If you want to manage the open-closed state of the Popover yourself,
 * use [Popover](#popover) directly.
 *
 * `respondsToClick`, `respondsToHover`, and `respondsToFocus` props determine
 * the means of opening and closing the Popover with interactions. If you open
 * the Popover with a hover or focus, you can also close it by hovering away or
 * blurring. If, however, you open the Popover with a click, you can only close
 * it with another click, on the trigger or outside the Popover. If you
 * open the Popover with a hover and *then* you click, this is equivalent to
 * opening it with a click directly, so it will only close with another
 * click (not from just hovering away).
 */
export default class PopoverTrigger extends React.Component {
  state = {
    visible: false,
    activeTriggerType: null
  };

  componentDidMount() {
    if (!this.triggerElement) return;
    this.triggerElement.addEventListener('touchstart', this.blockHover);
    this.triggerElement.addEventListener('mouseout', this.onTriggerMouseLeave);
    this.hoverListener = hoverintent(
      this.triggerElement,
      this.onTriggerMouseEnter,
      () => {}
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { popoverElement } = this;
    const justOpened =
      prevState.visible === false && this.state.visible === true;

    if (
      justOpened &&
      popoverElement &&
      // If the popover was opened by hover, pay attention to hovering
      // within the popover itself
      this.state.activeTriggerType === TRIGGER_HOVER
    ) {
      popoverElement.addEventListener('mouseleave', this.onPopoverMouseLeave);
    }

    if (!prevProps.disabled && this.props.disabled) {
      this.hide();
    }
  }

  componentWillUnmount() {
    this.hoverListener.remove();
    this.triggerElement.removeEventListener('touchstart', this.blockHover);
    document.removeEventListener('mousemove', this.unblockHover);
    this.clearTimeouts();
  }

  openPopover = (trigger, callback) => {
    const alreadyOpen = !!this.state.visible;
    this.setState(
      {
        visible: true,
        activeTriggerType: trigger
      },
      () => {
        if (!alreadyOpen && this.props.onPopoverOpen) {
          this.props.onPopoverOpen();
        }
        if (callback) callback();
      }
    );
  };

  closePopover = (callback) => {
    const alreadyClosed = !this.state.visible;
    this.setState(
      {
        visible: false,
        activeTriggerType: null
      },
      () => {
        if (!alreadyClosed && this.props.onPopoverClose) {
          this.props.onPopoverClose();
        }
        if (callback) callback();
      }
    );
  };

  onAnyClick = (event) => {
    // If the trigger responds to focus but not click and you *first*
    // focus *then* click, that click closes the popover instead of
    // leaving it open even when the mouse moves away.
    if (
      !this.props.respondsToClick &&
      this.state.visible &&
      this.state.activeTriggerType === TRIGGER_FOCUS
    ) {
      this.hide();
      return;
    }

    if (
      !this.hoverIsBlocked &&
      (this.props.disabled || !this.props.respondsToClick)
    ) {
      return;
    }

    // A trigger click always takes precedence over hover or focus interactions.
    // If the popover is already open by hover or focus, a click will change its
    // priorities, so it stays open even if you mouseleave or blur
    if (
      this.state.visible &&
      this.state.activeTriggerType === TRIGGER_CLICK &&
      (!this.popoverElement || !this.popoverElement.contains(event.target))
    ) {
      this.hide();
    } else {
      this.showBecauseClick();
    }
  };

  // We need to prevent a touch-tap on the trigger from triggering the hover
  // interaction. So if you touchstart, we immediately block responses to hover
  // interactions; then after a short delay (to allow the event to flush?), we
  // re-allow hover interactions —— in case you're a crazy person and switch
  // from a touchscreen to a mouse.
  blockHover = () => {
    if (!this.hoverIsBlocked) {
      this.hoverIsBlocked = true;
      this.addMouseMoveUnblockTimeout = setTimeout(() => {
        document.addEventListener('mousemove', this.unblockHover);
      }, 100);
    }
  };

  unblockHover = () => {
    if (this.hoverIsBlocked) {
      this.hoverIsBlocked = false;
      document.removeEventListener('mousemove', this.unblockHover);
    }
  };

  // Hover and focus interactions do not overlap: if the popover opened because
  // of a hover (and no clicking), it will only close when you mouseleave;
  // and if it opened because of a focus (and no clicking), it will only close
  // when you blur.

  // This can override a popover-hover trigger type because you might mouseleave
  // the popover onto the trigger
  onTriggerMouseEnter = () => {
    if (
      this.props.disabled ||
      !this.props.respondsToHover ||
      (this.state.activeTriggerType &&
        this.state.activeTriggerType !== TRIGGER_HOVER) ||
      this.hoverIsBlocked
    ) {
      return;
    }

    this.showBecauseHover();
  };

  onTriggerMouseLeave = (event) => {
    if (
      this.props.disabled ||
      !this.props.respondsToHover ||
      this.state.activeTriggerType !== TRIGGER_HOVER ||
      this.hoverIsBlocked
    ) {
      return;
    }

    // When you hover over the popover, you do not want to disappear from beneath
    // your cursor. This keeps the popover open when your cursor is within it.
    if (
      !this.popoverElement ||
      !this.popoverElement.contains(event.relatedTarget)
    ) {
      this.hideBecauseHover();
    }
  };

  onPopoverMouseLeave = (event) => {
    if (
      this.props.disabled ||
      !this.props.respondsToHover ||
      this.state.activeTriggerType !== TRIGGER_HOVER ||
      this.hoverIsBlocked
    ) {
      return;
    }

    if (
      !this.triggerElement ||
      !this.triggerElement.contains(event.relatedTarget)
    ) {
      this.hideBecauseHover();
    }
  };

  onTriggerFocus = () => {
    if (
      this.props.disabled ||
      !this.props.respondsToFocus ||
      this.state.visible ||
      this.triggerFocusIsBlocked
    ) {
      return;
    }

    this.showBecauseTriggerFocus();
  };

  onTriggerBlur = () => {
    if (
      this.props.disabled ||
      !this.props.respondsToFocus ||
      !this.state.visible ||
      this.state.activeTriggerType !== TRIGGER_FOCUS
    ) {
      return;
    }

    this.hide();
  };

  onTriggerKeyDown = (event) => {
    const escapeCloses = this.props.popoverProps.escapeCloses;
    if (escapeCloses === false) return;
    if (event.key === 'Escape') {
      this.hide();
    }
  };

  showBecauseClick = () => {
    this.clearTimeouts();
    this.removePopoverListeners();
    this.openPopover(TRIGGER_CLICK);
  };

  showBecauseHover = () => {
    this.openPopover(TRIGGER_HOVER);
  };

  showBecauseTriggerFocus = () => {
    this.clearTimeouts();
    this.removePopoverListeners();
    this.openPopover(TRIGGER_FOCUS);
  };

  hideBecauseHover = () => {
    this.hide();
  };

  hide = () => {
    if (!this.state.visible) return;
    this.clearTimeouts();
    this.removePopoverListeners();
    this.closePopover();

    // If focus was inside the popover, after the popover closes focus will
    // return to the trigger. We need to prevent that from re-opening the
    // trigger.
    this.triggerFocusIsBlocked = true;
    this.cancelTriggerFocusIsBlockedTimeout = setTimeout(() => {
      this.triggerFocusIsBlocked = false;
    }, 100);
  };

  removePopoverListeners = () => {
    const { popoverElement } = this;
    if (!popoverElement) return;
    popoverElement.removeEventListener('mouseleave', this.onPopoverMouseLeave);
  };

  clearTimeouts() {
    if (this.cancelTriggerFocusIsBlockedTimeout)
      clearTimeout(this.cancelTriggerFocusIsBlockedTimeout);
    if (this.addMouseMoveUnblockTimeout)
      clearTimeout(this.addMouseMoveUnblockTimeout);
  }

  ignoreClickWithinElement = (element) => {
    if (this.triggerElement && this.triggerElement.contains(element))
      return true;
    const ignoreClickWithinElement =
      this.props.popoverProps.ignoreClickWithinElement;
    if (ignoreClickWithinElement) {
      return ignoreClickWithinElement(element);
    }
    return false;
  };

  getAnchorElement = () => {
    const getAnchorElement = this.props.popoverProps.getAnchorElement;
    if (getAnchorElement) {
      return getAnchorElement();
    }
    return this.triggerElement.firstChild;
  };

  setTriggerElement = (element) => {
    this.triggerElement = element;
  };

  setPopoverElement = (element) => {
    this.popoverElement = element;
  };

  getPopoverContent = () => {
    const { content } = this.props;
    if (typeof content === 'function') {
      return content();
    } else {
      return content;
    }
  };

  render() {
    const { props, state } = this;

    let popover = null;
    if (state.visible) {
      // Only send focus inside if we've clicked to open
      const receiveFocus =
        props.receiveFocus && state.activeTriggerType === TRIGGER_CLICK;
      const trapFocus =
        props.trapFocus && state.activeTriggerType === TRIGGER_CLICK;

      popover = (
        <Popover
          onExit={this.hide}
          {...props.popoverProps}
          getAnchorElement={this.getAnchorElement}
          ignoreClickWithinElement={this.ignoreClickWithinElement}
          receiveFocus={receiveFocus}
          trapFocus={trapFocus}
          onElement={this.setPopoverElement}
        >
          {this.getPopoverContent()}
        </Popover>
      );
    }

    // Tooltips need to the popover content to be present in the DOM
    // with the appropriate id, so aria-labelledby will work
    let hiddenContent = null;
    if (!state.visible && props.renderHiddenContent) {
      hiddenContent = (
        <div
          className="hide-visually"
          {...(this.props.popoverProps.passthroughProps || {})}
        >
          {this.getPopoverContent()}
        </div>
      );
    }

    const classes = classnames({
      block: props.block,
      'inline-block': !props.block
    });

    return (
      <div
        ref={this.setTriggerElement}
        className={classes}
        {...props.passthroughTriggerProps}
        onClick={this.onAnyClick}
        onFocus={this.onTriggerFocus}
        onBlur={this.onTriggerBlur}
        onKeyDown={this.onTriggerKeyDown}
      >
        {props.children}
        {hiddenContent}
        {popover}
      </div>
    );
  }
}

PopoverTrigger.propTypes = {
  /**
   * The trigger content. This can either be a string or valid JSX.
   */
  children: PropTypes.node.isRequired,
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout.
   */
  block: PropTypes.bool,
  /**
   * The popover content. This can either be a string, valid JSX, or a function
   * returning either.
   */
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /**
   * **You will not need to use this.** This prop is used by
   * [Tooltip](#tooltip) for improved accessbility.
   *
   * If `true`, the popover will always be rendered *but it will be visually
   * hidden when inactive*.
   *
   * By default, the popover is added to and removed from the DOM dynamically.
   */
  renderHiddenContent: PropTypes.bool,
  /**
   * Whether or not the popover receives focus when it opens.
   *
   * This will *only* happen if the trigger is opened with a click.
   */
  receiveFocus: PropTypes.bool,
  /**
   * Whether or not the popover receives *and traps* focus when it opens.
   *
   * This will *only* happen if the trigger is opened with a click.
   */
  trapFocus: PropTypes.bool,
  /**
   * Whether or not the trigger responds to clicks.
   *
   * **Warning**: You probably don't want to use `respondsToClick` and
   * `receivesFocus` *and* `respondsToFocus` all together, because they can
   * have clashing interactions. For example, when the popover that trapped
   * focus closes, it returns focus to the trigger, which then causes the
   * popover to open again.
   */
  respondsToClick: PropTypes.bool,
  /**
   * Whether or not the trigger responds to `mouseenter` and `mouseleave` events.
   */
  respondsToHover: PropTypes.bool,
  /**
   * Whether or not the trigger responds to `focus` and `blur` events.
   */
  respondsToFocus: PropTypes.bool,
  /**
   * Whether or not the trigger is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Props to pass directly to the [Popover](#popover) component. See Popover's
   * documentation for details.
   */
  popoverProps: PropTypes.object,
  /**
   * Props to pass directly to the `<div>` that will wrap your trigger content.
   */
  passthroughTriggerProps: PropTypes.object,
  /**
   * Callback that is invoked when the popover opens.
   */
  onPopoverOpen: PropTypes.func,
  /**
   * Callback that is invoked when the popover closes.
   */
  onPopoverClose: PropTypes.func
};

PopoverTrigger.defaultProps = {
  block: false,
  disabled: false,
  renderHiddenContent: false,
  receiveFocus: true,
  trapFocus: false,
  respondsToClick: true,
  respondsToHover: false,
  respondsToFocus: false,
  popoverProps: {}
};
