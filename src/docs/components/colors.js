import React from 'react';
import variables from '@mapbox/mbx-assembly/dist/variables.json';
import AssemblySection from './assembly-section';
import AssemblyIntro from './assembly-intro';

const mainColors = ['blue', 'gray', 'red', 'orange'];
const secondaryColors = ['purple', 'pink', 'yellow', 'green'];

const getVariants = (colors) => {
  return colors.map((c) => [
    `${c}-dark`,
    `${c}-deep`,
    c,
    `${c}-light`,
    `${c}-lighter`,
    `${c}-faint`
  ]);
};

const getColorSwatch = (c, j) => (
  <div key={c} className="col w-1/6">
    <div className={`bg-${c} h60`} />
    <div
      className={`txt-xs txt-mono px12 py6 ${
        j !== 3 ? 'border-r border--' + c : ''
      }`}
    >
      {c}
      <div className="color-gray">{variables[c]}</div>
    </div>
  </div>
);

const getColorSwatchGroup = (c, i) => (
  <div
    key={i}
    className="overflow-hidden grid border border--gray-light round mb12"
  >
    {c.map((c, j) => getColorSwatch(c, j))}
  </div>
);

const sections = [
  {
    name: 'Core colors',
    preview: (
      <div>
        {getVariants(mainColors).map((group, i) =>
          getColorSwatchGroup(group, i)
        )}
      </div>
    ),
    description: (
      <p>
        These colors power form elements, text, and layout on Mapbox sites and
        apps.
      </p>
    )
  },
  {
    name: 'Secondary colors',
    preview: (
      <div>
        {getVariants(secondaryColors).map((group, i) =>
          getColorSwatchGroup(group, i)
        )}
      </div>
    ),
    description: (
      <p>
        Use these colors to add distinction and focus to content like
        illustrations, notifications, and badges.
      </p>
    )
  }
];

export default function Color() {
  return (
    <section className="pt24" id="colors">
      <AssemblyIntro name="Color">
        <p>
          Mapbox apps have four primary UI colors and four secondary colors.
          Every color includes a dark, deep, light, lighter, and faint
          variation. When pairing colors, try to vary both hue and lightness
          (i.e. <code>gray-dark</code> and <code>pink</code>).
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
