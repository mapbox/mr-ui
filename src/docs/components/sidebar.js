import React from 'react';
import Icon from '../../components/icon';
import components from '../data/components'; // eslint-disable-line

function Link({ name }) {
  return (
    <li>
      <a
        href={`#${name.toLowerCase()}`}
        className="pr6 py3 block txt-bold color-blue-on-hover"
      >
        {name}
      </a>
    </li>
  );
}

function SidebarSection({ name, entries }) {
  const id = name.replace(/ /g, '-').toLowerCase();
  return (
    <div className="mt12">
      <a href={`#${id}`}>
        <h2 className="txt-h5 mb6 color-blue-on-hover color-gray">{name}</h2>
      </a>
      <ul className="flex flex--wrap block-mm">
        {entries.map((e) => (
          <Link key={e.name} name={e.name} />
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar({ sections }) {
  return (
    <div>
      <div className="border-b border--gray-light pb12">
        <a
          className="mt6 flex flex--center-cross txt-s link"
          href="https://github.com/mapbox/mr-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr6">
            <Icon name="github" />
          </span>
          View on GitHub
        </a>
      </div>
      <div className="pt12 txt-s">
        {sections.map((s) => (
          <SidebarSection key={s.name} name={s.name} entries={s.entries} />
        ))}
      </div>
    </div>
  );
}
