import React from 'react';
import ControlText from './control-text';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlText', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'basic',
      onChange: mockOnChange
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is called with input id and value', async () => {
      render(<ControlText {...props} />)
      await userEvent.type(screen.getByTestId('testinput-input'), 'f');

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
      const { baseElement } = render(<ControlText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is *not* called with input id and value', async () => {
      render(<ControlText {...props} />)
      await userEvent.type(screen.getByTestId('testinput-input'), 'steve');

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('validation error', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'basic',
      onChange: mockOnChange,
      validationError: 'oh no!'
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('validation error (inline)', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'basic',
      onChange: mockOnChange,
      errorStyle: 'inline',
      validationError: 'oh no!'
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('popover toggles on input focus/blur states', async () => {
      render(<ControlText {...props} />)

      screen.getByTestId('testinput-input').focus();

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      screen.getByTestId('testinput-input').blur();

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    test('popover toggles on button focus/blur states', async () => {
      render(<ControlText {...props} />)

      screen.getByTestId('validation-error').focus();

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      screen.getByTestId('validation-error').blur();

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    test('popover toggles on container mouseOver/mouseOut states', async () => {
      render(<ControlText {...props} />)

      fireEvent.mouseOver(screen.getByTestId('control-text-container'));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      fireEvent.mouseOut(screen.getByTestId('control-text-container'));

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    test('disabled onMouseOut behaviour when onFocus is set', async () => {
      render(<ControlText {...props} />)

      screen.getByTestId('validation-error').focus();

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      fireEvent.mouseOut(screen.getByTestId('control-text-container'));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
    });
  });

  describe('all options', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'All options',
      type: 'email',
      validationError: 'oh no!',
      errorStyle: 'inline',
      popoverProps: {
        coloring: 'dark',
        padding: 'small'
      },
      placeholder: 'Enter an email address',
      value: 'foo@bar.baz',
      optional: true,
      autoFocus: true,
      noAuto: true,
      aside: <span>Aside text</span>,
      themeControlInput: 'txt-bold input',
      themeControlWrapper: 'bg-gray-faint',
      themeLabel: 'txt-s txt-bold',
      onChange: mockOnChange
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlText {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
