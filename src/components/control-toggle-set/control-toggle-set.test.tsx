import React from 'react';
import ControlToggleSet from './control-toggle-set';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlToggleGroup', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      options: [
        { label: 'Toggle 1', value: 'Toggle value 1' },
        { label: 'Toggle 2', value: 'Toggle value 2' }
      ],
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlToggleSet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange gets called with input id and value', async () => {
      render(<ControlToggleSet {...props} />)
      await userEvent.click(screen.getByLabelText('Toggle 1'));

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(1);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith('Toggle value 1', 'testinput');
      });
    });
  });

  describe('disabled', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      options: [
        { label: 'Option 1', value: 'Option value 1', disabled: true },
        { label: 'Option 2', value: 'Option value 2' }
      ],
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlToggleSet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test.only('onChange is *not* called with input id and value', async () => {
      render(<ControlToggleSet {...props} />)

      await userEvent.click(screen.getByTestId('testinput-0-input'));
      expect(screen.getByTestId('testinput-0-input')).toBeDisabled();

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('all options', () => {
    const props = {
      id: 'testinput',
      options: [
        { label: <span>Option 1</span>, value: 'Option value 1' },
        { label: <span>Option 2</span>, value: 'Option value 2' },
        { label: <span>Option 3</span>, value: 'Option value 3' }
      ],
      validationError: 'oh no!',
      value: 'Option value 1',
      autoFocus: true,
      optional: true,
      themeToggleGroup: 'bg-red border border--2 border--red',
      themeToggleContainer: 'w-full',
      themeToggle: 'toggle--white toggle--active-red',
      themeControlWrapper: 'bg-red-light px12 py12',
      onChange: jest.fn()
    };

    test('renders', () => {
      const { baseElement } = render(<ControlToggleSet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
