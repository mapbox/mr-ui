/*
Basic
*/
import React from 'react';
import PopoverTrigger from '../popover-trigger';

export default class Example extends React.Component {
  getPopoverContent = () => {
    return <div>test popover</div>;
  };

  render() {
    return (
      <div>
        <PopoverTrigger content={this.getPopoverContent}>
          <button type="button" className="btn">
            Trigger
          </button>
        </PopoverTrigger>
      </div>
    );
  }
}
