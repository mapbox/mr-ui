import React from 'react';
import ControlSwitch from '../control-switch';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ControlSwitch', () => {
  let wrapper;

  describe('basic', () => {
    const props = {
      id: 'test',
      label: 'Basic',
      onChange: jest.fn()
    };

    beforeEach(() => {
      wrapper = render(<ControlSwitch {...props} />)
    });

    test('renders', () => {
      expect(wrapper.baseElement).toMatchSnapshot();
    });

    test('onChange gets called with input id and value', async () => {
      await userEvent.click(wrapper.getByTestId('test-switch'));
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

      const { getByTestId } = render(<ControlSwitch {...props} />)
      const switchControl = getByTestId('test-switch');
      await userEvent.click(switchControl);
      expect(props.onChange).not.toHaveBeenCalled();
      expect(switchControl).toHaveProperty('disabled', true);
    });
  });
});
