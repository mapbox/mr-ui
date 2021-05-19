import React from 'react';
import components from './data/components'; // eslint-disable-line
import ComponentSection from './components/component-section';
import Sidebar from './components/sidebar';

export default class App extends React.Component {
  render() {
    const componentEls = components.map((component, index) => {
      let containerClasses = 'pb60 border-b border--darken10';
      if (index !== 0) {
        containerClasses += ' mt36';
      }
      return (
        <div key={component.name} className={containerClasses}>
          <ComponentSection data={component} />
        </div>
      );
    });
    return (
      <div>
        <div className="relative fixed-mm top left bottom w240-mm py24 px24 scroll-styled overflow-auto">
          <Sidebar />
        </div>
        <div className="mx-auto pl240-mm wmax1200">
          <div className="px24">{componentEls}</div>
        </div>
      </div>
    );
  }
}
