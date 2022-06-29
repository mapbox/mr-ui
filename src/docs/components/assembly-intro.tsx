import React, { ReactElement } from 'react';

interface Props {
  name: string;
  children: ReactElement;
}

export default function AssemblyIntro({ name, children }: Props): ReactElement {
  const id = name.replace(/ /g, '-').toLowerCase();
  return (
    <div className="prose wmax600-mm">
      <a href={`#${id}`} className="mb12 block unprose color-blue-on-hover">
        <h3 className="txt-fancy">{name}</h3>
      </a>
      {children}
    </div>
  );
}
