import React from 'react';
import Tooltip from './tooltip';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tooltip', () => {
  test('renders', async () => {
    render(<Tooltip content="A tooltip"><span data-testid="trigger">trigger</span></Tooltip>);
    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });

  test('renders content as function', async () => {

    function renderContent() {
      return 'Content is rendered'
    }

    render(<Tooltip content={renderContent}><span data-testid="trigger">trigger</span></Tooltip>);
    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByRole('tooltip').textContent).toEqual('Content is rendered');
    });
  });

  test('does not render tooltip when disabled', async () => {
    render(<Tooltip disabled content="A tooltip"><span data-testid="trigger">trigger</span></Tooltip>);
    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  test('keeps the same trigger DOM node when the parent re-renders', () => {
    const { rerender } = render(
      <Tooltip content="A tooltip">
        <span data-testid="trigger">trigger</span>
      </Tooltip>
    );
    const initialTrigger = screen.getByTestId('trigger');

    rerender(
      <Tooltip content="Updated tooltip">
        <span data-testid="trigger">trigger</span>
      </Tooltip>
    );

    expect(screen.getByTestId('trigger')).toBe(initialTrigger);
  });

  test('wraps a disabled child in a focusable span trigger', async () => {
    render(
      <Tooltip content="A tooltip">
        <button disabled>trigger</button>
      </Tooltip>
    );
    const [wrapper, button] = screen.getAllByRole('button');
    expect(button).toBeDisabled();
    expect(wrapper).toContainElement(button);
    expect(wrapper.tagName).toBe('SPAN');
    expect(wrapper).toHaveAttribute('role', 'button');
    expect(wrapper).toHaveAttribute('tabindex', '0');
    expect(wrapper).toHaveClass('inline-block');

    await userEvent.hover(wrapper);

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });

  test('does not wrap an enabled child', () => {
    render(
      <Tooltip content="A tooltip">
        <button>trigger</button>
      </Tooltip>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0].tagName).toBe('BUTTON');
  });
});
