import React from 'react';
import ControlRadioSet from './control-radio-set';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlRadioSet', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      options: [
        { label: 'Option 1', value: 'Option value 1' },
        { label: 'Option 2', value: 'Option value 2' }
      ],
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlRadioSet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange gets called with input id and value', async () => {
      render(<ControlRadioSet {...props} />)
      await userEvent.click(screen.getByLabelText('Option 1'));

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(1);
      });

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith('Option value 1', 'testinput');
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
      const { baseElement } = render(<ControlRadioSet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is *not* called with input id and value', async () => {
      render(<ControlRadioSet {...props} />)

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
      themeRadioContainer: 'w-full',
      themeRadio: 'radio--white radio--active-red mr6',
      themeControlWrapper: 'bg-red-light',
      onChange: jest.fn()
    };

    test('renders', () => {
      const { baseElement } = render(<ControlRadioSet {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
