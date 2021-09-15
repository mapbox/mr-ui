import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import createFocusTrap from 'focus-trap';
import tabbable from 'tabbable';
import isElementScrolledIntoView from './is-element-scrolled-into-view';
import PopoverPositioner from './popover-positioner';
import querySelectorContainsNode from '@mapbox/query-selector-contains-node';

let popoverCounter = 0; // Incremented on creation

/**
 * Display a popover. The popover is positioned relative to an anchor element,
 * and the preferred position determined by props is adjusted according to the
 * available space.
 *
 * **Usually you won't need to use this low-level component.** You should have
 * a look at [Tooltip](#tooltip) and [PopoverTrigger](#popovertrigger).
 *
 * If you are using this component directly, you need to manage its open-closed
 * state. Use `onExit` to do that.
 *
 * The static function `Popover.repositionPopovers()` can be used to
 * automatically reposition *all the popovers that are currently open*. This is
 * useful if some state change other than a scroll or resize may have caused
 * the popover's anchor to move or the space available to the
 * popover to change.
 */
export default class Popover extends React.Component {
  constructor(props) {
    super(props);
    popoverCounter += 1;
    this.popoverId = popoverCounter;
  }

  UNSAFE_componentWillMount() {
    // For focus management: focus will return to this element
    // when the popover is closed
    this.previouslyFocusedElement = document.activeElement;
  }

  componentDidMount() {
    this.hackListenerRemovers = [];
    if ('ontouchstart' in document.documentElement) {
      // Prevent a full-screen flash when there's a click.
      document.documentElement.style.WebkitTapHighlightColor = 'transparent';
      const bodyChildren = document.body.childNodes;
      for (let i = 0, l = bodyChildren.length; i < l; i++) {
        const node = bodyChildren[i];
        // Hack to fix click event bubbling in iOS
        // cf. https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        // Without this, a tap in iOS outside the popover will not close it.
        node.addEventListener('mouseover', noop);
        this.hackListenerRemovers.push(() => {
          node.removeEventListener('mouseover', noop);
        });
      }
    }
    // Listen for mousedown rather than click in the case that the Popover
    // trigger is an input. This ensures that onDocumentMousedown is called
    // first and does not unintentionally remove focus from the popover.
    document.addEventListener('mousedown', this.onDocumentMousedown);
    // Delay this focus because of
    // https://github.com/mapbox/www2.mapbox.com/issues/283
    // If you go from one popover to another, we need focus to
    // hit the first popover's trigger and *then* enter this popover's body
    this.focusBodyTimer = setTimeout(() => {
      this.maybeFocusPopover();
    }, 10);
  }

  componentDidUpdate() {
    // This is necessary if, for example, you've hovered over
    // a PopoverTrigger and *then* clicked it: it's already mounted
    // but only *now* should receive focus. Logic within maybeFocusPopover
    // will prevent us from re-focusing if we've already focused.
    this.maybeFocusPopover();
  }

  componentWillUnmount() {
    this.hackListenerRemovers.forEach((r) => r());
    document.removeEventListener('mousedown', this.onDocumentMousedown);
    if (this.focusBodyTimer) clearTimeout(this.focusBodyTimer);

    if (this.focusTrap) {
      this.focusTrap.deactivate();
      const { previouslyFocusedElement } = this;
      // We must defer this call in order for a parent popover's
      // onBodyFocus method to pick up on the programmatic focus
      // https://github.com/facebook/react/issues/7835
      setTimeout(() => {
        // Only focus if it's visible, to avoid semi-mysterious scroll bouncing
        if (
          previouslyFocusedElement &&
          isElementScrolledIntoView(previouslyFocusedElement)
        ) {
          previouslyFocusedElement.focus();
        }
      }, 0);
    }
  }

  maybeFocusPopover = () => {
    if (!this.bodyElement) return;
    const { props } = this;

    if (!this.focusTrap && props.trapFocus) {
      this.focusTrap = createFocusTrap(this.bodyElement, {
        escapeDeactivates: props.escapeCloses,
        clickOutsideDeactivates: props.clickOutsideCloses,
        returnFocusOnDeactivate: false,
        initialFocus: props.getInitialFocus
          ? props.getInitialFocus()
          : undefined,
        fallbackFocus: this.bodyElement
      });
      this.focusTrap.activate();
      return;
    }

    if (!this.hasReceivedFocus && props.receiveFocus) {
      this.hasReceivedFocus = true;
      let initialFocusNode;
      if (props.getInitialFocus) {
        initialFocusNode = props.getInitialFocus();
      } else {
        const tabbableNodes = tabbable(this.bodyElement, {
          includeContainer: true
        });
        initialFocusNode = tabbableNodes[0];
      }
      if (initialFocusNode && initialFocusNode.focus) {
        initialFocusNode.focus();
      }
    }
  };

  onDocumentMousedown = (event) => {
    const { onExit } = this.props;
    if (!this.bodyElement || !onExit) return;
    if (this.bodyElement.contains(event.target)) return;
    if (this.elementIsWithinChildPopover(event.target)) return;
    if (event.button === 2) return; // Ignore right-click mouse operation
    if (querySelectorContainsNode('[data-popover-ignore-clicks]', event.target))
      return;
    if (
      this.props.ignoreClickWithinElement &&
      this.props.ignoreClickWithinElement(event.target)
    ) {
      return;
    }
    onExit();
  };

  onBodyKeyDown = (event) => {
    if (
      this.props.onExit &&
      this.props.escapeCloses &&
      event.key === 'Escape'
    ) {
      this.props.onExit();
    }
  };

  onBodyFocus = () => {
    if (!this.bodyElement) return;
    if (this.focusTrap) {
      this.focusTrap.unpause();
    }
  };

  elementIsWithinChildPopover = (element) => {
    const elementPopoverId = element.getAttribute('data-popover-id');
    if (elementPopoverId) {
      return Number(elementPopoverId) > this.popoverId;
    } else if (element.parentElement && element.parentElement !== document) {
      return this.elementIsWithinChildPopover(element.parentElement);
    }
    return false;
  };

  setPopoverElement = (element) => {
    this.bodyElement = element;
    if (this.props.onElement) this.props.onElement(element);
  };

  render() {
    const { props } = this;
    const colors = getColors(props.coloring);
    const bodyClasses = classnames(
      `${colors.textClass} shadow-darken25 round`,
      {
        'px12 py12': props.padding === 'medium',
        'px12 py6': props.padding === 'small',
        [`border border-1 border--${colors.borderColor}`]: colors.borderColor
      }
    );

    return (
      <PopoverPositioner
        getAnchorElement={props.getAnchorElement}
        hasPointer={props.hasPointer}
        placement={props.placement}
        alignment={props.alignment}
        pointerColor={colors.pointerColor || colors.background}
        hideWhenAnchorIsOffscreen={props.hideWhenAnchorIsOffscreen}
        allowPlacementAxisChange={props.allowPlacementAxisChange}
        containWithinViewport={props.containWithinViewport}
        getContainingElement={props.getContainingElement}
        offsetFromAnchor={props.offsetFromAnchor}
        onElement={this.setPopoverElement}
        zIndex={props.zIndex}
      >
        <div
          key="body"
          style={{ backgroundColor: colors.background }}
          className={bodyClasses}
          onKeyDown={this.onBodyKeyDown}
          onFocus={this.onBodyFocus}
          data-popover-id={this.popoverId}
          tabIndex={-1}
          role="dialog"
          {...props.passthroughProps}
        >
          {props.children}
        </div>
      </PopoverPositioner>
    );
  }
}

Popover.propTypes = {
  /**
   * A function that returns the DOM node to which this Popover should be
   * anchored. `placement` and `alignment` values are related to this anchor.
   */
  getAnchorElement: PropTypes.func.isRequired,
  /**
   * The content of the popover.
   */
  children: PropTypes.node.isRequired,
  /**
   * Preferred placement of the popover in relation to the anchor.
   * Adjusted according to available space.
   */
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Alignment of the popover relative to the side of the anchor on which
   * it's placed. If `placement` is `left` or `right`, meaningful `alignment`
   * values are `top`, `bottom`, and `center`. If `placement` is `top` or
   * `bottom`, meaningful `alignment` values are `left`, `right`, and `center`.
   * Adjusted according to available space.
   */
  alignment: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
  /**
   * `'light'`, `'dark'`, `'warning'`, or `'error'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark', 'warning', 'error']),
  /**
   * `'medium'`, `'small'`, or `'none'`.
   */
  padding: PropTypes.oneOf(['medium', 'small', 'none']),
  /**
   * Whether or not the popover has a triangle pointer.
   */
  hasPointer: PropTypes.bool,
  /**
   * If `true`, the popover will hide when its anchor is scrolled offscreen.
   * By default, the popover will follow its anchor wherever it goes.
   *
   * If your anchor is within an internally scrolling area, you may want to
   * use `true`, so the popover doesn't existing in a disembodied state after
   * its anchor is scrolled away.
   */
  hideWhenAnchorIsOffscreen: PropTypes.bool,
  /**
   * If `false`, the popover is *not* allowed to change axes on the anchor when
   * modifying its position to fit available space. By default, popovers on the
   * `left` and `right`, for example, might change to `bottom` is there is
   * neither space on the left nor the right.
   */
  allowPlacementAxisChange: PropTypes.bool,
  /**
   * If `false`, the tooltip is allowed to leave the viewport.
   * By default, it will stick to the edge of the viewport as its anchor
   * scrolls out of sight.
   */
  containWithinViewport: PropTypes.bool,
  /**
   * If `false`, clicking outside the popver will not close it.
   * By default, it does.
   */
  clickOutsideCloses: PropTypes.bool,
  /**
   * If `false`, hitting Escape will not close the popover. By default, it does.
   */
  escapeCloses: PropTypes.bool,
  /**
   * If `true`, the popover will not receive focus when it opens.
   */
  receiveFocus: PropTypes.bool,
  /**
   * If `true`, the popover will receive *and trap* focus when it opens.
   */
  trapFocus: PropTypes.bool,
  /**
   * A function called when popover is dismissed. You need to use this callback
   * to remove the Popover from the rendered page.
   */
  onExit: PropTypes.func,
  /**
   * A function to call as soon as popover element is rendered. Returns the DOM
   * node of the popover body.
   */
  onElement: PropTypes.func,
  /**
   * A function that returns a DOM node. Use to specify which element should
   * receive focus when popover is first rendered.
   */
  getInitialFocus: PropTypes.func,
  /**
   * A function called when an element within the popover is clicked.
   */
  ignoreClickWithinElement: PropTypes.func,
  /**
   * A function that returns a DOM node that should contain the popover within
   * it. The popover's position will be calculated relative to this container,
   * rather than the viewport.
   */
  getContainingElement: PropTypes.func,
  /**
   * Number of pixels by which the popover should be offset from its anchor.
   */
  offsetFromAnchor: PropTypes.number,
  /**
   * Props to pass directly to the `<div>` that will wrap your popover content.
   */
  passthroughProps: PropTypes.object,
  /**
   * CSS z-index number to order popover over content.
   */
  zIndex: PropTypes.number
};

Popover.defaultProps = {
  coloring: 'light',
  placement: 'right',
  alignment: 'top',
  padding: 'medium',
  hasPointer: true,
  hideWhenAnchorIsOffscreen: false,
  allowPlacementAxisChange: true,
  containWithinViewport: true,
  clickOutsideCloses: true,
  escapeCloses: true,
  receiveFocus: true,
  trapFocus: false,
  zIndex: 1
};

Popover.repositionPopovers = PopoverPositioner.recalculatePositions;

function noop() {}

function getColors(coloring) {
  if (coloring === 'dark') {
    return {
      background: '#0E2127', // gray-dark
      textClass: 'color-white'
    };
  }
  if (coloring === 'warning') {
    return {
      background: '#FEF2EB', // orange-light
      textClass: 'color-orange-deep',
      borderColor: 'orange',
      pointerColor: '#dd7a08'
    };
  }
  if (coloring === 'error') {
    return {
      background: '#FDEDE8', // red-faint
      textClass: 'color-red-deep',
      borderColor: 'red',
      pointerColor: '#EB1414'
    };
  }
  return {
    background: '#fff',
    textClass: 'color-text'
  };
}
