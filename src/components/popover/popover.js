import React from 'react';
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
 * If there's a trigger that opens and closes the popover, you should consider
 * using PopoverTrigger, instead, which internally manages the Popover.
 *
 * If you are using this component directly, you need to manage its open-closed
 * state. Use `onExit` to do that.
 */
export default class Popover extends React.Component {
  static propTypes = {
    /** A function that returns the DOM node to which this Popover should be anchored. `placement` and `alignment` values are related to this anchor. */
    getAnchorElement: PropTypes.func.isRequired,
    /** The content of the popover. */
    children: PropTypes.node.isRequired,
    /** Preferred placement of the popover in relation to the anchor. Adjusted according to available space. */
    placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /** Alignment of the popover relative to the side of the anchor on which it's placed. If `placement` is `left` or `right`, meaningful `alignment` values are `top`, `bottom`, and `center`. If `placement` is `top` or `bottom`, meaningful `alignment` values are `left`, `right`, and `center`. Adjusted according to available space. */
    alignment: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'center']),
    /** Background color of the popover. */
    backgroundColor: PropTypes.string,
    /** Pass custom classes to style the popover container. */
    themePopover: PropTypes.string,
    /** Whether or not the popover has a triangle pointer. */
    hasPointer: PropTypes.bool,
    /** If `true`, the popover will hide when its anchor is scroll offscreen. By default, the popover will follow its anchor. If the anchor is within an internally scrolling area, you may want to use `true`. */
    hideWhenAnchorIsOffscreen: PropTypes.bool,
    /** If `false`, the popover is not allowed to change axes on the anchor when modifying its position to fit available space. By default, popovers on the `left` and `right`, for example, might change to `bottom` is there is neither space on the left nor the right. */
    allowPlacementAxisChange: PropTypes.bool,
    /** If `false`, the tooltip is allowed to leave the viewport. By default, it will stick to the edge of the viewport as its anchor scrolls out of sight. */
    containWithinViewport: PropTypes.bool,
    /** If `false`, clicking outside the popver will not close it. By default, it does. */
    clickOutsideCloses: PropTypes.bool,
    /** If `false`, hitting Escape will not close the popover. By default, it does. */
    escapeCloses: PropTypes.bool,
    /** If `true`, the popover will not receive focus when it opens. By default, it does. */
    receiveFocus: PropTypes.bool,
    /** If `true`, the popover will receive *and trap* focus when it opens. */
    trapFocus: PropTypes.bool,
    /** A title for the popover that will be legible for screen readers. *You should use this.* It's optional, though, because Tooltip does not need it, but attains accessibility by other means. */
    accessibleTitle: PropTypes.string,
    /** A function called when popover is dismissed. You need to use this callback to remove the Popover from the rendered page. */
    onExit: PropTypes.func,
    /** A function to call as soon as popover element is rendered. Returns the DOM node of the popover body.  */
    onElement: PropTypes.func,
    /** A function that returns a DOM node. Use to specify which element is focused when popover is first rendered. */
    getInitialFocus: PropTypes.func,
    /** A function called when an element within the popover is clicked. */
    ignoreClickWithinElement: PropTypes.func,
    /** A function that returns a DOM node that should contain the popover within it. The popover's position will be calculated relative to this container, rather than the viewport. */
    getContainingElement: PropTypes.func,
    /** See options for calculatePopoverPosition. */
    offsetFromAnchor: PropTypes.number,
    /** Attributes to pass to the `<div>` that will wrap your popover content. */
    contentElementAttributes: PropTypes.object
  };

  static defaultProps = {
    placement: 'right',
    alignment: 'top',
    backgroundColor: '#fff',
    themePopover: 'round py6 px12 shadow-darken25',
    hasPointer: true,
    hideWhenAnchorIsOffscreen: false,
    allowPlacementAxisChange: true,
    containWithinViewport: true,
    clickOutsideCloses: true,
    escapeCloses: true,
    receiveFocus: true,
    trapFocus: false
  };

  static repositionPopovers = PopoverPositioner.recalculatePositions;

  constructor(props) {
    super(props);
    popoverCounter += 1;
    this.popoverId = popoverCounter;
  }

  componentWillMount() {
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
    this.hackListenerRemovers.forEach(r => r());
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

  onDocumentMousedown = event => {
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

  onBodyKeyDown = event => {
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

  elementIsWithinChildPopover = element => {
    const elementPopoverId = element.getAttribute('data-popover-id');
    if (elementPopoverId) {
      return Number(elementPopoverId) > this.popoverId;
    } else if (element.parentElement && element.parentElement !== document) {
      return this.elementIsWithinChildPopover(element.parentElement);
    }
    return false;
  };

  setPopoverElement = element => {
    this.bodyElement = element;
    if (this.props.onElement) this.props.onElement(element);
  };

  render() {
    return (
      <PopoverPositioner
        getAnchorElement={this.props.getAnchorElement}
        hasPointer={this.props.hasPointer}
        placement={this.props.placement}
        alignment={this.props.alignment}
        pointerColor={this.props.backgroundColor}
        hideWhenAnchorIsOffscreen={this.props.hideWhenAnchorIsOffscreen}
        allowPlacementAxisChange={this.props.allowPlacementAxisChange}
        containWithinViewport={this.props.containWithinViewport}
        getContainingElement={this.props.getContainingElement}
        offsetFromAnchor={this.props.offsetFromAnchor}
        onElement={this.setPopoverElement}
      >
        <div
          key="body"
          style={{ backgroundColor: this.props.backgroundColor }}
          className={this.props.themePopover}
          onKeyDown={this.onBodyKeyDown}
          onFocus={this.onBodyFocus}
          data-popover-id={this.popoverId}
          tabIndex={-1}
          aria-label={this.props.accessibleTitle}
          role="dialog"
          {...this.props.contentElementAttributes}
        >
          {this.props.children}
        </div>
      </PopoverPositioner>
    );
  }
}

function noop() {}
