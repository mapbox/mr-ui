import React from 'react';
import PropTypes from 'prop-types';
import MbxUnderlineTabs from '../mbx-underline-tabs';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

class ButtonsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'A'
    };

    this.changeActive = nextActive => {
      this.setState({ active: nextActive });
    };
  }

  render() {
    const items = [
      {
        id: 'A',
        label: 'Letter A'
      },
      {
        id: 'B',
        label: 'Letter B'
      },
      {
        id: 'C',
        label: 'Letter C'
      }
    ];
    return (
      <div className="px12 py12">
        <div className="border-b border--gray-light">
          <MbxUnderlineTabs
            items={items}
            active={this.state.active}
            onChange={this.changeActive}
            size={this.props.size}
          />
        </div>
      </div>
    );
  }
}

ButtonsDemo.propTypes = {
  size: PropTypes.string
};

testCases.interactive = {
  description: 'interactive',
  element: <ButtonsDemo />
};

testCases.small = {
  description: 'small',
  component: MbxUnderlineTabs,
  props: {
    items: [
      {
        id: 'A',
        label: 'Letter A'
      },
      {
        id: 'B',
        label: 'Letter B'
      },
      {
        id: 'C',
        label: 'Letter C'
      }
    ],
    active: 'B',
    onChange: safeSpy(),
    size: 'small'
  }
};

testCases.large = {
  description: 'large',
  component: MbxUnderlineTabs,
  props: {
    items: [
      {
        id: 'A',
        label: 'Letter A'
      },
      {
        id: 'B',
        label: 'Letter B'
      },
      {
        id: 'C',
        label: 'Letter C'
      }
    ],
    active: 'C',
    onChange: safeSpy(),
    size: 'large'
  }
};

testCases.dim = {
  description: 'dim',
  component: MbxUnderlineTabs,
  props: {
    items: [
      {
        id: 'A',
        label: 'Letter A'
      },
      {
        id: 'B',
        label: 'Letter B'
      },
      {
        id: 'C',
        label: 'Letter C'
      }
    ],
    active: 'A',
    onChange: safeSpy(),
    size: 'small',
    activeColor: 'gray-dark',
    inactiveColor: 'gray'
  }
};

export { testCases };
