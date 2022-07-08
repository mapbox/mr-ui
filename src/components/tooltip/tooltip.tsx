import React, { ReactElement, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getTheme } from '../utils/styles';
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

console.log('TooltipPrimitive', TooltipPrimitive);

interface Props {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'center' | 'start' | 'end';
  coloring?: 'light' | 'dark' | 'warning' | 'error';
  padding?: 'small' | 'none';
  textSize?: 'xs' | 's' | 'none';
  maxWidth?: 'small' | 'medium' | 'none';
  disabled?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  content?: ReactElement | string | (() => ReactElement);
}

/**
 * Wrap a trigger element so that when it is hovered or focused a tooltip
 * appears.
 */

export default function Tooltip({
  placement = 'top',
  alignment = 'center',
  coloring = 'light',
  disabled = false,
  padding = 'small',
  block = false,
  textSize = 's',
  maxWidth = 'medium',
  content = null,
  children = null
}: Props): ReactElement {
  if (!children) return null;

  const { background, borderColor, color, fill } = getTheme(coloring);

  const bodyClasses = classnames(
    `${background} ${borderColor} ${color} shadow-darken25 round`, {
    'txt-s': textSize === 's',
    'txt-xs': textSize === 'xs',
    'px12 py6': padding === 'small',
    wmax120: maxWidth === 'small',
    wmax240: maxWidth === 'medium'
  });

  const getContent = () => {
    if (typeof content === 'function') {
      return content();
    } else {
      return content;
    }
  }

  return (
    <TooltipPrimitive.Root delayDuration={150}>
      <TooltipPrimitive.Trigger>
      {children}
      </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side={placement}
          align={alignment}
          sideOffset={6}
          className={bodyClasses}
        >
            {getContent()}
          <TooltipPrimitive.Arrow offset={6} fill={fill} />
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}

Tooltip.propTypes = {
  /**
   * The trigger element.
   *
   * If your element is a DOM element
   * (e.g. `<button>`, `<a>`, `<span>`, `<div>`),
   * you can pass it directly and it will have accessibility-related props
   * automatically added to it.
   *
   * If your element is a custom React component, you need to provide a
   * function as the child. The function will be invoked with a `triggerProps`
   * object, and you need to apply those `triggerProps` in such a way that
   * they end up on the DOM element of the trigger.
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * The tooltip content. This can either be a string, valid JSX, or a function
   * returning either.
   */
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /**
   * Placement of the tooltip in relation to the trigger element.
   */
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Alignment of the tooltip's edge in relation to the trigger element.
   */
  alignment: PropTypes.oneOf(['center', 'start', 'end']),
  /**
   * If `true`, the tooltip will not appear.
   */
  disabled: PropTypes.bool,
  /**
   * `'light'`, `'dark'`, `'warning'`, or `'error'`.
   */
  coloring: PropTypes.oneOf(['light', 'dark', 'warning', 'error']),
  /**
   * `'xs'` (extra small), `'s'` (small), or `'none'` (no size class).
   */
  textSize: PropTypes.oneOf(['xs', 's', 'none']),
  /**
   * `'small'`, `'medium'`, or `'none'` (no `wmax*` class).
   */
  maxWidth: PropTypes.oneOf(['small', 'medium', 'none']),
  /**
   * `'small'` or `'none'`.
   */
  padding: PropTypes.oneOf(['small', 'none']),
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
   * Added as `data-test` to the tooltip element.
   */
  testId: PropTypes.string
};
