/*
A dark tooltip with custom placement, which uses a function child
to render a custom component as the trigger and a function for its
`content` prop. Also limits itself to a small width.
*/
import React, { ReactElement } from 'react';
import Tooltip from '../tooltip';

export default function Example(): ReactElement {
  const renderTooltipContent = () => {
    return (
      <span>
        Some words with <span className="txt-bold">some style</span>
      </span>
    );
  };

  return (
    <Tooltip
      content={renderTooltipContent}
      placement="bottom"
      alignment="left"
      coloring="dark"
      maxWidth="small"
    >
      {(triggerProps) => <CustomTrigger spanProps={triggerProps} />}
    </Tooltip>
  );
}

function CustomTrigger(props) {
  return (
    <span className="txt-h4 txt-fancy cursor-default" {...props.spanProps}>
      custom trigger
    </span>
  );
}
