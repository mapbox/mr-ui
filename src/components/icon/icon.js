import React from 'react';
import PropTypes from 'prop-types';
import getWindow from '../utils/get-window';
import shallowEqualObjects from '../utils/shallow-equal-objects';

/**
 * Display an Assembly icon.
 *
 * Besides providing a convenient shortcut, this component does the following:
 *
 * - Sets some accessibility props.
 * - Provides an `inline` mode that automatically sizes icons to match their
 *   surrounding text.
 */
export default class Icon extends React.Component {
  componentDidMount() {
    this.setHeight();
  }

  shouldComponentUpdate(nextProps) {
    return !shallowEqualObjects(this.props, nextProps, ['passthroughProps']);
  }

  componentDidUpdate() {
    this.setHeight();
  }

  setHeight() {
    if (this.props.inline && this.iconElement) {
      const lineHeight = getWindow().getComputedStyle(this.iconElement)[
        'line-height'
      ];
      this.iconElement.style.height = lineHeight;
    }
  }

  setIconElement = (element) => {
    this.iconElement = element;
  };

  render() {
    const { props } = this;

    let iconClasses = 'events-none icon';
    if (props.inline) {
      iconClasses += ' inline-block align-t';
    }

    const svgStyle = props.passthroughProps.style || {};
    if (!svgStyle.width && props.size) {
      svgStyle.width = props.size;
    }
    if (!svgStyle.height && props.size) {
      svgStyle.height = props.size;
    }

    const iconContent = (
      <svg
        ref={this.setIconElement}
        role="presentation"
        focusable="false"
        className={iconClasses}
        {...props.passthroughProps}
        style={svgStyle}
      >
        <use
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={`#icon-${props.name}`}
        />
      </svg>
    );

    return iconContent;
  }
}

Icon.propTypes = {
  /**
   * The name of the [Assembly icon](https://labs.mapbox.com/assembly/icons/) that
   * you want to display.
   */
  name: PropTypes.string.isRequired,
  /**
   * The width and height of the icon. All icons fill up a square space,
   * so this value will be applied to both width and height.
   *
   * If `inline: true`, the technical height will be controlled by the
   * line-height of the container, but the appearance of the icon will still
   * be in accordance with your `size` value (because it's limited by the
   * width).
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If `true`, the icon will be adjusted after mounting so that its height
   * matches the line-height of its container. The result of this is that
   * the icon will not displace the text's established line-height and
   * will be vertically centered with the text alongside it.
   *
   * This is most useful when you are inserting the icon within multiline text,
   * so you can't use a flexbox layout to vertically center the icon and text.
   *
   * Be aware that there are edge cases that can cause problems with this
   * setting. For example, it won't work well if you don't have a `line-height`
   * set to a pixel value, or if there are dynamic adjustments to the
   * line-height.
   */
  inline: PropTypes.bool,
  /**
   * Props to pass directly to the `<svg>` element.
   */
  passthroughProps: PropTypes.object
};

Icon.defaultProps = {
  inline: false,
  passthroughProps: {},
  size: 18
};
