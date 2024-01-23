import React from 'react';
import Select from './select';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

window.HTMLElement.prototype.hasPointerCapture = jest.fn();
window.HTMLElement.prototype.scrollIntoView = jest.fn();

const SelectTest = (props) => {
  return (
    <Select {...props}>
      <button data-testid="trigger">trigger</button>
    </Select>
  )
}

describe('Select', () => {
  const defaultProps = {
    options: [
      {
        value: 'humpback-whale',
        label: 'Humpback whale',
      }, {
        value: 'rufous-hummingbird',
        label: 'Rufous Hummingbird'
      }, {
        value: 'sea-otter',
        label: 'Sea Otter'
      }, {
        value: 'snowshoe-hare',
        label: 'Snowshoe Hare'
      }
    ],
    onChange: jest.fn()
  };

  describe('basic', () => {
    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<SelectTest {...defaultProps} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      expect(baseElement).toMatchSnapshot();

      await user.click(screen.getByText("Sea Otter"));
      await waitFor(() => {
        expect(defaultProps.onChange).toHaveBeenCalledWith('sea-otter');
      });
    });
  });

  describe('dark', () => {
    const props = {
      ...defaultProps,
      coloring: 'dark'
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<SelectTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });

      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('all options', () => {
    const props = {
      ...defaultProps,
      placement: 'left',
      padding: 'none',
      hasPointer: false,
      avoidCollisions: false,
      hideWhenAnchorIsOffscreen: true,
      allowPlacementAxisChange: false,
      escapeCloses: false,
      onExit: () => {},
      passthroughProps: {
        'data-testid': 'foo'
      }
    };

    test('renders', async () => {
      const user = userEvent.setup();
      const { baseElement } = render(<SelectTest {...props} />);
      await user.click(screen.getByTestId("trigger"));
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      expect(baseElement).toMatchSnapshot();
    });
  });
});
