import React from 'react';
import components from './data/components'; // eslint-disable-line
import ComponentSection from './components/component-section';
import Sidebar from './components/sidebar';

export default class App extends React.Component {
  render() {
    const componentEls = components.map(component => {
      return <ComponentSection key={component.name} data={component} />;
    });
    return (
      <div>
        <div className="fixed top left bottom w300 px12 py12 scroll-styled scroll-auto">
          <h1 className="txt-bold txt-h4 txt-fancy">Mr. UI</h1>
          <div className="mb12">
            <a
              className="link txt-s"
              href="https://github.com/mapbox/mr-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex-parent flex-parent--center-cross">
                <span className="flex-child flex-child--no-shrink mr6">
                  <svg className="icon">
                    <use xlinkHref="#icon-github" />
                  </svg>
                </span>
                <span className="flex-child">GitHub repo</span>
              </span>
            </a>
          </div>
          <Sidebar />
        </div>
        <div className="ml300 px12">{componentEls}</div>
      </div>
    );
  }
}
