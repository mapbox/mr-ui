/*
Basic.
*/
import React from 'react';
import ControlledAccordion from '../controlled-accordion';

export default class Example extends React.Component {
  state = {
    activeItem: ''
  };

  onToggle = (id) => {
    this.setState({
      activeItem: id === this.state.activeItem ? '' : id
    });
  };

  render() {
    return (
      <ControlledAccordion
        onToggle={this.onToggle}
        activeItem={this.state.activeItem}
        items={[
          { id: 'one', header: () => <span>one</span>, body: 'First body' },
          { id: 'two', header: () => <span>two</span>, body: 'Second body' },
          { id: 'three', header: () => <span>three</span>, body: 'Third body' }
        ]}
      />
    );
  }
}
