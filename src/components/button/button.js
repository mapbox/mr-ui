import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import xtend from 'xtend';

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
class Button extends React.Component {
  render() {
    const props = applyVariant(this.props);

    const sizeSmall = props.size === 'small';
    const sizeMedium = props.size === 'medium';
    const sizeLarge = props.size === 'large';
    const widthFull = props.width === 'full';
    const widthSmall = props.width === 'small';
    const widthMedium = props.width === 'medium';
    const widthLarge = props.width === 'large';

    const classes = classnames('btn', {
      [`btn--${props.color}`]: props.color,
      'btn--stroke': props.outline,
      round: props.corners,
      'round-full': !props.corners,
      h24: sizeSmall,
      py12: sizeLarge,
      py6: sizeMedium,
      px6: widthSmall && sizeSmall,
      px12: (widthMedium && sizeSmall) || (widthSmall && !sizeSmall),
      px24: (widthLarge && sizeSmall) || (widthMedium && !sizeSmall),
      px36: !sizeSmall && widthLarge,
      'w-full block': widthFull,
      block: props.block,
      'txt-s': !sizeSmall,
      'py3 txt-xs': sizeSmall
    });

    const universalProps = xtend(
      {
        className: classes,
        onClick: props.onClick,
        children: props.children
      },
      props.passthroughProps
    );

    // "disabled" is not a valid attributes for anchors.
    const buttonProps = xtend(universalProps, { disabled: props.disabled });

    if (props.component) {
      return React.createElement(props.component, buttonProps);
    }

    if (props.href) {
      return <a href={props.href} {...universalProps} />;
    }

    return <button type="button" {...buttonProps} />;
  }
}

const defaults = {
  color: 'blue',
  corners: false,
  outline: false,
  size: 'large',
  width: 'medium'
};
function applyVariant(props) {
  switch (props.variant) {
    case 'primary':
      return xtend(defaults, props);
    case 'secondary':
      return xtend(
        defaults,
        {
          outline: true
        },
        props
      );
    case 'discouraging':
      return xtend(
        defaults,
        {
          color: 'gray',
          outline: true
        },
        props
      );
    case 'destructive':
      return xtend(
        defaults,
        {
          color: 'red'
        },
        props
      );
    case 'appPrimary':
      return xtend(
        defaults,
        {
          color: 'gray',
          size: 'small',
          width: 'small',
          corners: true
        },
        props
      );
    case 'appSecondary':
      return xtend(
        defaults,
        {
          color: 'gray',
          size: 'small',
          width: 'small',
          corners: true,
          outline: true
        },
        props
      );
  }
}

Button.propTypes = {
  /**
   * The button's content. A string is recommended, but you can put an element
   * in here if you think that's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s. ([IconText](#icontext) is
   * inline-level.)
   */
  children: PropTypes.node.isRequired,
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
   * - `"discouraging"`: For downplayed actions, the ones people shouldn't
   *   usually want to perform, like cancelling instead of confirming.
   * - `"destructive"`: For destructive actions, like deleting something.
   * - `"appPrimary"`: For primary actions in dense apps.
   * - `"appSecondary"`: For secondary actions in dense apps.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'discouraging',
    'destructive',
    'appPrimary',
    'appSecondary'
  ]),
  /**
   * A callback that receives the click event.
   *
   * You definitely need this if you don't use `href`; but you can also provide
   * both `onClick` and `href`, and `onClick` will be called when the `<a>` is
   * clicked.
   */
  onClick: PropTypes.func,
  /**
   * A URL. If `href` is provided, the button will be an `<a>`.
   */
  href: PropTypes.string,
  /**
   * The size of the button: `"small"`, `"medium"`, or `"large"`.
   *
   * This accounts for height, outline thickness, text size, and other details.
   *
   * This will override whichever defaults are set by your `variant` of choice.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  width: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  /**
   * If `true`, the button will be outlined instead of filled with color.
   */
  outline: PropTypes.bool,
  /**
   * The Assembly color of the button.
   */
  color: PropTypes.string,
  /**
   * If `true`, the button will have (slightly rounded) corners instead of
   * the full curve they have by default.
   */
  corners: PropTypes.bool,
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
   * Is it disabled?
   */
  disabled: PropTypes.bool,
  /**
   * An alternate component to render in the style of a button. If the value is
   * a string, it must refer to a DOM element, like `"div"`. Otherwise, it
   * can be a React component.
   */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * An object of props that you want to pass through to the element that
   * Button renders. This can be useful if you want to disable
   * the button, assign an ID for testing, add an ARIA attribute, toss in some
   * custom style properties, etc.
   */
  passthroughProps: PropTypes.object
};

Button.defaultProps = {
  variant: 'primary',
  block: false,
  disabled: false
};

export default Button;
