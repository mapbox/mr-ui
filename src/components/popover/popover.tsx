import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { getTheme } from '../utils/styles';

let popoverCounter = 0; // Incremented on creation

 // onExit, getInitialFocus, padding, receiveFocus, themePopover


interface Props {
  children: ReactNode;
  padding?: 'medium' | 'small' | 'none';
  coloring?: 'light' | 'dark' | 'warning' | 'error';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  hasPointer?: boolean;
  offsetFromAnchor?: number;
  clickOutsideCloses?: boolean;
  passthroughProps?: {
    [key: string]: string | number | boolean;
  };
  onExit?: () => void;
  getInitialFocus?: () => void;
  receiveFocus?: boolean;


  hideWhenAnchorIsOffscreen?: boolean;
  allowPlacementAxisChange?: boolean;
  containWithinViewport?: boolean;
  escapeCloses?: boolean;
  trapFocus?: boolean;
  onElement?: (el: HTMLElement) => void;
  ignoreClickWithinElement?: (el: HTMLElement) => void;
  getContainingElement?: (el: HTMLElement) => void;
  zIndex?: number;
  observeSize?: boolean
};

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
 *
 * If `ResizeObserver` is available in the user's browser, the popover will
 * automatically reposition itself when the content is resized. This can be disabled
 * in the `observeSize` prop.
 */
export default function Popover({
  coloring = 'light',
  placement = 'right',
  alignment = 'top',
  padding = 'medium',
  hasPointer = true,
  hideWhenAnchorIsOffscreen = false,
  allowPlacementAxisChange = true,
  containWithinViewport = true,
  clickOutsideCloses = true,
  escapeCloses = true,
  receiveFocus = true,
  trapFocus = false,
  zIndex = 1,
  observeSize = true
}: Props): ReactElement {
  const { background, borderColor, color, fill } = getTheme(coloring);

  const bodyClasses = classnames(
    `${color} shadow-darken25 round`,
    {
      'px12 py12': padding === 'medium',
      'px12 py6': padding === 'small',
      [`border border-1 border--${borderColor}`]: borderColor
    }
  );

  return (
    <>
    </>
  );
}

export function PopoverAnchor({ children }) {
  return (
    <>
      {children}
    </>
  );
}

Popover.propTypes = {
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
  zIndex: PropTypes.number,
  /**
   * If `true` and `ResizeObserver` is available in the user's browser,
   * the popover will automatically reposition itself when the content is resized.
   */
  observeSize: PropTypes.bool
};
