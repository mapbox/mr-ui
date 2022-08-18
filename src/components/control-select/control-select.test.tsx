import React from 'react';
import ControlSelect from './control-select';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlSelect', () => {

  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'Basic',
      options: [
        { label: 'Option 1', value: 'Option value 1' },
        { label: 'Option 2', value: 'Option value 2' }
      ],
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSelect {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is called with input id and value', async () => {
      render(<ControlSelect {...props} />)

      await userEvent.selectOptions(screen.getByTestId('testinput-select'), 'Option value 1');

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
      label: 'Basic',
      disabled: true,
      options: [
        { label: 'Option 1', value: 'Option value 1' },
        { label: 'Option 2', value: 'Option value 2' }
      ],
      onChange: mockOnChange
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSelect {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is *not* called with input id and value', async () => {
      render(<ControlSelect {...props} />)

      await userEvent.selectOptions(screen.getByTestId('testinput-select'), 'Option value 1');

      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('grouped dropdown options', () => {
    const props = {
      id: 'testinput',
      label: 'Basic',
      disabled: true,
      options: [
        {
          label: 'Group One',
          options: [
            {
              label: 'Foo',
              value: 'foo'
            },
            {
              label: 'Bar',
              value: 'bar'
            }
          ]
        },
        {
          label: 'Group two',
          options: [
            {
              label: 'Baz',
              value: 'baz'
            },
            {
              label: 'Qux',
              value: 'qux'
            }
          ]
        }
      ],
      onChange: jest.fn()
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSelect {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('supported values', () => {
    const props = {
      id: 'value',
      label: 'Basic',
      options: [
        { label: 'Empty string', value: '' },
        { label: 'String', value: 'foo' },
        { label: 'Number', value: 123 }
      ],
      onChange: jest.fn()
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSelect {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('all options', () => {
    const props = {
      id: 'allOptions',
      options: [
        { label: 'Option 1', value: 'Option value 1' },
        { label: 'Option 2', value: 'Option value 2' },
        { label: 'Option 3', value: 'Option value 3', disabled: true }
      ],
      validationError: 'oh no!',
      value: 'Option value 2',
      autoFocus: true,
      optional: true,
      label: 'All options',
      aside: <span>Aside text</span>,
      themeControlSelectContainer: 'color-white',
      themeControlSelect: 'select--red',
      themeControlWrapper: 'bg-red-light',
      themeLabel: 'color-white',
      onChange: jest.fn()
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSelect {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
