import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  SIZE_SMALL,
  SIZE_MEDIUM,
  SIZE_LARGE
} from './underline-tabs-constants';
import capitalize from '../utils/capitalize';

class UnderlineTabItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { props } = this;
    if (props.disabled || props.active) {
      event.preventDefault();
      return;
    }
    props.onClick(props.id, event);
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
    return <span className={borderClasses} />;
  }

  render() {
    const { props } = this;

    const itemClasses = classnames(`block relative`, {
      'mb-neg1 mt-neg1': props.overlapBorder,
      [`color-${props.inactiveColor} color-${props.hoverColor}-on-hover`]:
        !props.active && !props.disabled,
      [`color-${props.activeColor} cursor-default`]: props.active,
      'color-gray-light cursor-default': props.disabled
    });

    const label = props.label || capitalize(props.id);
    const content = (
      <span
        className="block relative flex flex--center-cross"
        style={{ height: this.getHeight(props.size) }}
      >
        {label}
        {this.renderBorder()}
      </span>
    );

    const universalProps = {
      onClick: this.handleClick,
      className: itemClasses,
      'data-test': props.id
    };

    if (props.href) {
      return (
        <a href={props.href} {...universalProps}>
          {content}
        </a>
      );
    }

    return (
      <button aria-label={label} type="button" {...universalProps}>
        {content}
      </button>
    );
  }
}

UnderlineTabItem.propTypes = {
  id: PropTypes.string.isRequired,
  inactiveColor: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  overlapBorder: PropTypes.bool.isRequired,
  label: PropTypes.node,
  size: PropTypes.oneOf([SIZE_SMALL, SIZE_MEDIUM, SIZE_LARGE]),
  active: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool
};

UnderlineTabItem.defaultProps = {
  size: SIZE_MEDIUM,
  active: false,
  disabled: false
};

export default UnderlineTabItem;
