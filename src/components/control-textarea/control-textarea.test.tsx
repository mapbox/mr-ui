import React from 'react';
import ControlTextarea from './control-textarea';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlTextarea', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'Basic',
      onChange: mockOnChange
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlTextarea {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is called with input id and value', async () => {
      render(<ControlTextarea {...props} />)
      await userEvent.type(screen.getByTestId('testinput-textarea'), 'f');

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(1);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith('f', 'testinput');
      });
    });
  });

  describe('disabled', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'basic',
      onChange: mockOnChange,
      disabled: true
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlTextarea {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is called with input id and value', async () => {
      render(<ControlTextarea {...props} />)
      await userEvent.type(screen.getByTestId('testinput-textarea'), 'steve');

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('all options', () => {
    const props = {
      id: 'testinput',
      label: 'All options',
      validationError: 'oh no!',
      noAuto: true,
      optional: true,
      autoFocus: true,
      aside: <span>Aside text</span>,
      placeholder: 'Some cool placeholder text',
      value: 'Some cool default value',
      themeControlTextarea: 'w-full border--pink round-bold px12 py12',
      themeControlWrapper: 'bg-red px12 py12',
      themeLabel: 'txt-s',
      onChange: jest.fn()
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlTextarea {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
