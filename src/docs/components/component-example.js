/* eslint-disable react/no-danger */
import React from 'react';

export default class ComponentExample extends React.Component {
  state = {
    showCode: false
  };

  toggleCode = () => {
    this.setState(state => ({ showCode: !state.showCode }));
  };

  renderCode() {
    if (!this.state.showCode) return null;
    return (
      <pre className="mt6 language-js">
        <code dangerouslySetInnerHTML={{ __html: this.props.code }} />
      </pre>
    );
  }

  render() {
    const { props } = this;
    return (
      <div>
        <div className="mb6 prose">{props.description}</div>
        <div className="border round border--gray-light border--dash">
          {React.createElement(props.exampleModule.default)}
        </div>
        <div className="mt6">
          <button className="btn btn--s" onClick={this.toggleCode}>
            Toggle code
          </button>
          {this.renderCode()}
        </div>
      </div>
    );
  }
}
