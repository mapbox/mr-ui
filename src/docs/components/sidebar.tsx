import React, {ReactElement} from 'react';
import Icon from '../../components/icon';
import components from '../data/components'; // eslint-disable-line
import { Section } from '../typings';

interface Props {
  sections: Array<Section>
}

function SidebarSection({ name, entries }: Section): ReactElement {
  const id = name.replace(/ /g, '-').toLowerCase();
  return (
    <div className="mt12">
      <a href={`#${id}`}>
        <h2 className="txt-h5 mb6 color-blue-on-hover color-gray">{name}</h2>
      </a>
      <ul className="flex flex--wrap block-mm">
        {entries.map(({ name }: { name: string}) => (
          <li key={name}>
            <a
              href={`#${name.toLowerCase()}`}
              className="pr6 py3 block txt-bold color-blue-on-hover"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar({ sections }: Props): ReactElement {
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
        {sections.map(({ name, entries }: Section): ReactElement => (
          <SidebarSection key={name} name={name} entries={entries} />
        ))}
      </div>
    </div>
  );
}
