/*
Basic.
*/
import React from 'react';
import TabList from '../tab-list';

export default class Example extends React.Component {
  state = {
    activeItem: ''
  };

  onChange = (id) => {
    this.setState({
      activeItem: id === this.state.activeItem ? '' : id
    });
  };

  render() {
    return (
      <TabList
        onChange={this.onChange}
        activeItem={this.state.activeItem}
        items={[
          { id: 'one', label: 'Label one' },
          { id: 'two', label: 'Label two' },
          { id: 'three', label: 'Label three' },
          { id: 'four', label: 'Label four' }
        ]}
      />
    );
  }
}
