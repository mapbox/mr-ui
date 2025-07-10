import React from 'react';
import Drawer from './drawer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Drawer', () => {
  const user = userEvent.setup();
  describe('basic', () => {
    const mockedOnExit = jest.fn();
    const props = {
      onExit: mockedOnExit,
      children: <div>Drawer body</div>
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Drawer {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', async () => {
      render(<Drawer {...props} />);
      await user.click(screen.getByTestId('drawer-overlay'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
  });

  describe('basic, left', () => {
    const mockedOnExit = jest.fn();
    const props = {
      onExit: mockedOnExit,
      children: <div>Drawer body</div>,
      side: 'left'
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Drawer {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', async () => {
      render(<Drawer {...props} />);
      await user.click(screen.getByTestId('drawer-overlay'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
  });

  describe('basic, right', () => {
    const mockedOnExit = jest.fn();
    const props = {
      onExit: mockedOnExit,
      children: <div>Drawer body</div>,
      side: 'right'
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Drawer {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', async () => {
      render(<Drawer {...props} />);
      await user.click(screen.getByTestId('drawer-overlay'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
  });
});