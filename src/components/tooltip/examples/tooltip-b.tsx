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
    <div className="flex flex-row">
      <div className="bg-gray-dark h120 pt12 w240">
        <Tooltip
          content={renderTooltipContent}
          placement="bottom"
          coloring="dark"
          maxWidth="small"
        >
          <span className="txt-h4 txt-fancy cursor-default color-white pl24">
            custom trigger
          </span>
        </Tooltip>
      </div>
      <div className="bg-white h120 pt12 w240">
        <Tooltip
          content={renderTooltipContent}
          placement="bottom"
          coloring="dark"
          maxWidth="small"
        >
          <span className="txt-h4 txt-fancy cursor-default color-gray-dark pl24">
            custom trigger
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
