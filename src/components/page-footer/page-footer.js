import React from 'react';
import PropTypes from 'prop-types';

class PageFooter extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="py12 py36-ml">
        <span className="mr18">© Mapbox</span>
        <a
          className="link color-darken50 color-blue-on-hover mr18"
          href="/tos/"
        >
          Terms
        </a>
        <a
          className="link color-darken50 color-blue-on-hover mr18"
          href="/privacy/"
        >
          Privacy
        </a>
        <a
          className="link color-darken50 color-blue-on-hover"
          href="/platform/security/"
        >
          Security
        </a>
      </div>
    );
  }
}

PageFooter.propTypes = {
  className: PropTypes.string
};

export default PageFooter;
