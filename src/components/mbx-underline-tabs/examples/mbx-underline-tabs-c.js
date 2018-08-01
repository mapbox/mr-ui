/*
Large tabs with custom colors, a disabled item, and a container without a bottom border.
*/
import React from 'react';
import MbxUnderlineTabs from '../mbx-underline-tabs';

const items = [
  {
    id: 'Robots'
  },
  {
    id: 'Animals',
    disabled: true
  },
  {
    id: 'Clouds'
  },
  {
    id: 'Messes'
  }
];

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'Clouds' };
    this.changeTab = id => {
      this.setState({ active: id });
    };
  }

  render() {
    return (
      <MbxUnderlineTabs
        items={items}
        active={this.state.active}
        onChange={this.changeTab}
        size="large"
        activeColor="pink"
        inactiveColor="purple"
        hoverColor="purple-dark"
      />
    );
  }
}
