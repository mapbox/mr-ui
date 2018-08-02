import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import xtend from 'xtend';
import omit from '../utils/omit';

const SIZE_SMALL = 'small';
const SIZE_MEDIUM = 'medium';
const SIZE_LARGE = 'large';
const WIDTH_SMALL = 'small';
const WIDTH_MEDIUM = 'medium';
const WIDTH_LARGE = 'large';
const WIDTH_FULL = 'full';

// This list must be kept in sync with the propTypes.
// It's used to identify additional props that should be passed directly
// to the element.
const propNames = [
  'block',
  'children',
  'color',
  'component',
  'corners',
  'href',
  'onClick',
  'outline',
  'size',
  'transformClasses',
  'width'
];

/**
 * A good-looking button!
 *
 * The rendered element will be a `<button>` or an `<a>`, depending on whether
 * you provide an `href` prop or not. (You can also use the `component` prop to
 * render a different element altogether.)
 *
 * If you'd like to put an icon before or after the text of your button,
 * use [MbxIconText](#mbxicontext) for the content.
 */
class MbxButton extends React.Component {
  render() {
    const { props } = this;

    const sizeSmall = props.size === SIZE_SMALL;
    const sizeMedium = props.size === SIZE_MEDIUM;
    const sizeLarge = props.size === SIZE_LARGE;
    const widthFull = props.width === WIDTH_FULL;
    const widthSmall = props.width === WIDTH_SMALL;
    const widthMedium = props.width === WIDTH_MEDIUM;
    const widthLarge = props.width === WIDTH_LARGE;

    const classes = classnames('btn', {
      [`btn--${props.color}`]: props.color,
      'btn--stroke': props.outline,
      'btn--stroke--2': props.outline && !sizeSmall,
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
        className: props.transformClasses(classes),
        onClick: props.onClick,
        children: props.children
      },
      omit(props, propNames)
    );

    if (props.component) {
      return React.createElement(props.component, universalProps);
    }

    if (props.href) {
      return <a href={props.href} {...universalProps} />;
    }

    return <button type="button" {...universalProps} />;
  }
}

MbxButton.propTypes = {
  /**
   * The button's content. A string is recommended, but you can put an element
   * in here if you think that's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s. ([MbxIconText](#mbxicontext) is
   * inline-level.)
   */
  children: PropTypes.node.isRequired,
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
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The width of the button: `"small"`, `"medium"`, `"large"`, or `"full"`.
   *
   * This is distinguished from `size` because buttons
   * of the same general size can vary by width.
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
   */
  block: PropTypes.bool,
  /**
   * A callback for transforming the class list. Receives the standard class
   * list (based on your other props) as an argument; it must return
   * the transformed class list.
   */
  transformClasses: PropTypes.func,
  /**
   * An alternate component to render in the style of a button. If the value is
   * a string, it must refer to a DOM element, like `"div"`. Otherwise, it
   * can be a React component.
   */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

MbxButton.defaultProps = {
  block: false,
  color: 'blue',
  corners: false,
  outline: false,
  size: 'large',
  transformClasses: x => x,
  width: 'medium'
};

export default MbxButton;
