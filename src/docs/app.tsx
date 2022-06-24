import { ReactElement } from 'react';
import components from './data/components'; // eslint-disable-line
import ComponentSection from './components/component-section';
import Sidebar from './components/sidebar';
import Colors from './components/colors';
import Assets from './components/assets';
import { Data, Entry, Section } from './typings';

function AppSection({ name, entries, intro }: Section): ReactElement {
  const id = name.replace(/ /g, '-').toLowerCase();
  return (
    <div id={id}>
      <a href={`#${id}`} className="mb12 block unprose color-blue-on-hover">
        <h2 className="mb12 pt60 txt-h2 txt-fancy">{name}</h2>
      </a>
      {intro}
      {entries.map(({ name, content }: Entry) => (
        <div key={name}>{content}</div>
      ))}
    </div>
  );
}

export default function App() {
  const componentEls: Array<Entry> = components.map((component) => {
    let containerClasses = 'pb60';
    return {
      name: component.name,
      content: (
        <div key={component.name} className={containerClasses}>
          <ComponentSection data={component} />
        </div>
      )
    };
  });

  const sections: Array<Section> = [
    {
      name: 'Mapbox Assembly',
      intro: (
        <p className="prose">
          Assembly is a CSS framework by Mapbox. Mr-UI should be used alongside
          Mapbox's custom build of Assembly. The custom build includes brand
          colors and brand assets are documented here. Visit the{' '}
          <a href="https://labs.mapbox.com/assembly/">Assembly website</a> for
          more thorough documentation.
        </p>
      ),
      entries: [
        { name: 'Colors', content: <Colors /> },
        { name: 'Assets', content: <Assets /> }
      ]
    },
    {
      name: 'Mr UI Components',
      intro: (
        <div className="prose">
          <p>
            Pronounced 'mis-tər yü-'ī. A collection of React components that
            help Mapbox developers build apps and websites.
          </p>
        </div>
      ),
      entries: componentEls
    }
  ];

  return (
    <>
      <div className="relative fixed-mm top left bottom w240-mm py24 px24 scroll-styled overflow-auto">
        <Sidebar sections={sections} />
      </div>
      <div className="mx-auto pl240-mm wmax1200">
        <div className="px24">
          {sections.map(({ name, entries, intro }: Section) => (
            <AppSection
              key={name}
              entries={entries}
              intro={intro}
              name={name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
