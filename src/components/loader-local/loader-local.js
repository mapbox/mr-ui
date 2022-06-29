import React from 'react';
import PropTypes from 'prop-types';
import omit from '../utils/omit';

export default class LoaderLocal extends React.PureComponent {
  static propTypes = {
    /** Assembly classes to apply to the loader component */
    themeLoader: PropTypes.string
  };

  static defaultProps = {
    themeLoader: 'bg-gray-faint'
  };

  static propNames = ['themeLoader'];

  render() {
    const { themeLoader } = this.props;
    let className = 'loading absolute top left right bottom flex';
    if (themeLoader) className += ' ' + themeLoader;
    const passedProps = omit(this.props, LoaderLocal.propNames);
    return <div className={className} {...passedProps} />;
  }
}
