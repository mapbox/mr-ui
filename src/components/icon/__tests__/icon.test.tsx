import React from 'react';
import { render } from '@testing-library/react';
import getWindow from '../../utils/get-window';
import Icon from '../icon';

jest.mock('../../utils/get-window');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWindowMock = getWindow as any;

describe('renders', () => {
  test('basic', () => {
    const { baseElement } = render(<Icon name='bike' />)
    expect(baseElement).toMatchSnapshot();
  });

  test('passthrough prop', () => {
    const props = {
      name: 'alert',
      passthroughProps: {
        'data-test': 'alert-icon'
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
        'data-test': 'alert-icon',
        style: { height: 36, width: 36 }
      }
    };

    const { baseElement } = render(<Icon {...props} />)
    expect(baseElement).toMatchSnapshot();
  });
});

describe('inline', () => {
  beforeEach(() => {
    const mockWindow = {
      getComputedStyle: jest.fn(() => ({
        'line-height': '14px'
      }))
    };
    getWindowMock.mockReturnValue(mockWindow);
  });

  test('renders', () => {
    const props = {
      name: 'check',
      inline: true
    };

    const { baseElement, getByTestId } = render(<Icon {...props} />)
    expect(baseElement).toMatchSnapshot();
    expect(getByTestId('icon-check')).toHaveClass('inline-block');
  });

  test('renders inline with derived height from computed line height', () => {
    const props = {
      name: 'check',
      inline: true
    };

    const { getByTestId } = render(<Icon {...props} />)
    expect(getByTestId('icon-check').style.height).toBe('14px');
  });

  test('after update, adjusts height to match line-height', () => {
    const props = {
      name: 'check',
      inline: true
    };

    const { rerender, getByTestId } = render(<Icon {...props} />)
    rerender(<Icon {...props} size={45} />);

    expect(getByTestId('icon-check').style.width).toBe('45px');
    expect(getByTestId('icon-check').style.height).toBe('14px');
  });
});