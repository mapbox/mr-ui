import React, { useState } from 'react';
import Popover from './popover';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const PopoverTest = (props) => {
  const [active, setActive] = useState(false);
  return (
    <Popover active={active} content="A tooltip" {...props}>
      <button data-testid="trigger" onClick={() => setActive(true)}>trigger</button>
    </Popover>
  )
}

describe('Popover', () => {
  describe('basic', () => {
    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(baseElement).toMatchSnapshot();
      });
    });
  });

  describe('dark', () => {
    const props = {
      coloring: 'dark'
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(baseElement).toMatchSnapshot();
      });
    });
  });

  describe('warning', () => {
    const props = {
      coloring: 'warning'
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(baseElement).toMatchSnapshot();
      });
    });
  });

  describe('no arrow', () => {
    const props = {
      hasPointer: false
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(baseElement).toMatchSnapshot();
      });
    });
  });

  describe('all options', () => {
    const props = {
      placement: 'left',
      padding: 'none',
      hasPointer: false,
      hideWhenAnchorIsOffscreen: true,
      allowPlacementAxisChange: false,
      containWithinViewport: false,
      clickOutsideCloses: false,
      escapeCloses: false,
      onExit: () => {},
      passthroughProps: {
        'data-testid': 'foo'
      }
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(baseElement).toMatchSnapshot();
      });
    });
  });
});
