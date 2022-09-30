import React from 'react';
import ControlSwitch from '../control-switch';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlSwitch', () => {
  describe('basic', () => {
    const props = {
      id: 'test',
      label: 'Basic',
      onChange: jest.fn()
    };

    test('renders', () => {
      const { baseElement } = render(<ControlSwitch {...props} />)
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange gets called with input id and value', async () => {
      render(<ControlSwitch {...props} />)
      await userEvent.click(screen.getByTestId('test-switch'));
      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith(true, 'test');
    });
  });

  describe('disabled', () => {
    test('disabled state works', async () => {
      const props = {
        id: 'test',
        label: 'Basic',
        onChange: jest.fn(),
        disabled: true
      };

      render(<ControlSwitch {...props} />)
      const switchControl = screen.getByTestId('test-switch');
      await userEvent.click(switchControl);
      expect(props.onChange).not.toHaveBeenCalled();
      expect(switchControl).toHaveProperty('disabled', true);
    });
  });
});
