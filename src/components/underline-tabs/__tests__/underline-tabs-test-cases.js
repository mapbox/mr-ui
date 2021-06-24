import React from 'react';
import PropTypes from 'prop-types';
import IconText from '../../icon-text';
import UnderlineTabs from '../underline-tabs';
import safeSpy from '../../../test-utils/safe-spy';

const testCases = {};

class InteractiveDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'A'
    };

    this.changeActive = (nextActive) => {
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
          <UnderlineTabs
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

InteractiveDemo.propTypes = {
  size: PropTypes.string
};

testCases.interactive = {
  description: 'interactive',
  element: <InteractiveDemo />
};

testCases.manyItems = {
  description: 'many items',
  component: UnderlineTabs,
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
  component: UnderlineTabs,
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

testCases.overlap = {
  description: 'overlap',
  component: UnderlineTabs,
  props: {
    overlapBorder: true,
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
  component: UnderlineTabs,
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
  component: UnderlineTabs,
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

testCases.largeLinksIcons = {
  description: 'large links with icons',
  component: UnderlineTabs,
  props: {
    items: [
      {
        id: 'A',
        label: <IconText iconBefore="floppy">Disk</IconText>,
        href: '#'
      },
      {
        id: 'B',
        label: <IconText iconBefore="alert">Alert</IconText>,
        href: '#'
      },
      {
        id: 'C',
        label: <IconText iconBefore="book">Book</IconText>,
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
  component: UnderlineTabs,
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

testCases.idLabelsAndDisabledItem = {
  description: 'ID labels and a disabled item',
  component: UnderlineTabs,
  props: {
    items: [
      {
        id: 'ant'
      },
      {
        id: 'bug',
        disabled: true
      },
      {
        id: 'cat'
      }
    ],
    active: 'cat',
    onChange: safeSpy()
  }
};

export { testCases };
