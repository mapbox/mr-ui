import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

/**
 * Put an icon next to some text.
 *
 * The icon and text will be vertically centered, with standard spacing between.
 */
class MbxIconText extends React.Component {
  renderIcon(icon) {
    if (typeof icon === 'string') {
      return <Icon name={icon} />;
    }
    return icon;
  }

  render() {
    const { props } = this;
    const spacer = props.spacing === 'small' ? '3' : '6';

    const before = !props.iconBefore ? null : (
      <span className={`flex-child mr${spacer}`}>
        {this.renderIcon(props.iconBefore)}
      </span>
    );

    const after = !props.iconAfter ? null : (
      <span className={`flex-child ml${spacer}`}>
        {this.renderIcon(props.iconAfter)}
      </span>
    );

    return (
      <span className="flex-parent flex-parent--center-cross">
        {before}
        <span className="flex-child">{props.children}</span>
        {after}
      </span>
    );
  }
}

MbxIconText.propTypes = {
  /**
   * The text. A string is recommended, but you can put an element in here if
   * you think it's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s.
   */
  children: PropTypes.node.isRequired,
  /**
   * The spacing size: `"small"` or `"large"`.
   */
  spacing: PropTypes.oneOf(['small', 'large']),
  /**
   * An icon to place before the text. If the value is a string, it should name an
   * Assembly icon. If you bring your own SVG or want finer-grained control over
   * how the Icon component is used, pass an element.
   */
  iconBefore: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * An icon to place after the text. See details documented for `iconBefore`.
   */
  iconAfter: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

MbxIconText.defaultProps = {
  spacing: 'small'
};

export default MbxIconText;
