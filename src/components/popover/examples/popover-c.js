/*
Warning popover.
*/
import React from 'react';
import Popover from '../popover';
import Button from '../../button';

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
