import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple new tab link wrapper component.
 *
 * This component applies an opinionated relationship (rel) attribute to
 * prevent the new tab from accessing the originating tab's content.
 */
export default class NewTabLink extends React.Component {
  static propTypes = {
    /** The content of the new tab link. */
    children: PropTypes.node.isRequired,
    /** The new tab location path. */
    href: PropTypes.string.isRequired
  };

  render() {
    const { props } = this;

    return (
      <a target="_blank" rel="noopener" {...props}>
        {props.children}
      </a>
    );
  }
}
