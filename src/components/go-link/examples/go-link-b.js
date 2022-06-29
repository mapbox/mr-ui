/*
GoLink with options
*/
import React from 'react';
import GoLink from '../go-link';

export default class Example extends React.Component {
  render() {
    return (
      <div className="bg-pink">
        <GoLink
          color="light"
          goBack={true}
          isBold={false}
          isNewTab={true}
          href="http://www.mapbox.com"
          size="small"
          text="Go back to Mapbox!"
        />
      </div>
    );
  }
}
