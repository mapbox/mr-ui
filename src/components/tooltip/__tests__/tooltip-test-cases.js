/* eslint-disable react/display-name */
import React from 'react';
import Tooltip from '../tooltip';
import Button from '../../button';

const testCases = {};

function getTooltipChildren() {
  return <span>test tooltip</span>;
}

function getTooltipContent() {
  return <div className="h72">test tooltip</div>;
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
          <button aria-label="default" className={buttonClasses}>
            default
          </button>
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          testId={`${options.testId}-disabled`}
          respondsToClick={options.respondsToClick}
          disabled={true}
        >
          <button aria-hidden={true} className={buttonClasses}>
            disabled
          </button>
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="top"
          testId={`${options.testId}-top`}
          respondsToClick={options.respondsToClick}
        >
          <button aria-label="top" className={buttonClasses}>
            top
          </button>
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="left"
          testId={`${options.testId}-left`}
          respondsToClick={options.respondsToClick}
        >
          <button aria-label="left" className={buttonClasses}>
            left
          </button>
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="right"
          testId={`${options.testId}-right`}
          respondsToClick={options.respondsToClick}
        >
          <button aria-label="right" className={buttonClasses}>
            right
          </button>
        </Tooltip>
      </div>
      <div className={containerClasses}>
        <Tooltip
          content={getTooltipContent}
          placement="bottom"
          testId={`${options.testId}-bottom`}
          respondsToClick={options.respondsToClick}
        >
          <button aria-label="bottom" className={buttonClasses}>
            bottom
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

testCases.topFiller = {
  description:
    'Filler, so absolutely positioned cases do not overlap the others',
  element: <div style={{ marginTop: 80 }} />
};

testCases.domElementChild = {
  description: 'DOM element child',
  component: Tooltip,
  props: {
    children: <span>trigger</span>,
    content: 'DOM element child'
  }
};

function CustomThing(props) {
  return <div {...props} />;
}

testCases.functionChild = {
  description: 'function child',
  component: Tooltip,
  props: {
    children: (triggerProps) => (
      <CustomThing {...triggerProps}>trigger</CustomThing>
    ),
    content: 'function child'
  }
};

testCases.buttonChild = {
  description: 'Button child',
  component: Tooltip,
  props: {
    children: (
      <Button passthroughProps={{ 'aria-label': 'trigger' }}>trigger</Button>
    ),
    content: 'Button child'
  }
};

testCases.allProps = {
  description: 'all props',
  component: Tooltip,
  props: {
    children: <div>test tooltip</div>,
    content: getTooltipContent,
    placement: 'top',
    alignment: 'left',
    coloring: 'dark',
    respondsToClick: true,
    themeTooltip: 'py3 px3 txt-bold txt-l',
    display: 'inline-block'
  }
};

testCases.warningProp = {
  description: 'warning prop',
  component: Tooltip,
  props: {
    children: <div>test tooltip</div>,
    content: getTooltipContent,
    coloring: 'warning'
  }
};

testCases.errorProp = {
  description: 'error prop',
  component: Tooltip,
  props: {
    children: <div>test tooltip</div>,
    content: getTooltipContent,
    coloring: 'error'
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

      <div className="w120 h240 overflow-auto border border--gray-light">
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

testCases.bottomFiller = {
  description:
    'Filler, so absolutely positioned cases do not overlap the others',
  element: <div style={{ marginTop: 80 }} />
};

export { testCases };
