import React from 'react';
import Icon from '../../components/icon';
import components from '../data/components'; // eslint-disable-line

export default class Sidebar extends React.Component {
  render() {
    const componentLinks = components.map(component => {
      return (
        <li key={component.name} className="my6">
          <a
            href={`#${component.name.toLowerCase()}`}
            className="txt-bold color-blue-on-hover"
          >
            {component.name}
          </a>
        </li>
      );
    });
    return (
      <div>
        <h1 className="txt-bold txt-h3 txt-mono">Mr UI</h1>
        <a
          className="flex flex--center-cross txt-s link"
          href="https://github.com/mapbox/mr-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr6">
            <Icon name="github" />
          </span>
          <span className="">View on GitHub</span>
        </a>
        <div className="pt12 txt-s">
          <ul>{componentLinks}</ul>
        </div>
      </div>
    );
  }
}
