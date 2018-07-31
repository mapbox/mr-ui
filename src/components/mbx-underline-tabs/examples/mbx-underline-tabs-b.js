/*
Small, unbolded tabs, as in Studio's style editor.

Each item's label is derived from its ID instead of separately provided.

Also, the container's layout classes illustrate one way that you can
right-align the tabs.
*/
import React from 'react';
import MbxUnderlineTabs from '../mbx-underline-tabs';

const items = [
  {
    id: 'colors'
  },
  {
    id: 'sizes'
  },
  {
    id: 'shapes'
  }
];

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 'sizes' };
    this.changeTab = id => {
      this.setState({ active: id });
    };
  }

  render() {
    return (
      <div className="px12 py12 bg-gray-faint">
        <div className="border-b border--gray-light w300 flex-parent flex-parent--end-main">
          <div className="flex-child">
            <MbxUnderlineTabs
              items={items}
              active={this.state.active}
              onChange={this.changeTab}
              size="small"
              overlapBorder={true}
              bold={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
