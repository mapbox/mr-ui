import React from 'react';

export default function AssemblySection({ sectionData }) {
  return (
    <div
      id={sectionData.name.replace(/ /g, '-').toLowerCase()}
      className="pb24"
    >
      <h3 className="txt-h4 txt-fancy txt-bold mb12">{sectionData.name}</h3>
      <div className="prose mb24">{sectionData.description}</div>
      <div className="mt24">{sectionData.preview}</div>
    </div>
  );
}
