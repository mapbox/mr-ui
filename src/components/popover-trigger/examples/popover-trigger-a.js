/*
A standard PopoverTrigger.
*/
import React from 'react';
import PopoverTrigger from '../popover-trigger';

export default class Example extends React.Component {
  getPopoverContent = () => {
    return <div>The popover has been opened</div>;
  };

  render() {
    return (
      <div>
        <PopoverTrigger content={this.getPopoverContent}>
          <button type="button" className="btn btn--s btn--purple">
            Trigger
          </button>
        </PopoverTrigger>
      </div>
    );
  }
}
