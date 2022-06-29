/*
NewTabLink with options.
*/
import React from 'react';
import NewTabLink from '../new-tab-link';

export default class Example extends React.Component {
  render() {
    return (
      <NewTabLink className="link link--pink" href="http://www.mapbox.com">
        Hello explorer!
      </NewTabLink>
    );
  }
}
