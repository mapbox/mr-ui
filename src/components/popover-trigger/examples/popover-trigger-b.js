/*
A PopoverTrigger that opens a dark popover and traps focus inside its content.
*/
import React from 'react';
import PopoverTrigger from '../popover-trigger';
import Button from '../../button';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popoverOpen: false };
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
  }

  handlePopoverOpen() {
    this.setState({ popoverOpen: true });
  }

  handlePopoverClose() {
    this.setState({ popoverOpen: false });
  }

  getPopoverContent() {
    return (
      <div>
        <label htmlFor="ptb-input" className="txt-bold txt-xs block mb3">
          Type in here
        </label>
        <input id="ptb-input" className="input input--s bg-white" type="text" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <PopoverTrigger
          content={this.getPopoverContent}
          onPopoverOpen={this.handlePopoverOpen}
          onPopoverClose={this.handlePopoverClose}
          trapFocus={true}
          popoverProps={{
            coloring: 'dark',
            alignment: 'center',
            placement: 'top'
          }}
          passthroughTriggerProps={{
            'data-test': 'trigger-container'
          }}
        >
          <Button size="medium" passthroughProps={{ 'aria-label': 'Trigger' }}>
            Trigger
          </Button>
        </PopoverTrigger>
      </div>
    );
  }
}
