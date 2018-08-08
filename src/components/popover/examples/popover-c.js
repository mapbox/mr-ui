/*
Warning popover.
*/
import React from 'react';
import Popover from '../popover';

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
    this.setState(state => ({ popoverOpen: !state.popoverOpen }));
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
        coloring="warning"
        getAnchorElement={this.getAnchor}
        onExit={this.togglePopover}
        ignoreClickWithinElement={this.ignore}
        alignment="center"
      >
        This is a warning popover.
      </Popover>
    );
  }

  render() {
    return (
      <div>
        <button
          ref={this.setAnchor}
          onClick={this.togglePopover}
          className="btn btn--s"
        >
          Toggle popover
        </button>
        {this.renderPopover()}
      </div>
    );
  }
}
