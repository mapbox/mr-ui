import React from 'react';

/**
 * A simple component including copyright and links to Mapbox's legal pages.
 *
 */

export default class FooterLegalStrip extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <span className="mr18">© Mapbox</span>
        <a
          className="link color-darken50 color-blue-on-hover mr18"
          href="https://www.mapbox.com/tos/"
        >
          Terms
        </a>
        <a
          className="link color-darken50 color-blue-on-hover mr18"
          href="https://www.mapbox.com/privacy/"
        >
          Privacy
        </a>
        <a
          className="link color-darken50 color-blue-on-hover"
          href="https://www.mapbox.com/platform/security/"
        >
          Security
        </a>
      </div>
    );
  }
}
