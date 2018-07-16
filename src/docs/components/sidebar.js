import React from 'react';
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
      <div className="pt24 txt-s">
        <ul>{componentLinks}</ul>
      </div>
    );
  }
}
