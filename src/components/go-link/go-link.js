import classnames from 'classnames';
import ChevronousText from '../chevronous-text';
import PropTypes from 'prop-types';
import NewTabLink from '../new-tab-link';
import React from 'react';

/**
 * Standard styled link for going to a previous or next location.
 */
export default class GoLink extends React.PureComponent {
  static propTypes = {
    /** Two colors: "light" or "dark". */
    color: PropTypes.oneOf(['light', 'dark']),
    /** Whether or not this is a go back or go forward link. */
    goBack: PropTypes.bool,
    /** URL or path to the page the new tab should go to when clicked. */
    href: PropTypes.string.isRequired,
    /** Whether or not the text is bold. */
    isBold: PropTypes.bool,
    /** Whether or not this link should go to the href in a new tab. */
    isNewTab: PropTypes.bool,
    /** Three sizes: "small", "medium", and "large". */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Link text. */
    text: PropTypes.string.isRequired
  };

  static defaultProps = {
    color: 'dark',
    goBack: false,
    isBold: true,
    isNewTab: false,
    size: 'medium'
  };

  render() {
    const { color, goBack, href, isBold, isNewTab, size, text } = this.props;
    const linkClasses = classnames('inline-block link', {
      'link--blue': color === 'dark',
      'link--white': color === 'light',
      'txt-l': size === 'large',
      'txt-m': size === 'medium',
      'txt-s': size === 'small',
      'txt-bold': isBold
    });

    if (isNewTab) {
      return (
        <NewTabLink href={href} className={linkClasses}>
          <ChevronousText text={text} iconBefore={goBack} />
        </NewTabLink>
      );
    }

    return (
      <a href={href} className={linkClasses}>
        <ChevronousText text={text} iconBefore={goBack} />
      </a>
    );
  }
}
