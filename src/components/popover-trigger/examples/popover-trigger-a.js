/*
A standard PopoverTrigger.
*/
import React from 'react';
import PopoverTrigger from '../popover-trigger';
import Button from '../../button';

export default class Example extends React.Component {
  getPopoverContent = () => {
    return <div>The popover has been opened</div>;
  };

  render() {
    return (
      <div>
        <PopoverTrigger content={this.getPopoverContent}>
          <Button size="medium" passthroughProps={{ 'aria-label': 'Trigger' }}>
            Trigger
          </Button>
        </PopoverTrigger>
      </div>
    );
  }
}
