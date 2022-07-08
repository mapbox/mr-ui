import React, { ReactElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { getTheme } from '../utils/styles';
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface Props {
  children: React.ReactNode;
  content: ReactElement | string | (() => ReactElement);
  placement?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'center' | 'start' | 'end';
  coloring?: 'light' | 'dark' | 'warning' | 'error';
  padding?: 'small' | 'none';
  textSize?: 'xs' | 's' | 'none';
  maxWidth?: 'small' | 'medium' | 'none';
  disabled?: boolean;
  ariaLabel?: string;
  testId?: string;
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
  textSize = 's',
  maxWidth = 'medium',
  content = null,
  children = null,
  ariaLabel = null,
  testId = null
}: Props): ReactElement {
  if (!children) return null;

  const { background, borderColor, color, fill } = getTheme(coloring);

  const bodyClasses = classnames(
    `${background} ${borderColor} ${color} border shadow-darken25 round`, {
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

  if (disabled) {
    return (
      <span tabIndex={0}>
        {children}
      </span>
    )
  }

  return (
    <TooltipPrimitive.Root delayDuration={150}>
      <TooltipPrimitive.Trigger>
      {children}
      </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          aria-label={ariaLabel}
          side={placement}
          align={alignment}
          sideOffset={6}
          className={bodyClasses}
          data-testid={testId}
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
   * `'center'`, `'start'`, `'end'` Alignment of the tooltip's edge in relation to the trigger element.
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
   * Added as `data-test` to the tooltip element.
   */
  testId: PropTypes.string,
  /**
   * Optionally provide a description of the tooltip content. By default, 
   * screenreaders will announce the content inside the component.
   */
  ariaLabel: PropTypes.string
};
