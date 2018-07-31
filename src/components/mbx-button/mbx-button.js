import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import xtend from 'xtend';
import Icon from '../icon';

const SIZE_SMALL = 'small';
const SIZE_MEDIUM = 'medium';
const SIZE_LARGE = 'large';
const WIDTH_REGULAR = 'regular';
const WIDTH_LARGE = 'large';
const WIDTH_FULL = 'full';

class MbxButton extends React.Component {
  renderIcon(icon) {
    if (typeof icon === 'string') {
      return <Icon name={icon} />;
    }
    return icon;
  }

  renderButtonBody() {
    const { iconBefore, iconAfter, children, size } = this.props;

    const spacer = size === SIZE_SMALL ? '3' : '6';

    const before = !iconBefore ? null : (
      <span className={`flex-child mr${spacer}`}>
        {this.renderIcon(iconBefore)}
      </span>
    );

    const after = !iconAfter ? null : (
      <span className={`flex-child ml${spacer}`}>
        {this.renderIcon(iconAfter)}
      </span>
    );

    return (
      <span className="flex-parent flex-parent--center-cross flex-parent--center-main">
        {before}
        <span className="flex-child">{children}</span>
        {after}
      </span>
    );
  }

  render() {
    const { props } = this;

    const sizeSmall = props.size === SIZE_SMALL;
    const sizeMedium = props.size === SIZE_MEDIUM;
    const sizeLarge = props.size === SIZE_LARGE;
    const widthFull = props.width === WIDTH_FULL;
    const widthRegular = props.width === WIDTH_REGULAR;
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
      px24: (!sizeSmall && widthRegular) || widthFull,
      px36: !sizeSmall && widthLarge,
      px6: sizeSmall && widthRegular,
      px12: sizeSmall && widthLarge,
      'w-full block': widthFull,
      block: props.block,
      'txt-s': !sizeSmall,
      'py3 txt-xs': sizeSmall
    });

    const universalProps = xtend(
      {
        className: props.transformClasses(classes),
        onClick: props.onClick,
        children: this.renderButtonBody()
      },
      props.extendProps
    );

    if (props.component) {
      return React.createElement(props.component, universalProps);
    }

    if (props.href) {
      return <a href={props.href} {...universalProps} />;
    }

    const buttonType = props.submit ? 'submit' : 'button';
    return <button type={buttonType} {...universalProps} />;
  }
}

MbxButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  corners: PropTypes.bool,
  outline: PropTypes.bool,
  submit: PropTypes.bool,
  color: PropTypes.string,
  iconBefore: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  iconAfter: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  width: PropTypes.string,
  block: PropTypes.bool,
  extendProps: PropTypes.object,
  transformClasses: PropTypes.func
};

MbxButton.defaultProps = {
  corners: false,
  outline: false,
  block: false,
  color: 'blue',
  size: 'large',
  width: 'regular',
  transformClasses: x => x
};

export default MbxButton;
