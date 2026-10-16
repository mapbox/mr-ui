import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import CopyButton from '../copy-button';
import Copiable from './copiable';
import userEvent from '@testing-library/user-event';

const FEEDBACK_TIME = 2000;

describe('Copiable', () => {
  describe('basic', () => {
    const props = {
      value:
        'thetextyoucopythetextyoucopythetextyoucopythetext you copy the text you copy '
    };

    test('renders as expected', () => {
      const { baseElement } = render(<Copiable {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('selects the text to copy on focus', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />);

      act(() => {
        screen.getByTestId('copiable-text-el').focus();
      });

      await waitFor(() => {
        expect(window.getSelection().toString()).toBe(props.value);
      });
    });

    test('shows copy hint when focused', async () => {
      jest.useFakeTimers();
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />);

      act(() => {
        screen.getByTestId('copiable-text-el').focus();
      });

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      act(() => {
        jest.advanceTimersByTime(FEEDBACK_TIME + 100);
      });

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });

      jest.useRealTimers();
    });
  });

  describe('truncated', () => {
    const props = {
      truncated: true,
      value:
        'the text you copy the text you copy the text you copy the text you copy the text you copy '
    };

    test('renders as expected', () => {
      const { baseElement } = render(<Copiable {...props} />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('onCopy', () => {
    const mockOnCopy = jest.fn();
    const text =
      'the text you copy the text you copy the text you copy the text you copy the text you copy';

    const props = {
      onCopy: mockOnCopy,
      value: text
    };

    test('calls onCopy', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />);

      await userEvent.click(screen.getByTestId('copy-button'));

      await waitFor(() => {
        expect(mockOnCopy).toHaveBeenCalledTimes(1);
      });
      expect(mockOnCopy).toHaveBeenCalledWith(text);
    });

    test('calls onCopy when text is truncated', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      const propsWithTruncated = { ...props, truncated: true };
      render(<Copiable {...propsWithTruncated} />);

      await userEvent.click(screen.getByTestId('copy-button'));

      await waitFor(() => {
        expect(mockOnCopy).toHaveBeenCalledTimes(1);
      });
      expect(mockOnCopy).toHaveBeenCalledWith(text);
    });
  });
});
