import React, { ReactElement } from 'react';

interface SectionData {
  name: string;
  description: ReactElement;
  preview: ReactElement;
}

interface Props {
  sectionData: SectionData
}

export default function AssemblySection({ sectionData }: Props): ReactElement {
  const { name, description, preview } = sectionData;
  return (
    <div
      id={name.replace(/ /g, '-').toLowerCase()}
      className="pb24"
    >
      <h3 className="txt-h4 txt-fancy txt-bold mb12">{name}</h3>
      <div className="prose mb24">{description}</div>
      <div className="mt24">{preview}</div>
    </div>
  );
}
