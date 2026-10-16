import React from 'react';
import CopyButton from './copy-button';
import { render, waitFor, screen } from '@testing-library/react';
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

    test('copies text and changes state on click', async () => {
      render(<CopyButton {...props} />)

      await userEvent.click(screen.getByTestId('copy-button'));

      expect(await navigator.clipboard.readText()).toBe(props.text);
      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
      });
    });
  });

  describe('all props',() => {
    const mockOnCopy = jest.fn();
    const props = {
      text: 'more copiable text',
      onCopy: mockOnCopy,
      className: 'px6 py6 btn btn--purple btn--stroke',
      focusTrapPaused: true,
      block: true,
      tooltipColoring: 'dark',
      tooltipTextSize: 'none',
      children: (
        <span>A custom child in place of the visual button</span>
      ),
      passthroughProps: {
        'data-testid': 'foo'
      }
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<CopyButton {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('changes state on click', async () => {
      render(<CopyButton {...props} />)

      await userEvent.click(screen.getByTestId('copy-button'));

      await waitFor(() => {
        expect(screen.getByText('Copied!')).toBeInTheDocument();
      });

      await waitFor(() => {
        expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
      });
    });

    test('calls onCopy callback', async () => {
      render(<CopyButton {...props} />)

      await userEvent.click(screen.getByTestId('copy-button'));

      await waitFor(() => {
        expect(mockOnCopy).toHaveBeenCalledTimes(1);
      });
      expect(mockOnCopy).toHaveBeenCalledWith('more copiable text');
    });

    test('does not call onCopy or show feedback when copying fails', async () => {
      const writeText = jest
        .spyOn(navigator.clipboard, 'writeText')
        .mockRejectedValue(new Error('denied'));
      render(<CopyButton {...props} />)

      await userEvent.click(screen.getByTestId('copy-button'));

      expect(writeText).toHaveBeenCalledWith('more copiable text');
      expect(mockOnCopy).not.toHaveBeenCalled();
      expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
      writeText.mockRestore();
    });

    test('does nothing when the Clipboard API is unavailable', async () => {
      const clipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: undefined
      });
      const consoleError = jest.spyOn(console, 'error');
      render(<CopyButton {...props} />)

      await userEvent.click(screen.getByTestId('copy-button'));

      expect(consoleError).not.toHaveBeenCalled();
      expect(mockOnCopy).not.toHaveBeenCalled();
      expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
      consoleError.mockRestore();
      Object.defineProperty(navigator, 'clipboard', clipboard);
    });
  });
});
