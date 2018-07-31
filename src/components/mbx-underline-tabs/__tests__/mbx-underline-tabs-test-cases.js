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
            overlapBorder={true}
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

testCases.manyItems = {
  description: 'many items',
  component: MbxUnderlineTabs,
  props: {
    items: [
      {
        id: 'A',
        label: 'Porcupine'
      },
      {
        id: 'B',
        label: 'Walrus'
      },
      {
        id: 'C',
        label: 'Eggplant'
      },
      {
        id: 'D',
        label: 'Gorilla'
      },
      {
        id: 'E',
        label: 'Spoon'
      },
      {
        id: 'F',
        label: 'Horseman'
      },
      {
        id: 'G',
        label: 'Cloud'
      },
      {
        id: 'H',
        label: 'Sun'
      },
      {
        id: 'I',
        label: 'Sand'
      }
    ],
    active: 'C',
    onChange: safeSpy()
  }
};

testCases.defaults = {
  description: 'defaults',
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
    onChange: safeSpy()
  }
};

testCases.noOverlap = {
  description: 'no overlap',
  component: MbxUnderlineTabs,
  props: {
    overlapBorder: false,
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
    onChange: safeSpy()
  }
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

testCases.largeLinks = {
  description: 'large links',
  component: MbxUnderlineTabs,
  props: {
    items: [
      {
        id: 'A',
        label: 'Hash',
        href: '#'
      },
      {
        id: 'B',
        label: 'Browns',
        href: '#'
      },
      {
        id: 'C',
        label: 'Breakfast',
        href: '#'
      }
    ],
    active: 'A',
    onChange: safeSpy(),
    size: 'large'
  }
};

testCases.customized = {
  description: 'customized',
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
    activeColor: 'pink',
    inactiveColor: 'purple',
    hoverColor: 'pink',
    bold: false
  }
};

export { testCases };
