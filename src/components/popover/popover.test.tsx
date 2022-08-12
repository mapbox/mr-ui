import React, { useState } from 'react';
import Popover from './popover';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const PopoverTest = (props) => {
  const [active, setActive] = useState(false);
  return (
    <Popover active={active} {...props}>
      <button data-testid="trigger" onClick={() => setActive(true)}>trigger</button>
    </Popover>
  )
}

describe('Popover', () => {
  const props = {
    content: 'Popup content'
  };

  describe('basic', () => {
    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('dark', () => {
    function renderContent() {
      return 'Content is rendered'
    }

    const props = {
      coloring: 'dark',
      content: renderContent
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('warning', () => {
    const props = {
      coloring: 'warning',
      content: <span>HI there</span>
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('no arrow', () => {
    const props = {
      hasPointer: false,
      content: <div>no arrow</div>
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<PopoverTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
      expect(baseElement).toMatchSnapshot();
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
      content: (
        <>
          <span className="txt-kbd">Greetings</span>
          <span className="color-green txt-kbd">human</span>
        </>
      ),
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
      });
      expect(baseElement).toMatchSnapshot();
    });
  });
});
