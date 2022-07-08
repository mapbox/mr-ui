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
      alignment="start"
      coloring="dark"
      maxWidth="small"
    >
      <span className="txt-h4 txt-fancy cursor-default">
        custom trigger
      </span>
    </Tooltip>
  );
}
