/*
Clickable tooltip
*/
import React from 'react';
import Tooltip from '../tooltip';

export default class Example extends React.Component {
  renderTooltipContent = () => {
    return <span>Some words</span>;
  };

  render() {
    return (
      <Tooltip
        content={this.renderTooltipContent}
        placement="top"
        alignment="left"
        backgroundColor="red"
        respondsToClick={true}
        themeTooltip="py6 px12 round txt-s txt-bold"
        display="inline"
      >
        {triggerProps => (
          <button className="btn" type="button" {...triggerProps}>
            Clickable
          </button>
        )}
      </Tooltip>
    );
  }
}
