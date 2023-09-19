import React from 'react';
import { screen, render } from '@testing-library/react';
import Icon from './icon';

describe('basic', () => {
  test('renders', () => {
    const { baseElement } = render(<Icon name='bike' />)
    expect(baseElement).toMatchSnapshot();
  });

  test('passthrough prop', () => {
    const props = {
      name: 'alert',
      passthroughProps: {
        'data-testid': 'alert-icon'
      }
    };

    const { baseElement } = render(<Icon {...props} />)
    expect(baseElement).toMatchSnapshot();
  });

  test('special size', () => {
    const props = {
      name: 'alert',
      size: 36
    };

    const { baseElement } = render(<Icon {...props} />)
    expect(baseElement).toMatchSnapshot();
  });

  test('special size via style', () => {
    const props = {
      name: 'alert',
      passthroughProps: {
        'data-testid': 'alert-icon',
        style: { height: '36px', width: '36px' }
      }
    };

    const { baseElement } = render(<Icon {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('inline', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: () => ({
        'line-height': '14px'
      })
    });
  });

  test('renders', () => {
    const props = {
      name: 'check',
      inline: true
    };

    const { baseElement } = render(<Icon {...props} />)
    expect(baseElement).toMatchSnapshot();
    expect(screen.getByTestId('icon-check')).toHaveClass('inline-block');
  });

  test('renders inline with derived height from computed line height', () => {
    const props = {
      name: 'check',
      inline: true
    };

    render(<Icon {...props} />)
    expect(screen.getByTestId('icon-check').style.height).toBe('14px');
  });

  test('after update, adjusts height to match line-height', () => {
    const props = {
      name: 'check',
      inline: true
    };

    const { rerender } = render(<Icon {...props} />)
    rerender(<Icon {...props} size={45} />);

    expect(screen.getByTestId('icon-check').style.width).toBe('45px');
    expect(screen.getByTestId('icon-check').style.height).toBe('14px');
  });
});
