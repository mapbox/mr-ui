import React from 'react';
import PropTypes from 'prop-types';
import getScrollableParents from '../get-scrollable-parents';

const testCases = {};

class GetScrollableParentsTest extends React.Component {
  static propTypes = {
    testId: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    extraClasses: PropTypes.string
  };

  state = { scrollableParentsTestIds: [] };
  el = null;

  componentDidMount() {
    if (!this.el) return;
    const scrollableParents = getScrollableParents(this.el);

    scrollableParents.forEach((parent) => {
      if (parent === window) parent = document.body;
      const boxShadows = parent.style.boxShadow
        ? parent.style.boxShadow.split(',')
        : [];
      boxShadows.push(
        `inset 0 0 0 ${3 * (boxShadows.length + 1)}px ${this.props.color}`
      );
      parent.style.boxShadow = boxShadows.map((s) => s.trim()).join(', ');
    });

    const scrollableParentsTestIds = scrollableParents.map((parent) => {
      if (parent === window) return 'window';
      return parent.getAttribute('data-test');
    });

    this.setState({ scrollableParentsTestIds });
  }

  registerEl = (element) => {
    this.el = element;
  };

  render() {
    const output =
      this.state.scrollableParentsTestIds.length === 0
        ? 'none'
        : this.state.scrollableParentsTestIds.sort().join(', ');
    let classes = 'color-white px6 py6';
    if (this.props.extraClasses) classes += ` ${this.props.extraClasses}`;
    return (
      <div
        data-test={this.props.testId}
        ref={this.registerEl}
        className={classes}
        style={{ backgroundColor: this.props.color }}
      >
        {output}
      </div>
    );
  }
}

testCases.noNesting = {
  description: 'no nesting',
  element: <GetScrollableParentsTest testId="noNesting" color="purple" />
};

testCases.nestedTwice = {
  description: 'nested in two scrollable parents, one with overflow-always',
  element: (
    <div
      data-test="nestedTwice-1"
      className="bg-darken10 h72 overflow-auto scroll-styled px6 py6"
    >
      <div
        data-test="nestedTwice-2"
        className="bg-darken10 h96 overflow-always scroll-styled px6 py6"
      >
        <GetScrollableParentsTest testId="nestedTwice" color="red" />
      </div>
    </div>
  )
};

testCases.trickNested = {
  description:
    'nested in one auto-scrollable parent inside non-scrollable parent',
  element: (
    <div data-test="trickNested-1" className="bg-darken10 h120 px6 py6">
      <div
        data-test="trickNested-2"
        className="bg-darken10 h48 overflow-auto scroll-styled px6 py6"
      >
        <GetScrollableParentsTest testId="trickNested" color="blue" />
      </div>
    </div>
  )
};

testCases.absolute = {
  description: 'absolutely positioned to avoid one of two scrollable parents',
  element: (
    <div data-test="absolute-1" className="bg-darken10 relative">
      <div
        data-test="absolute-2"
        className="bg-darken10 h120 overflow-auto scroll-styled px6 py6"
      >
        some text inside the statically positioned parent
        <div
          data-test="absolute-3"
          className="bg-darken10 absolute top left mx3 my3"
        >
          <GetScrollableParentsTest testId="absolute" color="orange" />
        </div>
        "
      </div>
    </div>
  )
};

testCases.fixed = {
  description: 'fixed but inside auto-scrollable parent',
  element: (
    <div data-test="fixed-1" className="overflow-auto scroll-styled">
      See pink box in bottom left
      <GetScrollableParentsTest
        testId="fixed"
        color="pink"
        extraClasses="fixed bottom left"
      />
    </div>
  )
};

testCases.insideFixed = {
  description: 'inside a fixed auto-scrollable parent',
  element: (
    <div data-test="insideFixed-1">
      See green box in top right
      <div
        data-test="insideFixed-2"
        className="fixed top right overflow-auto scroll-styled"
      >
        <GetScrollableParentsTest testId="insideFixed" color="green" />
      </div>
    </div>
  )
};

export { testCases };
