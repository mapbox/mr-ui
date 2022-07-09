import React from 'react';
import Tooltip from './tooltip';
import { render, act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tooltip', () => {
  test('renders', async () => {
    render(<Tooltip data-testid='test-tooltip' content="A tooltip"><span data-testid="trigger">trigger</span></Tooltip>);
    await userEvent.hover(screen.getByTestId("trigger"));

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });
});
