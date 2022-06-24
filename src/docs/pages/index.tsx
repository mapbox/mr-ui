import React, {ReactElement} from 'react';
import Helmet from 'react-helmet';
import App from '../app';

export default function Page(): ReactElement {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>Mr. UI</title>
        <link
          href="https://api.mapbox.com/mapbox-assembly/mbx/v1.0.1/assembly.min.css"
          rel="stylesheet"
        />
        <script
          async
          src="https://api.mapbox.com/mapbox-assembly/mbx/v1.0.1/assembly.js"
        />
      </Helmet>
      <App />
    </>
  );
}
