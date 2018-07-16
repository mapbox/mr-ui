import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';
import getWindow from '../utils/get-window';

export default class Icon extends React.PureComponent {
  // If you change propTypes, make sure to change propNames.
  static propTypes = {
    name: PropTypes.string.isRequired,
    themeIcon: PropTypes.string,
    inline: PropTypes.bool
  };
  static propNames = ['name', 'themeIcon', 'inline'];

  static defaultProps = {
    inline: false
  };

  componentDidMount() {
    if (this.props.inline && this.iconElement) {
      // Match height of icon element to line height, ensuring inlined icon
      // doesn't displace text line height, is vertically centered,
      // and wraps along with multi-line text.
      this.iconElement.style.height = getWindow().getComputedStyle(
        this.iconElement
      )['line-height'];
    }
  }

  setIconElement = element => {
    this.iconElement = element;
  };

  render() {
    const { props } = this;

    let iconClasses = 'events-none icon';
    if (props.themeIcon !== undefined) iconClasses += ` ${props.themeIcon}`;

    if (props.inline) {
      iconClasses += ' inline-block align-t';
    }

    const extraProps = omit(props, Icon.propNames.concat('style'));
    const svgStyle = props.style || {};
    if (!svgStyle.width) {
      svgStyle.width = 18;
    }
    if (!svgStyle.height) {
      svgStyle.height = 18;
    }

    const iconContent = (
      <svg
        ref={this.setIconElement}
        role="presentation"
        focusable="false"
        className={iconClasses}
        style={svgStyle}
        {...extraProps}
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
