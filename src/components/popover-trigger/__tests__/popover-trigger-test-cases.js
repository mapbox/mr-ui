import React from 'react';
import safeSpy from '../../../test-utils/safe-spy';
import PopoverTrigger from '../popover-trigger';

const testCases = {};

function getPopoverContent() {
  return <div>test popover</div>;
}

testCases.defaultProps = {
  description: 'default props',
  element: (
    <PopoverTrigger content={getPopoverContent}>
      <button className="btn">Trigger</button>
    </PopoverTrigger>
  )
};

testCases.respondsToAllInteractions = {
  description: 'responds to all interactions',
  element: (
    <PopoverTrigger
      content={getPopoverContent}
      popoverProps={{ placement: 'top' }}
      respondsToHover={true}
      respondsToFocus={true}
      respondsToClick={true}
    >
      <button className="btn">Trigger</button>
    </PopoverTrigger>
  )
};

testCases.focusHoverNotClick = {
  description: 'responds to focus and hover but not click',
  element: (
    <PopoverTrigger
      content={getPopoverContent}
      respondsToHover={true}
      respondsToFocus={true}
      respondsToClick={false}
    >
      <button className="btn">Trigger</button>
    </PopoverTrigger>
  )
};

testCases.callbacks = {
  description: 'callbacks when the popover opens and closes',
  component: PopoverTrigger,
  props: {
    content: getPopoverContent,
    onPopoverOpen: safeSpy(),
    onPopoverClose: safeSpy(),
    respondsToFocus: true,
    respondsToHover: true,
    children: <button className="btn">Trigger</button>
  }
};

export { testCases };
