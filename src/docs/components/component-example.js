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
    if (!this.state.showCode) {
      return null;
    }
    return (
      <pre className="my0 round-tl pre language-jsx unround-tr unround-b">
        <code dangerouslySetInnerHTML={{ __html: this.props.code }} />
      </pre>
    );
  }

  render() {
    const { props, state } = this;
    return (
      <div>
        <div className="flex-parent flex-parent--end-cross">
          <div className="flex-child flex-child--grow pb6 prose">
            {props.description}
          </div>
          <div className="flex-child flex-child--no-shrink w120">
            <div className="flex-parent flex-parent--end-main">
              <div className="flex-child">
                <ToggleCodeButton
                  onClick={this.toggleCode}
                  codeIsVisible={state.showCode}
                />
              </div>
            </div>
          </div>
        </div>
        {this.renderCode()}
        <div className="border border--gray-light px24 py24">
          {React.createElement(props.exampleModule.default)}
        </div>
      </div>
    );
  }
}

function ToggleCodeButton(props) {
  const text = props.codeIsVisible ? 'Hide code' : 'Show code';
  return (
    <button
      className="block btn btn--s btn--gray unround-b round-t"
      onClick={props.onClick}
    >
      <span className="flex-parent flex-parent--center-cross">
        <span className="flex-child">
          <svg className="icon">
            <use xlinkHref="#icon-code" />
          </svg>
        </span>
        <span className="ml6 flex-child">{text}</span>
      </span>
    </button>
  );
}
