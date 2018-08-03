import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Fancy headings with responsive styling.
 *
 * This component only *styles*: it does not apply an `<h*>` element. You
 * should wrap it in the `<h*>` element appropriate to the context.
 */
class Heading extends React.Component {
  render() {
    const { props } = this;

    const classes = classnames('txt-fancy', {
      'txt-h2 txt-h1-mm': props.variant === 'primary',
      'txt-h3 txt-h2-mm': props.variant === 'secondary',
      'txt-h4 txt-h3-mm': props.variant === 'tertiary',
      'txt-h5 txt-h4-mm': props.variant === 'minor'
    });

    return <div className={classes}>{props.children}</div>;
  }
}

Heading.propTypes = {
  /**
   * The content of the heading, usually just text.
   */
  children: PropTypes.node.isRequired,
  /**
   * The heading variant. Options are `"primary"`, `"secondary"`, `"tertiary"`,
   * and `"minor"`.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'minor'])
    .isRequired
};

export default Heading;
