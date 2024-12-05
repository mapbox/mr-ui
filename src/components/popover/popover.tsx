import React, { ReactElement, ReactNode, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import querySelectorContainsNode from '@mapbox/query-selector-contains-node';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { getTheme } from '../utils/styles';

interface Props {
  children: ReactElement;
  content: ReactNode;
  active: boolean;
  padding?: 'medium' | 'small' | 'none';
  coloring?: 'light' | 'dark' | 'warning' | 'error';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'center' | 'start' | 'end';
  zIndex?: number | string;
  hasPointer?: boolean;
  offsetFromAnchor?: number;
  passthroughProps?: {
    [key: string]: string | number | boolean;
  };
  onExit?: () => void;
  getInitialFocus?: (e: Event) => void;
  clickOutsideCloses?: boolean;
  escapeCloses?: boolean;
  hideWhenAnchorIsOffscreen?: boolean;
  allowPlacementAxisChange?: boolean;
}

/**
 * Display a popover. The popover is positioned relative to an anchor element
 */
export default function Popover({
  coloring = 'light',
  placement = 'right',
  alignment = 'center',
  padding = 'medium',
  active = false,
  hasPointer = true,
  zIndex = 'auto',
  hideWhenAnchorIsOffscreen = false,
  allowPlacementAxisChange = true,
  clickOutsideCloses = true,
  escapeCloses = true,
  getInitialFocus = (e) => e.preventDefault(),
  offsetFromAnchor = 6,
  passthroughProps,
  onExit,
  children,
  content
}: Props): ReactElement {
  const { background, borderColor, color, fill } = getTheme(coloring);
  const triggerRef = useRef(null);

  const bodyClasses = classnames(
    `${background} ${borderColor} ${color} border shadow-darken25 round`,
    {
      'px12 py12': padding === 'medium',
      'px12 py6': padding === 'small',
      [`border border-1 border--${borderColor}`]: borderColor
    }
  );

  const bodyStyle = {
    zIndex
  };

  const getContent = () => {
    if (typeof content === 'function') {
      return content();
    }

    return content;
  };

  const onDown = (e: Event) => {
    // Don't call onExit if it wasn't provided.
    if (!onExit) {
      return;
    }

    // If event target contains the trigger element, assume onExit is handled
    // on its own so don't re-fire it.
    if (triggerRef.current && triggerRef.current.contains(e.target)) {
      return;
    }

    // Check if the event target contains the following data attribute. If it
    // does, do not call onExit.
    if (querySelectorContainsNode('[data-popover-ignore-clicks]', e.target)) {
      return;
    }

    onExit();
  };

  return (
    <PopoverPrimitive.Root open={active}>
      <span ref={triggerRef} style={{ display: 'contents' }}>
        <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
      </span>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          sideOffset={offsetFromAnchor}
          className={bodyClasses}
          style={bodyStyle}
          onEscapeKeyDown={escapeCloses && onExit}
          onPointerDownOutside={clickOutsideCloses && onDown}
          onOpenAutoFocus={getInitialFocus}
          align={alignment}
          side={placement}
          sticky={'always'}
          hideWhenDetached={hideWhenAnchorIsOffscreen}
          avoidCollisions={allowPlacementAxisChange}
          {...passthroughProps}
        >
          {getContent()}
          {hasPointer && (
            <PopoverPrimitive.Arrow
              width={12}
              height={6}
              offset={6}
              fill={fill}
            />
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

Popover.propTypes = {
  /**
   * The trigger element.
   */
  children: PropTypes.node.isRequired,
  /**
   * Triggers the active state of the popover. When true, the popover appears.
   */
  active: PropTypes.bool.isRequired,
  /**
   * The popover content. This can either be a string, valid JSX, or a function
   * returning either.
   */
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * Preferred placement of the popover in relation to the anchor.
   * Adjusted according to available space.
   */
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * `'center'`, `'start'`, `'end'` Alignment of the popover edge in relation to the trigger element.
   */
  alignment: PropTypes.oneOf(['center', 'start', 'end']),
  /**
   * `'light'`, `'dark'`, `'warning'`, or `'error'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark', 'warning', 'error']),
  /**
   * `'medium'`, `'small'`, or `'none'`.
   */
  padding: PropTypes.oneOf(['medium', 'small', 'none'])
  /**
   * z-index of the popover.
   */,
  zIndex: PropTypes.number || PropTypes.string,
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
   * If `false`, clicking outside the popover will not close it.
   * By default, it does.
   */
  clickOutsideCloses: PropTypes.bool,
  /**
   * If `false`, hitting Escape will not close the popover. By default, it does.
   */
  escapeCloses: PropTypes.bool,
  /**
   * A function called when popover is dismissed. You need to use this callback
   * to remove the Popover from the rendered page.
   */
  onExit: PropTypes.func,
  /**
   * A function that returns a DOM node. Use to specify which element should
   * receive focus when popover is first rendered.
   */
  getInitialFocus: PropTypes.func,
  /**
   * Number of pixels by which the popover should be offset from its anchor.
   */
  offsetFromAnchor: PropTypes.number,
  /**
   * Props to pass directly to popover content options from `@radix-ui/react-popover`.
   */
  passthroughProps: PropTypes.object
};
