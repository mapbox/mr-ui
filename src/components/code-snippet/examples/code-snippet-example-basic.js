/*
Basic.
*/
import React from 'react';
import CodeSnippet from '../code-snippet';

export default class Example extends React.Component {
  render() {
    return (
      <CodeSnippet
        code={`dependencies {
          compile('com.mapbox.mapboxsdk:mapbox-android-sdk:5.0.2@aar') {
            transitive=true
          }
        }`}
      />
    );
  }
}
