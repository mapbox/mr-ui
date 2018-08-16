import React from 'react';
import Helmet from 'react-helmet';
import App from '../app';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="robots" content="noindex" />
          <title>Mr. UI</title>
          <link
            href="https://api.mapbox.com/mapbox-assembly/mbx/v0.27.0/assembly.min.css"
            rel="stylesheet"
          />
          <script
            async
            src="https://api.mapbox.com/mapbox-assembly/mbx/v0.27.0/assembly.js"
          />
        </Helmet>
        <App />
      </div>
    );
  }
}
