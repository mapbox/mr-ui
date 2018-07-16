import React from 'react';
import ComponentExample from './component-example';

export default class ComponentSection extends React.Component {
  renderProps() {
    const { data } = this.props;
    if (!data) return null;

    const propEls = Object.keys(data.props).map(prop => {
      const propData = data.props[prop];
      const required = !propData.required ? null : (
        <span className="txt-bold">Required</span>
      );
      let defaultValue = null;
      if (propData.defaultValue !== undefined) {
        const defaultDisplay = !/\n/.test(propData.defaultValue) ? (
          <div className="txt-code inline">{propData.defaultValue}</div>
        ) : (
          <div className="pre">{propData.defaultValue}</div>
        );
        defaultValue = <div className="inline">Default: {defaultDisplay}</div>;
      }
      const description = !propData.description ? null : (
        <div className="ml24 prose">{propData.description}</div>
      );
      return (
        <div key={prop} className="my12">
          <span className="txt-bold mr12">{prop}</span>
          <span className="txt-code mr12">{propData.type.name}</span>
          {required}
          {defaultValue}
          {description}
        </div>
      );
    });

    return (
      <div className="mt24 mb12">
        <h3 className="txt-h4 txt-bold border-b border--gray-light pb6">
          Props
        </h3>
        {propEls}
      </div>
    );
  }

  renderAllExamples() {
    const { data } = this.props;
    if (!data.examples || data.examples.length === 0) return;

    const exampleEls = data.examples.map((example, i) => {
      return (
        <div key={i} className="my12">
          <ComponentExample {...example} />
        </div>
      );
    });

    return (
      <div className="mt24 mb12">
        <h3 className="txt-h4 txt-bold border-b border--gray-light pb6">
          Examples
        </h3>
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

    return (
      <section className="mb60 mt12">
        <h2 id={slug} className="txt-h3 txt-code">
          <a href={`#${slug}`} className="color-blue-on-hover">
            {data.name}
          </a>
        </h2>
        <div className="mt6 mb12 txt-s color-gray">
          <span className="ml24">
            <a href={data.sourceCode} className="link">
              See source code
            </a>
          </span>
        </div>
        {description}
        {data.props && this.renderProps()}
        {this.renderAllExamples()}
      </section>
    );
  }
}
