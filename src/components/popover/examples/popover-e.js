/*
Popover with non-static height.
*/
import React from 'react';
import Popover from '../popover';
import Button from '../../button';

class ExampleInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [0] };
  }

  add = () => {
    this.setState({ items: [...this.state.items, 0] });
  };

  remove = () => {
    this.setState({ items: this.state.items.slice(1) });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items &&
            this.state.items.map((item, index) => (
              <li key={index}>This is a popover!</li>
            ))}
        </ul>
        <div className="flex flex--row mt6">
          <Button onClick={this.add} size="medium">
            Add
          </Button>
          <span className="ml6">
            <Button onClick={this.remove} size="medium">
              Remove
            </Button>
          </span>
        </div>
      </div>
    );
  }
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popoverOpen: false };
    this.togglePopover = this.togglePopover.bind(this);
    this.setAnchor = this.setAnchor.bind(this);
    this.getAnchor = this.getAnchor.bind(this);
    this.ignore = this.ignore.bind(this);
  }

  togglePopover() {
    this.setState((state) => ({ popoverOpen: !state.popoverOpen }));
  }

  setAnchor(el) {
    this.anchor = el;
  }

  getAnchor() {
    return this.anchor;
  }

  ignore(el) {
    return el === this.getAnchor();
  }

  renderPopover() {
    if (!this.state.popoverOpen) {
      return null;
    }
    return (
      <Popover
        getAnchorElement={this.getAnchor}
        onExit={this.togglePopover}
        ignoreClickWithinElement={this.ignore}
        placement="top"
        alignment="left"
      >
        <ExampleInner />
      </Popover>
    );
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.togglePopover}
          size="medium"
          passthroughProps={{
            'aria-label': 'Toggle popover',
            ref: this.setAnchor
          }}
        >
          Toggle popover
        </Button>
        {this.renderPopover()}
      </div>
    );
  }
}
