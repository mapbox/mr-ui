import React from 'react';
import Tooltip from './tooltip';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tooltip', () => {
  test('renders', async () => {
    render(<Tooltip data-testid='test-tooltip' content="A tooltip"><span data-testid="trigger">trigger</span></Tooltip>);
    userEvent.hover(screen.getByTestId("trigger"));
    waitFor(() => {
      expect(screen.getByTestId('test-tooltip')).toBeInTheDocument();
    });
  });
});
