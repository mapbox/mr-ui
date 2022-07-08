import React from 'react';
import Tooltip from './tooltip';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Tooltip', () => {
  test('renders', () => {
    render(<Tooltip content="A tooltip"><span>trigger</span></Tooltip>)
    expect(screen.getByTestId('hey')).toBeInTheDocument();
  });
});
