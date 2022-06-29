import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

/**
 * Put an icon next to some text.
 *
 * The icon and text will be vertically centered, with standard spacing between.
 */
class IconText extends React.Component {
  renderIcon(icon) {
    if (typeof icon === 'string') {
      return <Icon name={icon} />;
    }
    return icon;
  }

  render() {
    const { props } = this;
    const flexrule = props.inline ? 'inline-flex' : 'flex';

    const before = !props.iconBefore ? null : (
      <span className="mr6">{this.renderIcon(props.iconBefore)}</span>
    );

    const after = !props.iconAfter ? null : (
      <span className="ml6">{this.renderIcon(props.iconAfter)}</span>
    );

    return (
      <span className={`${flexrule} flex--center-cross`}>
        {before}
        <span>{props.children}</span>
        {after}
      </span>
    );
  }
}

IconText.propTypes = {
  /**
   * The text. A string is recommended, but you can put an element in here if
   * you think it's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s.
   */
  children: PropTypes.node.isRequired,
  /**
   * The size of the gap between the text and the icon: `"small"` or `"large"`.
   */
  gap: PropTypes.oneOf(['small', 'large']),
  /**
   * An icon to place before the text. If the value is a string, it should name an
   * Assembly icon. If you bring your own SVG or want finer-grained control over
   * how the Icon component is used, pass an element.
   */
  iconBefore: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * An icon to place after the text. See details documented for `iconBefore`.
   */
  iconAfter: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /**
   * A boolean indicating whether the component's wrapper element should be
   * 'flex' (false) or 'inline-flex' (true).
   */
  inline: PropTypes.bool
};

IconText.defaultProps = {
  gap: 'small',
  inline: false
};

export default IconText;
