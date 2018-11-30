import 'es6-promise/auto';
import React from 'react';
import ReactTestKitchen from '@mapbox/react-test-kitchen';
import componentIndex from './component-index'; // eslint-disable-line

class TestCasesApp extends React.Component {
  render() {
    return (
      <ReactTestKitchen projectTitle="Mr. UI" componentIndex={componentIndex} />
    );
  }
}

export default TestCasesApp;
