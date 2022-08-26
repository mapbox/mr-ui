import React from 'react';
import ControlRange from './control-range';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

describe('ControlRange', () => {
  describe('basic', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      onChange: mockOnChange
    }

    test('renders', () => {
      const { baseElement } = render(<ControlRange {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      onChange: mockOnChange,
      disabled: true
    }

    test('renders', () => {
      const { baseElement } = render(<ControlRange {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('all options', () => {
    const mockOnChange = jest.fn();
    const props = {
      id: 'testinput',
      label: 'All options',
      validationError: 'oh no!',
      value: [200, 400, 600],
      min: 100,
      max: 1000,
      step: 100,
      optional: true,
      autoFocus: true,
      aside: <span>Aside text</span>,
      themeControlRange: 'range--s range--red',
      themeControlRangeActive: 'bg-red-dark',
      themeControlWrapper: 'bg-red-light',
      themeLabel: 'txt-s txt-bold color-white',
      onChange: mockOnChange
    }

    test('renders', () => {
      const { baseElement } = render(<ControlRange {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
