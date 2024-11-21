import React from 'react';
import delay from 'delay';
import { act, render, screen, waitFor } from '@testing-library/react';
import CopyButton from '../copy-button';
import Copiable from './copiable';
import select from 'select';
import userEvent from '@testing-library/user-event';

const FEEDBACK_TIME = 2000;

jest.mock('select', () => jest.fn());
jest.mock('os-key', () =>
  jest.fn(() => ({ primaryMeta: true, meta: { symbol: 'eh' } }))
);

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

    test('calls select library with element holding text to copy', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />);

      act(() => {
        screen.getByTestId('copiable-text-el').focus();
      });

      await waitFor(() => {
        expect(select).toHaveBeenCalled();
      });
    });

    test('shows copy hint when focused', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />);

      act(() => {
        screen.getByTestId('copiable-text-el').focus();
      });

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      await delay(FEEDBACK_TIME + 100).then(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
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

      expect(mockOnCopy).toHaveBeenCalledTimes(1);
      expect(mockOnCopy).toHaveBeenCalledWith(text);
    });

    test('calls onCopy when text is truncated', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      const propsWithTruncated = { ...props, truncated: true };
      render(<Copiable {...propsWithTruncated} />);

      await userEvent.click(screen.getByTestId('copy-button'));

      expect(mockOnCopy).toHaveBeenCalledTimes(1);
      expect(mockOnCopy).toHaveBeenCalledWith(text);
    });
  });
});
