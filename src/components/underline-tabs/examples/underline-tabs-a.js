/*
Standard usage.
*/
import React from 'react';
import UnderlineTabs from '../underline-tabs';

const items = [
  {
    label: 'Breakfast',
    id: 'bf'
  },
  {
    label: 'Lunch',
    id: 'ln'
  },
  {
    label: 'Dinner',
    id: 'dr'
  },
  {
    label: 'Link here',
    id: 'link',
    href: '#underline-tabs-a'
  }
];

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'bf' };
    this.changeTab = (id) => {
      this.setState({ active: id });
    };
  }

  render() {
    return (
      <div id="underline-tabs-a" className="border-b border--gray-light">
        <UnderlineTabs
          items={items}
          active={this.state.active}
          onChange={this.changeTab}
          overlapBorder={true}
        />
      </div>
    );
  }
}
