import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SIZE_SMALL = 'small';
const SIZE_MEDIUM = 'medium';
const SIZE_LARGE = 'large';

class MbxUnderlineTabItem extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonClick = () => {
      props.onClick(props.id);
    };
  }

  // Each return height is 2px more than the perceived height, to account
  // for the negative margins on top and bottom.
  getHeight() {
    switch (this.props.size) {
      case SIZE_SMALL:
        return 38;
      case SIZE_LARGE:
        return 50;
      default:
        return 44;
    }
  }

  renderBorder() {
    const { props } = this;
    if (!props.active) {
      return null;
    }
    const borderClasses = classnames('absolute bottom left right border-b', {
      'border-b--2': props.size !== SIZE_SMALL
    });
    return <div className={borderClasses} />;
  }

  render() {
    const { props } = this;

    const itemClasses = classnames(
      `mb-neg1 mt-neg1 block align-c color-gray-dark txt-nowrap unselectable relative flex-parent flex-parent--center-cross`,
      {
        [`color-${props.inactiveColor} color-${
          props.activeColor
        }-on-hover`]: !props.active,
        [`color-${props.activeColor}`]: props.active,
        'color-gray-light': props.disabled
      }
    );

    const itemStyle = {
      height: this.getHeight(props.size)
    };

    const content = (
      <div>
        {props.label}
        {this.renderBorder()}
      </div>
    );

    if (props.href) {
      return (
        <a
          href={props.href}
          className={itemClasses}
          data-test={props.id}
          style={itemStyle}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        onClick={this.onButtonClick}
        className={itemClasses}
        data-test={props.id}
        style={itemStyle}
      >
        {content}
      </button>
    );
  }
}

MbxUnderlineTabItem.propTypes = {
  label: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf([SIZE_SMALL, SIZE_MEDIUM, SIZE_LARGE]),
  active: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.string,
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string
};

MbxUnderlineTabItem.defaultProps = {
  size: SIZE_MEDIUM,
  active: false,
  inactiveColor: 'gray-dark',
  activeColor: 'blue'
};

export default MbxUnderlineTabItem;
