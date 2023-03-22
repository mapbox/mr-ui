import React from 'react';
import ContextMenu from './context-menu';
import { screen, render, act, fireEvent } from '@testing-library/react';

describe('ContextMenu', () => {
  // Flush microtasks see https://floating-ui.com/docs/react#testing
  // eslint-disable-next-line testing-library/no-unnecessary-act
  const waitForPosition = () => act(async () => {});

  describe('basic', () => {
    const props = {
      onChange: jest.fn(),
      options: [{
        title: 'Options',
        options: [
          { label: 'Option 1', value: '1', keyCode: '⌘+1' },
          { label: 'Option 2', value: '2', keyCode: '⌘+2' }
        ]
      }]
    };

    test('renders', async () => {
      const { baseElement } = render(<ContextMenu {...props} ><div data-testid="menu-trigger" /></ContextMenu>)
      await waitForPosition();
      fireEvent.contextMenu(screen.getByTestId('menu-trigger'));
      expect(baseElement).toMatchSnapshot();
    });

    test('onChange is called', async () => {
      render(<ContextMenu {...props} ><div data-testid="menu-trigger" /></ContextMenu>)
      await waitForPosition();
      fireEvent.contextMenu(screen.getByTestId('menu-trigger'));
      fireEvent.click(screen.getByText('Option 1'));
      expect(props.onChange).toHaveBeenCalledTimes(1);
      expect(props.onChange).toHaveBeenCalledWith('1');
    });
  });

  describe('disabled', () => {
    const props = {
      onChange: jest.fn(),
      options: [{
        title: 'Options',
        options: [
          { label: 'Option 1', value: '1', keyCode: '⌘+1', disabled: true },
          { label: 'Option 2', value: '2', keyCode: '⌘+2' }
        ]
      }]
    };

    test('onChange is *not* called', async () => {
      render(<ContextMenu {...props} ><div data-testid="menu-trigger" /></ContextMenu>)
      await waitForPosition();
      fireEvent.contextMenu(screen.getByTestId('menu-trigger'));
      fireEvent.click(screen.getByText('Option 1'));
      expect(props.onChange).toHaveBeenCalledTimes(0);
    });
  });

  describe('all options', () => {
    const props = {
      options: [{
        title: 'Options',
        options: [
          { label: <span>Option 1</span>, value: 'Option value 1', keyCode: '1', disabled: true },
          { label: <span>Option 2</span>, value: 'Option value 2', options: [{
            title: 'More options for 2',
            options: [
              { label: 'Option 2a', value: '2a', keyCode: 'a', disabled: true },
              { label: 'Option 2b', value: '2b', keyCode: 'b' }
            ]
          }, {
            title: 'Even more options for 2',
            options: [
              { label: 'Option 2c', value: '2d', disabled: true },
              { label: 'Option 2d', value: '2c' }
            ]
          }]},
          { label: <span>Option 3</span>, value: 'Option value 3' }
        ]
      }],
      themeControlWrapper: 'bg-gray-dark px6 py6 txt-s wmin240',
      themeItem: 'px6 py6 round color-red-on-hover bg-red-lighter-on-hover',
      themeTitle: 'px6 py6 txt-bold',
      themeSeparator: 'border-t border--red-light my6',
      onChange: jest.fn()
    };

    test('renders', async () => {
      const { baseElement } = render(<ContextMenu {...props} ><div data-testid="menu-trigger" /></ContextMenu>)
      await waitForPosition();
      fireEvent.contextMenu(screen.getByTestId('menu-trigger'));
      await waitForPosition();
      expect(baseElement).toMatchSnapshot();
    });
  });
});
