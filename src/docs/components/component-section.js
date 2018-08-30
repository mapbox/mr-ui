import React from 'react';
import assign from 'lodash/assign';
import ComponentExample from './component-example';

export default class ComponentSection extends React.Component {
  renderProps() {
    const { data } = this.props;
    if (!data) return null;

    const propRows = sortedProps(data.props).map(propData => {
      return <PropRow key={propData.name} {...propData} />;
    });

    return (
      <div className="mt24 mb12">
        <h3 className="txt-h4 txt-bold mb12">Props</h3>
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

  renderAllExamples() {
    const { data } = this.props;
    if (!data.examples || data.examples.length === 0) return;

    const exampleEls = data.examples.map((example, i) => {
      return (
        <div key={i} className="mb12">
          <ComponentExample {...example} />
        </div>
      );
    });

    return (
      <div className="mt24 mb12">
        <h3 className="txt-h4 txt-bold mb12">Examples</h3>
        {exampleEls}
      </div>
    );
  }

  render() {
    const { data } = this.props;

    const description = !data.description ? null : (
      <div className="prose">{data.description}</div>
    );

    const slug = data.name.toLowerCase();

    // Top padding gives us the whitespace we want with hash links.
    return (
      <section id={slug} className="pt24">
        <div>
          <div className="inline-block">
            <a href={`#${slug}`} className="color-blue-on-hover">
              <h2 className="txt-fancy txt-h3">{data.name}</h2>
            </a>
          </div>
        </div>
        <div className="mt6 mb12 txt-s color-gray" />
        {description}
        {this.renderAllExamples()}
        {data.props && this.renderProps()}
      </section>
    );
  }
}

function sortedProps(propsData) {
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

function PropRow(props) {
  const required = !props.required ? null : (
    <span className="txt-xs txt-mono ml6 bg-purple-faint color-purple px6 py3 round">
      REQUIRED
    </span>
  );

  return (
    <tr>
      <td className="txt-mono txt-bold txt-nowrap">
        {props.name} {required}
      </td>
      <td className="txt-mono mx12">{props.type.name}</td>
      <td>
        <div className="prose">{props.description}</div>
        <LabeledDefaultValue value={props.defaultValue} />
      </td>
    </tr>
  );
}

function LabeledDefaultValue(props) {
  if (!props.value) {
    return null;
  }

  return (
    <div className="mt12 flex-parent txt-s">
      <div className="flex-child flex-child--no-shrink color-gray">
        Default value:
      </div>
      <div className="ml6 flex-child flex-child--grow">
        <DefaultValueDisplay value={props.value} />
      </div>
    </div>
  );
}

function DefaultValueDisplay(props) {
  if (/\n/.test(props.value)) {
    return (
      <pre className="pre">
        <code>{props.value}</code>
      </pre>
    );
  }
  return <div className="inline-block txt-code">{props.value}</div>;
}
