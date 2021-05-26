import React from 'react';
import PropTypes from 'prop-types';
import displace from 'react-displace';
import omit from '../utils/omit';
import xtend from 'xtend';

class LoaderFull extends React.PureComponent {
  static propTypes = {
    /**
     * By default, the loader's overlay is semi-transparent.
     * If this prop is `true`, the component hides the contents of the page with an entirely opaque container.
     */
    opaque: PropTypes.bool,
    style: PropTypes.object
  };

  static propNames = ['opaque', 'style'];

  static defaultProps = {
    style: {}
  };

  render() {
    let bgClasses =
      'fixed top left right bottom flex flex--center-main flex--center-cross';
    let loaderClasses = 'loading';
    if (this.props.opaque) {
      bgClasses += ' bg-white';
    } else {
      bgClasses += ' bg-darken50';
      loaderClasses += ' loading--dark';
    }
    // 'mounted' is provided by react-displace.
    const passedProps = omit(
      this.props,
      LoaderFull.propNames.concat('mounted')
    );
    // This needs to end up on top of *everything*, so it goes to the bottom
    // of body with the maximum z's.
    const style = xtend(this.props.style, { zIndex: 9999 });

    return (
      <div
        className={bgClasses}
        data-test="loader"
        style={style}
        {...passedProps}
      >
        <div className={loaderClasses} />
      </div>
    );
  }
}

export default displace(LoaderFull);
