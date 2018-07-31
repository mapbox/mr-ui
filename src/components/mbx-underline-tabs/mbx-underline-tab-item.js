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

  // If we're overlapping a bottom border, each height must be 2px
  // more than the perceived height to account for the negative
  // margins on top and bottom.
  getHeight() {
    const offset = this.props.overlapBorder ? 2 : 0;
    switch (this.props.size) {
      case SIZE_SMALL:
        return 36 + offset;
      case SIZE_LARGE:
        return 48 + offset;
      default:
        return 42 + offset;
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

    const itemClasses = classnames(`block relative`, {
      'mb-neg1 mt-neg1': props.overlapBorder,
      [`color-${props.inactiveColor} color-${
        props.activeColor
      }-on-hover`]: !props.active,
      [`color-${props.activeColor}`]: props.active,
      'color-gray-light': props.disabled
    });

    const content = (
      <div
        className="block relative flex-parent flex-parent--center-cross"
        style={{ height: this.getHeight(props.size) }}
      >
        {props.label}
        {this.renderBorder()}
      </div>
    );

    if (props.href) {
      return (
        <a href={props.href} className={itemClasses} data-test={props.id}>
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
  inactiveColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  overlapBorder: PropTypes.bool.isRequired
};

MbxUnderlineTabItem.defaultProps = {
  size: SIZE_MEDIUM,
  active: false
};

export default MbxUnderlineTabItem;
