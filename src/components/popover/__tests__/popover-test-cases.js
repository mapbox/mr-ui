/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../popover';

const testCases = {};

function getPopoverContent() {
  return <div className="w240 h240">test popover</div>;
}

class PopoverTrigger extends React.Component {
  static propTypes = {
    content: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    popoverProps: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  ignore = (el) => {
    return el === this.getAnchorElement();
  };

  togglePopover = () => {
    this.setState((state) => {
      return { visible: !state.visible };
    });
  };

  getAnchorElement = () => {
    return this.anchorNode;
  };

  setAnchorNode = (el) => {
    this.anchorNode = el;
  };

  render() {
    const content = this.props.content || getPopoverContent();
    const popover = !this.state.visible ? null : (
      <Popover
        getAnchorElement={this.getAnchorElement}
        ignoreClickWithinElement={this.ignore}
        onExit={this.togglePopover}
        {...this.props.popoverProps}
      >
        {content}
      </Popover>
    );

    let buttonClasses = 'btn';
    if (this.state.visible) buttonClasses += ' is-active';

    return (
      <div className="inline-block">
        <button
          aria-label="Trigger"
          ref={this.setAnchorNode}
          className={buttonClasses}
          onClick={this.togglePopover}
        >
          Trigger
        </button>
        {popover}
      </div>
    );
  }
}

testCases.headerMenu = {
  description: 'header menu',
  element: (
    <div className="grid">
      <div className="col w-1/3-mm">
        <PopoverTrigger
          popoverProps={{
            placement: 'bottom',
            alignment: 'left'
          }}
        />
      </div>
      <div className="col w-1/3-mm">
        <PopoverTrigger
          popoverProps={{
            placement: 'bottom',
            alignment: 'left'
          }}
        />
      </div>
      <div className="col w-1/3-mm">
        <PopoverTrigger
          popoverProps={{
            placement: 'bottom',
            alignment: 'left'
          }}
        />
      </div>
    </div>
  )
};

class StudioPanel extends React.Component {
  getContainingElement = (id) => {
    return this.refs[`container-${id}`];
  };

  getTriggers = (id) => {
    let triggers = [];
    for (let i = 0; i < 20; i++) {
      let itemClasses = 'px12 py12';
      if (i !== 0) itemClasses += ' border-t border--gray-light';
      const refId = `${id}-item-${i}`;
      const getAnchorElement = () => this.refs[refId];
      triggers.push(
        <div ref={refId} key={i} className={itemClasses}>
          <PopoverTrigger
            popoverProps={{
              getContainingElement: () => this.getContainingElement(id),
              allowAlignmentChange: false,
              getAnchorElement,
              offsetFromAnchor: 10
            }}
          />
        </div>
      );
    }
    return triggers;
  };

  render() {
    return (
      <div className="clearfix">
        <div
          ref="container-a"
          className="fl hmax600 w240 overflow-auto border border--gray-light"
        >
          {this.getTriggers('a')}
        </div>
        <div
          ref="container-b"
          className="fr hmax600 w240 overflow-auto border border--gray-light"
        >
          {this.getTriggers('b')}
        </div>
      </div>
    );
  }
}

testCases.studioPanel = {
  description: 'studio panel',
  element: <StudioPanel />
};

testCases.nestedPopovers = {
  description: 'nested popovers',
  element: (
    <div>
      <PopoverTrigger
        content={
          <PopoverTrigger
            content={<PopoverTrigger content={<PopoverTrigger />} />}
          />
        }
        popoverProps={{ placement: 'top' }}
      />
    </div>
  )
};

testCases.receiveFocus = {
  description: 'receive focus, not trapped',
  element: (
    <PopoverTrigger
      content={
        <div className="flex flex--center-cross">
          <input className="input" placeholder="eh?" />
          <button aria-label="Submit" className="btn ml6">
            Submit
          </button>
        </div>
      }
    />
  )
};

testCases.doNotReceiveFocus = {
  description: 'do not receive focus',
  element: (
    <PopoverTrigger
      popoverProps={{
        receiveFocus: false
      }}
      content={
        <div className="flex flex--center-cross">
          <input className="input" placeholder="eh?" />
          <button aria-label="Submit" className="btn ml6">
            Submit
          </button>
        </div>
      }
    />
  )
};

testCases.trapFocus = {
  description: 'trap focus',
  element: (
    <PopoverTrigger
      popoverProps={{
        trapFocus: true
      }}
      content={
        <div className="flex flex--center-cross">
          <input className="input" placeholder="eh?" />
          <button aria-label="Submit" className="btn ml6">
            Submit
          </button>
        </div>
      }
    />
  )
};

testCases.dark = {
  description: 'Dark',
  element: (
    <PopoverTrigger
      popoverProps={{
        coloring: 'dark'
      }}
      content="Dark coloring"
    />
  )
};

testCases.warning = {
  description: 'Warning',
  element: (
    <PopoverTrigger
      popoverProps={{
        coloring: 'warning'
      }}
      content="Warning coloring"
    />
  )
};

testCases.noPointer = {
  description: 'no pointer',
  element: (
    <PopoverTrigger
      popoverProps={{
        hasPointer: false
      }}
      content="No pointer here"
    />
  )
};

const noDisplayCases = {};

noDisplayCases.basic = {
  description: 'basic',
  component: Popover,
  props: {
    getAnchorElement: () => {},
    children: getPopoverContent()
  }
};

noDisplayCases.dark = {
  description: 'dark',
  component: Popover,
  props: {
    getAnchorElement: () => {},
    children: getPopoverContent(),
    coloring: 'dark'
  }
};

noDisplayCases.warning = {
  description: 'warning',
  component: Popover,
  props: {
    getAnchorElement: () => {},
    children: getPopoverContent(),
    coloring: 'warning'
  }
};

noDisplayCases.noPointer = {
  description: 'no pointer',
  component: Popover,
  props: {
    getAnchorElement: () => {},
    children: getPopoverContent(),
    hasPointer: false
  }
};

noDisplayCases.allProps = {
  description: 'all props',
  component: Popover,
  props: {
    getAnchorElement: () => {},
    children: getPopoverContent(),
    placement: 'left',
    padding: 'none',
    hasPointer: false,
    hideWhenAnchorIsOffscreen: true,
    allowPlacementAxisChange: false,
    containWithinViewport: false,
    clickOutsideCloses: false,
    escapeCloses: false,
    receiveFocus: false,
    onExit: () => {},
    ignoreClickWithinElement: () => {},
    getContainingElement: () => {},
    passthroughProps: {
      'data-test': true
    }
  }
};

export { testCases, noDisplayCases };
