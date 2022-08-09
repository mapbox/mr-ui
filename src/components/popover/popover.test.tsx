import React, { useState } from 'react';
import Popover from './popover';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const PopoverTest = () => {
  const [active, setActive] = useState(false);
  return (
    <Popover active={active} content="A tooltip">
      <button data-testid="trigger" onClick={() => setActive(true)}>trigger</button>
    </Popover>
  )
}

describe('Popover', () => {
  test('renders', async () => {
    render(<PopoverTest />);

    await userEvent.click(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  /*
  describe(noDisplayCases.basic.description, () => {

  test('renders', async () => {
    render(<Tooltip content="A tooltip"><span data-testid="trigger">trigger</span></Tooltip>);
    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });



    beforeEach(() => {
      testCase = noDisplayCases.basic;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.dark.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.dark;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.warning.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.warning;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.noPointer.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.noPointer;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(noDisplayCases.allProps.description, () => {
    beforeEach(() => {
      testCase = noDisplayCases.allProps;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  */
});

/*
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
*/

