import React, { ReactElement, ReactNode, forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { getTheme } from '../utils/styles';

interface Props {
  children: ReactNode;
  content: ReactNode;
  active: boolean;
  padding?: 'medium' | 'small' | 'none';
  coloring?: 'light' | 'dark' | 'warning' | 'error';
  placement?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'center' | 'start' | 'end';
  hasPointer?: boolean;
  offsetFromAnchor?: number;
  passthroughProps?: {
    [key: string]: string | number | boolean;
  };
  onExit?: () => void;
  getInitialFocus?: () => void;
  clickOutsideCloses?: boolean;
  escapeCloses?: boolean;
  hideWhenAnchorIsOffscreen?: boolean;
  allowPlacementAxisChange?: boolean;
};

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
  hideWhenAnchorIsOffscreen = false,
  allowPlacementAxisChange = true,
  clickOutsideCloses = true,
  escapeCloses = true,
  getInitialFocus,
  offsetFromAnchor,
  passthroughProps,
  onExit,
  children,
  content
}: Props): ReactElement {
  const { background, borderColor, color, fill } = getTheme(coloring);

  const bodyClasses = classnames(
    `${background} ${borderColor} ${color} border shadow-darken25 round`,
    {
      'px12 py12': padding === 'medium',
      'px12 py6': padding === 'small',
      [`border border-1 border--${borderColor}`]: borderColor
    }
  );

  const Anchor = forwardRef<HTMLButtonElement>((props, ref) => {
    return (
      <PopoverPrimitive.Anchor asChild>
        <span {...props} ref={ref}>
          {children}
        </span>
      </PopoverPrimitive.Anchor>
    );
  });

  const getContent = () => {
    if (typeof content === 'function') {
      return content();
    }

    return content;
  }

  return (
    <PopoverPrimitive.Root open={active}>
      <PopoverPrimitive.Content
        sideOffset={6} 
        className={bodyClasses}
        onEscapeKeyDown={escapeCloses && onExit}
        onPointerDownOutside={clickOutsideCloses && onExit}
        onOpenAutoFocus={getInitialFocus}
        align={alignment}
        alignOffset={offsetFromAnchor}
        side={placement}
        hideWhenDetached={hideWhenAnchorIsOffscreen}
        avoidCollisions={allowPlacementAxisChange}
        {...passthroughProps}
      >
        {getContent()}
        {hasPointer && <PopoverPrimitive.Arrow width={6} height={6} fill={fill} />}
      </PopoverPrimitive.Content>
      <Anchor />
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
   * Alignment of the popover relative to the side of the anchor on which
   * it's placed. If `placement` is `left` or `right`, meaningful `alignment`
   * values are `top`, `bottom`, and `center`. If `placement` is `top` or
   * `bottom`, meaningful `alignment` values are `left`, `right`, and `center`.
   * Adjusted according to available space.
   */
  alignment: PropTypes.oneOf(['center', 'start', 'end']),
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
   * Props to pass directly to the `<div>` that will wrap your popover content.
   */
  passthroughProps: PropTypes.object,
};