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

  describe('with children', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      options: [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' }
      ],
      value: 'opt1',
      onChange: mockOnChange,
      children: <span data-testid="custom-display">Custom display</span>
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSelect {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('renders children content', () => {
      render(<ControlSelect {...props} />);
      expect(screen.getByTestId('custom-display')).toBeInTheDocument();
    });

    test('does not render the select arrow', () => {
      render(<ControlSelect {...props} />);
      expect(screen.queryByTestId('select-arrow')).toBeNull();
    });

    test('select is invisible and positioned absolutely', () => {
      render(<ControlSelect {...props} />);
      const select = screen.getByTestId('testinput-select');
      expect(select.className).toContain('absolute');
      expect(select.className).toContain('opacity0');
    });

    test('onChange is called when an option is selected', async () => {
      render(<ControlSelect {...props} />);
      await userEvent.selectOptions(screen.getByTestId('testinput-select'), 'opt1');
      await waitFor(() => {
        expect(mockOnChange).toHaveBeenCalledWith('opt1', 'testinput');
      });
    });

    test('disabled select uses cursor-default', () => {
      render(<ControlSelect {...props} disabled={true} />);
      const select = screen.getByTestId('testinput-select');
      expect(select.className).toContain('cursor-default');
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
