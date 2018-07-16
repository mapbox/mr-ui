import React from 'react';
import Tooltip from '../tooltip';

const testCases = {};

function getTooltipChildren() {
  return <span>test tooltip</span>;
}

function getTooltipContent() {
  return <div className="w240 h72">test tooltip</div>;
}

function getTooltipList(options = {}) {
  let containerClasses = 'mx6 my6';
  if (options.inline) containerClasses += ' inline-block';
  let buttonClasses = 'border bg-gray-light w60 txt-s';
  return (
    <div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          testId={`${options.testId}-default`}
          respondsToClick={options.respondsToClick}
        >
          {triggerProps => (
            <button className={buttonClasses} {...triggerProps}>
              default
            </button>
          )}
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          testId={`${options.testId}-disabled`}
          respondsToClick={options.respondsToClick}
          disabled={true}
        >
          {triggerProps => (
            <button className={buttonClasses} {...triggerProps}>
              disabled
            </button>
          )}
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="top"
          testId={`${options.testId}-top`}
          respondsToClick={options.respondsToClick}
        >
          {triggerProps => (
            <button className={buttonClasses} {...triggerProps}>
              top
            </button>
          )}
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="left"
          testId={`${options.testId}-left`}
          respondsToClick={options.respondsToClick}
        >
          {triggerProps => (
            <button className={buttonClasses} {...triggerProps}>
              left
            </button>
          )}
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="right"
          testId={`${options.testId}-right`}
          respondsToClick={options.respondsToClick}
        >
          {triggerProps => (
            <button className={buttonClasses} {...triggerProps}>
              right
            </button>
          )}
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="bottom"
          testId={`${options.testId}-bottom`}
          respondsToClick={options.respondsToClick}
        >
          {triggerProps => (
            <button className={buttonClasses} {...triggerProps}>
              bottom
            </button>
          )}
        </Tooltip>
      </div>
    </div>
  );
}

testCases.basic = {
  description: 'basic',
  component: Tooltip,
  props: {
    children: getTooltipChildren,
    content: 'basic'
  }
};

testCases.allProps = {
  description: 'all props',
  component: Tooltip,
  props: {
    children: getTooltipChildren,
    content: getTooltipContent,
    placement: 'top',
    alignment: 'left',
    disabled: true,
    backgroundColor: 'red',
    respondsToClick: true,
    themeTooltip: 'py6 px12 round txt-s txt-bold',
    display: 'inline'
  }
};

testCases.respondsToClick = {
  description: 'responds to click',
  component: Tooltip,
  props: {
    children: getTooltipChildren,
    content: 'basic',
    respondsToClick: true
  }
};

testCases.manyPositions = {
  description: 'many positions',
  element: (
    <div>
      {getTooltipList({ inline: true, testId: 'basic' })}

      <div className="w120 h240 scroll-auto border border--gray-light">
        {getTooltipList({ testId: 'scroll1' })}
        {getTooltipList({ testId: 'scroll2' })}
        {getTooltipList({ testId: 'scroll3' })}
      </div>

      <div className="fixed top left border border--gray-light">
        {getTooltipList({ testId: 'top-left-vertical' })}
      </div>
      <div className="fixed top left border border--gray-light ml60">
        {getTooltipList({ inline: true, testId: 'top-left-horizontal' })}
      </div>

      <div className="fixed bottom left border border--gray-light">
        {getTooltipList({ testId: 'bottom-left-vertical' })}
      </div>
      <div className="fixed bottom left border border--gray-light ml60">
        {getTooltipList({ inline: true, testId: 'bottom-left-horizontal' })}
      </div>

      <div className="fixed bottom right border border--gray-light">
        {getTooltipList({ testId: 'bottom-right-vertical' })}
      </div>
      <div className="fixed bottom right border border--gray-light mr60">
        {getTooltipList({ inline: true, testId: 'bottom-right-horizontal' })}
      </div>

      <div className="fixed top right border border--gray-light">
        {getTooltipList({ testId: 'top-right-vertical' })}
      </div>
      <div className="fixed top right border border--gray-light mr60">
        {getTooltipList({ inline: true, testId: 'top-right-horizontal' })}
      </div>
    </div>
  )
};

export { testCases };
