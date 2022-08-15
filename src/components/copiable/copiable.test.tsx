import React from 'react';
import delay from 'delay';
import { render, screen, waitFor } from '@testing-library/react';
import CopyButton from '../copy-button';
import Copiable from './copiable';
import select from 'select';

const FEEDBACK_TIME = 2000;

jest.mock('select', () => jest.fn());
jest.mock('os-key', () =>
  jest.fn(() => ({ primaryMeta: true, meta: { symbol: 'eh' } }))
);

describe('Copiable', () => {

  describe('basic', () => {
    const props = {
      value: 'thetextyoucopythetextyoucopythetextyoucopythetext you copy the text you copy '
    };

    test('renders as expected', () => {
      const { baseElement } = render(<Copiable {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('calls select library with element holding text to copy', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />)

      screen.getByTestId('copiable-text-el').focus();

      await waitFor(() => {
        expect(select).toHaveBeenCalled();
      });
    });

    test('shows copy hint when focused', async () => {
      jest.spyOn(CopyButton, 'isCopySupported').mockImplementation(() => true);
      render(<Copiable {...props} />)

      screen.getByTestId('copiable-text-el').focus();

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      delay(FEEDBACK_TIME + 100).then(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });
  });

  describe('truncated', () => {
    const props = {
      truncated: true,
      value: 'the text you copy the text you copy the text you copy the text you copy the text you copy '
    };

    test('renders as expected', () => {
      const { baseElement } = render(<Copiable {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
