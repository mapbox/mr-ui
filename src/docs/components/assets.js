import React from 'react';
import AssemblySection from './assembly-section';
import AssemblyIntro from './assembly-intro';

const sections = [
  {
    name: 'Mapbox logo',
    preview: (
      <>
        <div>
          <div className="mr12 align-t border round border--gray-light px24 h120 inline-flex flex--center-cross flex--center-main">
            <div className="mb-logo mb-logo--s" />
          </div>
          <div className="mr12 align-t border round border--gray-light px24 h120 inline-flex flex--center-cross flex--center-main">
            <div className="mb-logo" />
          </div>
          <div className="mr12 align-t border round border--gray-light px24 h120 inline-flex flex--center-cross flex--center-main">
            <div className="mb-logo mb-logo--l" />
          </div>
        </div>
        <div className="mt12">
          <div className="border bg-black mr12 align-t round px24 h120 inline-flex flex--center-cross flex--center-main">
            <div className="mb-logo mb-logo--white  mb-logo--s" />
          </div>
          <div className="border bg-black mr12 align-t round px24 h120 inline-flex flex--center-cross flex--center-main">
            <div className="mb-logo mb-logo--white" />
          </div>
          <div className="border bg-black mr12 align-t round px24 h120 inline-flex flex--center-cross flex--center-main">
            <div className="mb-logo mb-logo--white mb-logo--l" />
          </div>
        </div>
      </>
    ),
    description: (
      <p>
        Adjust logo size with the modifiers <code>mb-logo--s</code> and{' '}
        <code>mb-logo--l</code>.
      </p>
    )
  },
  {
    name: 'Cera pro',
    preview: (
      <div className="txt-fancy">
        <h1 className="txt-h1">Hello, I'm Cera Pro</h1>
        <h2 className="txt-h2">Hello, I'm Cera Pro</h2>
        <h3 className="txt-h3">Hello, I'm Cera Pro</h3>
      </div>
    ),
    description: (
      <p>
        Use Cera Pro Bold with the <code>txt-fancy</code> class. For the most
        part, use of Cera Pro should be reserved for headlines.
      </p>
    )
  }
];

export default class Assets extends React.Component {
  render() {
    return (
      <section className="pt24" id="assets">
        <AssemblyIntro name="Assets">
          <p>
            These assets are exclusively available in Mapbox's build of
            Assembly. When using these assets, especially the logo, be attentive
            to the{' '}
            <a
              href="https://www.mapbox.com/about/press/brand-guidelines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapbox brand guidelines
            </a>
            .
          </p>
        </AssemblyIntro>
        <div className="mt24">
          {sections.map((s) => (
            <AssemblySection key={s.name} sectionData={s} />
          ))}
        </div>
      </section>
    );
  }
}
