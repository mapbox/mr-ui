/*
More options
*/
import React from 'react';
import PopoverTrigger from '../popover-trigger';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openPopover: false };
  }

  handlePopoverOpen = () => {
    this.setState({ openPopover: true });
  };

  handlePopoverClose = () => {
    this.setState({ openPopover: false });
  };

  getPopoverContent = () => {
    return <input className="input" type="text" />;
  };

  render() {
    return (
      <div>
        <PopoverTrigger
          content={this.getPopoverContent}
          onPopoverOpen={this.handlePopoverOpen}
          onPopoverClose={this.handlePopoverClose}
          respondsToFocus={true}
          respondsToHover={true}
          trapFocus={true}
          popoverProps={{
            backgroundColor: 'yellow'
          }}
          triggerProps={{
            'data-test': 'trigger-container'
          }}
        >
          <button type="button" className="btn">
            Trigger
          </button>
        </PopoverTrigger>
      </div>
    );
  }
}
