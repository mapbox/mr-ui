import React from 'react';
import CopyButton from './copy-button';
import { act, render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('CopyButton', () => {

  describe('basic', () => {
    const props = {
      text: 'Copied by the default test case'
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CopyButton {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('changes state on click', async () => {
      render(<CopyButton {...props} />)

      await act(async () => {
        await userEvent.click(screen.getByTestId('copy-button'));
      });

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });
  });

  describe('all props', () => {
    const mockOnCopy = jest.fn();
    const props = {
      text: 'more copiable text',
      onCopy: mockOnCopy,
      className: 'px6 py6 btn btn--purple btn--stroke',
      focusTrapPaused: true,
      block: true,
      passthroughProps: {
        'data-testid': 'foo'
      }
    };

    test('renders as expected', () => {
      const { baseElement } = render(<CopyButton {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('changes state on click', async () => {
      render(<CopyButton {...props} />)

      await act(async () => {
        await userEvent.click(screen.getByTestId('copy-button'));
      });

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    test('calls onCopy callback', async () => {
      render(<CopyButton {...props} />)

      await act(async () => {
        await userEvent.click(screen.getByTestId('copy-button'));
      });

      expect(mockOnCopy).toHaveBeenCalledTimes(1);
      expect(mockOnCopy).toHaveBeenCalledWith('more copiable text');
    });
  });
});
