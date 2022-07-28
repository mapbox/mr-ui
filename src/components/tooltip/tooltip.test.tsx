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
});
