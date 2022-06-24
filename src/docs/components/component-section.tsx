import { ReactElement } from 'react';
import assign from 'lodash/assign';
import ComponentExample from './component-example';
import { Data, Example, PropData } from '../typings';

function LabeledDefaultValue({ value }: { value: string | null }): ReactElement {
  if (!value) {
    return null;
  }

  return (
    <div className="mt12 flex flex--wrap txt-s">
      <div className="flex-child-no-shrink color-gray">Default value:</div>
      <div className="ml6 flex-child-grow">
        <DefaultValueDisplay value={value} />
      </div>
    </div>
  );
}

function DefaultValueDisplay({ value }: { value: string }): ReactElement {
  if (/\n/.test(value)) {
    return (
      <pre className="pre">
        <code>{value}</code>
      </pre>
    );
  }
  return <div className="inline-block txt-code">{value}</div>;
}

interface Props {
  data: Data
}

export default function ComponentSection({ data }: Props): ReactElement {
  const renderProps = () => {
    if (!data) return null;

    const propRows = sortedProps(data.props).map((propData: PropData): ReactElement => {
      return <PropRow key={propData.name} {...propData} />;
    });

    return (
      <div className="mt24 mb12 overflow-auto">
        <h3 className="txt-h4 txt-fancy mb12">Props</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>{propRows}</tbody>
        </table>
      </div>
    );
  }

  const renderAllExamples = () => {
    if (!data.examples || data.examples.length === 0) return;

    const exampleEls = data.examples.map((example: Example, i: number) => {
      return (
        <div key={i} className="mb12">
          <ComponentExample {...example} />
        </div>
      );
    });

    return (
      <div className="mt24 mb12">
        <h3 className="txt-h4 txt-fancy mb12">Examples</h3>
        {exampleEls}
      </div>
    );
  }

  const description = !data.description ? null : (
    <div className="wmax600-mm prose">{data.description}</div>
  );

  const slug = data.name.toLowerCase();

  return (
    <section id={slug} className="pt24">
      <a href={`#${slug}`} className="mb12 block color-blue-on-hover">
        <h2 className="txt-fancy txt-h3">{data.name}</h2>
      </a>
      {description}
      {renderAllExamples()}
      {data.props && renderProps()}
    </section>
  );
}

function sortedProps(propsData: { [key: string]: PropData }): Array<PropData> {
  return Object.keys(propsData)
    .reduce((memo, key) => {
      memo.push(assign({ name: key }, propsData[key]));
      return memo;
    }, [])
    .sort((a, b) => {
      if (a.required && !b.required) return -1;
      if (!a.required && b.required) return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
}

function PropRow({ required, name, description, type, defaultValue }: PropData): ReactElement {
  const isRequired = !required ? null : (
    <span className="txt-uppercase txt-xs txt-mono bg-purple-faint color-purple px6 py3 round">
      Required
    </span>
  );

  return (
    <tr className="txt-s txt-ms-mm txt-m-mxl">
      <td className="txt-mono txt-bold">
        {name} {isRequired}
      </td>
      <td className="txt-mono mx12">{type.name}</td>
      <td>
        <div className="prose">{description}</div>
        <LabeledDefaultValue value={defaultValue} />
      </td>
    </tr>
  );
}
