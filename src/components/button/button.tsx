import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'appPrimary' | 'appSecondary';
type Width = 'small' | 'medium' | 'large' | 'full';
type Size = 'small' | 'medium' | 'large';

/**
 * Button properties.
 */
interface Props {
  /**
   * The button's content. A string is recommended, but you can put an element
   * in here if you think that's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s. ([IconText](#icontext) is
   * inline-level.)
   */
  children: ReactNode;
  /**
   * A keyword identifying the standard button styling variant to use.
   *
   * *The variant is a starting point*: all of the other styling props can be
   * used to override details.
   *
   * The following variants are available:
   *
   * - `"primary"`: For primary actions.
   * - `"secondary"`: For secondary actions.
   * - `"tertiary"`: For downplayed actions, the ones people shouldn't
   *   usually want to perform, like cancelling instead of confirming.
   * - `"destructive"`: For destructive actions, like deleting something.
   * - `"appPrimary"`: For primary actions in dense apps.
   * - `"appSecondary"`: For secondary actions in dense apps.
   */
  variant?: Variant;
  /**
   * The Assembly color of the button.
   */
  color?: string;
  /**
   * If `true`, the button will be outlined instead of filled with color.
   */
  outline?: boolean;
  /**
   * If `true`, the button will have (slightly rounded) corners instead of
   * the full curve they have by default.
   */
  corners?: boolean;
  /**
   * Is it disabled?
   */
  disabled?: boolean;
  /**
   * If `true`, the element will be `block` displayed instead of `inline-block`.
   *
   * This is sometimes necessary to get your pixel-perfect layout, if you don't
   * want the extra line-height that wraps inline elements. Typically, you
   * should only set `block` to `true` if the parent element is controlling
   * width (in a layout that uses flexbox, absolute positioning, or floats).
   */
  block?: boolean;
  onClick?: () => void;
  href?: string;
  /**
   * The size of the button: `"small"`, `"medium"`, or `"large"`.
   *
   * This accounts for height, outline thickness, text size, and other details.
   *
   * This will override whichever defaults are set by your `variant` of choice.
   */
  size?: Size;
  /**
   * The width of the button: `"small"`, `"medium"`, `"large"`, or `"full"`.
   * For every option but `"full"` this prop determines horizontal padding.
   * `"full"` sets the button to fill the width of its container.
   *
   * This is distinguished from `size` because buttons of the same general size
   * can vary by width.
   *
   * This will override whichever defaults are set by your `variant` of choice.
   */
  width?: Width;
  /**
   * By default, screenreaders will announce the variant value. If this is not
   * descriptive enough, use aria-label for a more descriptive label.
   */
  ariaLabel?: string;
  /**
   * An object of props that you want to pass through to the element that
   * Button renders. This can be useful if you want to disable
   * the button, assign an ID for testing, add an ARIA attribute, toss in some
   * custom style properties, etc.
   */
  passthroughProps?: {
    [key: string]: string | number | boolean;
  }
}

function getSize(variant: Variant): Size {
  switch (variant) {
    case 'appPrimary':
    case 'appSecondary':
      return 'small';
    default:
      return 'large';
  }
}

function getWidth(variant: Variant): Width {
  switch (variant) {
    case 'appPrimary':
    case 'appSecondary':
      return 'small';
    default:
      return 'medium';
  }
}

function getCorners(variant: Variant): boolean {
  switch (variant) {
    case 'appPrimary':
    case 'appSecondary':
      return true;
    default:
      return false;
  }
}

function getOutline(variant: Variant): boolean {
  switch (variant) {
    case 'secondary':
    case 'appSecondary':
      return true;
    default:
      return false;
  }
}

function getColor(variant: Variant): string {
  switch (variant) {
    case 'secondary':
    case 'appPrimary':
    case 'appSecondary':
      return 'gray'
    case 'tertiary':
      return 'transparent';
    case 'destructive':
      return 'red';
    default:
      return 'blue';
  }
}

/**
 * A good-looking button!
 *
 * The rendered element will be a `<button>` or an `<a>`, depending on whether
 * you provide an `href` prop or not. (You can also use the `component` prop to
 * render a different element altogether.)
 *
 * If you'd like to put an icon before or after the text of your button,
 * use [IconText](#icontext) for the content.
 */
export default function Button({
  variant = 'primary',
  ariaLabel,
  size = getSize(variant),
  width = getWidth(variant),
  color = getColor(variant),
  outline = getOutline(variant),
  corners = getCorners(variant),
  block = false,
  disabled = false,
  onClick,
  passthroughProps,
  href,
  children
}: Props): ReactElement {

  const isSmall: boolean = size === 'small';
  const isMedium: boolean = size === 'medium';
  const isLarge: boolean = size === 'large';

  const widthSmall = width === 'small';
  const widthMedium = width === 'medium';
  const widthLarge = width === 'large';

  const classes = classnames('btn', {
    [`btn--${color}`]: color,
    'btn--stroke': outline,
    'link link--gray transition': variant === 'tertiary',
    round: corners,
    'round-full': !corners,
    h24: isSmall,
    py12: isLarge,
    py6: isMedium,
    px6: widthSmall && isSmall,
    px12: (widthMedium && isSmall) || (widthSmall && !isSmall),
    px24: (widthLarge && isSmall) || (widthMedium && !isSmall),
    px36: !isSmall && widthLarge,
    'w-full block': width === 'full',
    block,
    'txt-s': !isSmall,
    'py3 txt-xs': isSmall
  });

  const universalProps = {
    className: classes,
    'aria-label': ariaLabel ? ariaLabel : variant,
    onClick,
    ...passthroughProps
  };

  if (href) {
    return (
      <a href={href} {...universalProps}>
        {children}
      </a>
    );
  }

  // "disabled" is not a valid attributes for anchors.
  const buttonProps = {
    ...universalProps,
    children,
    disabled
  };

  return (
    <button type="button" {...buttonProps} />
  );
}
