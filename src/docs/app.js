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
        <div className="fixed top left bottom w300 py24 px24 scroll-styled scroll-auto">
          <Sidebar />
        </div>
        <div className="ml300 px24">{componentEls}</div>
      </div>
    );
  }
}
