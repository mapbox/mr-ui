/*
Badge with coloring and a tooltip.
*/
import React from 'react';
import Badge from '../badge';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <span className="txt-bold mr6">My shiny new feature!</span>
        <Badge
          badgeText="Beta"
          coloring="purple"
          tooltipText="This feature is in public beta and is subject to potential changes."
        />
      </div>
    );
  }
}
