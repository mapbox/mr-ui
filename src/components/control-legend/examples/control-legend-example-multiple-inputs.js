/*
Control legend, with multiple inputs and a custom legend theme.
*/
import React from 'react';
import ControlLegend from '../control-legend';

export default class Example extends React.Component {
  renderOptions = (p) => {
    return <input key={p.value} type="text" placeholder={p.label} />;
  };

  render() {
    const fields = [
      { label: 'First name', value: 'first-name' },
      { label: 'Middle initial', value: 'middle-initial' },
      { label: 'Last name', value: 'Last name' }
    ];
    return (
      <div>
        <ControlLegend
          id="name"
          text="Enter your name"
          themeLegend="txt-s txt-bold mb6 color-blue"
        />
        {fields.map(this.renderOptions)}
      </div>
    );
  }
}
