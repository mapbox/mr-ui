import React, {ReactElement, ReactNode} from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

interface Props {
  children: ReactNode;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  inline?: boolean;
}

/**
 * Put an icon next to some text.
 *
 * The icon and text will be vertically centered, with standard spacing between.
 */
export default function IconText({
  children,
  iconBefore,
  iconAfter,
  inline = false
}: Props): ReactElement {

  const renderIcon = (icon: ReactNode) => {
    if (typeof icon === 'string') {
      return <Icon name={icon} />;
    }
    return icon;
  }

  const before = !iconBefore ? null : (
    <span className="mr6">{renderIcon(iconBefore)}</span>
  );

  const after = !iconAfter ? null : (
    <span className="ml6">{renderIcon(iconAfter)}</span>
  );

  return (
    <span className={`${inline ? 'inline-flex' : 'flex'} flex--center-cross`}>
      {before}
      <span>{children}</span>
      {after}
    </span>
  );
}

IconText.propTypes = {
  /**
   * The text. A string is recommended, but you can put an element in here if
   * you think it's right. If you do, it should be inline-level,
   * using `<span>`s instead of `<div>`s.
   */
  children: PropTypes.node.isRequired,
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
