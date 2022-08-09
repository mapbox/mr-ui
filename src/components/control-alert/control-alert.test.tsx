import React from 'react';
import ControlAlert from './control-alert';
import { screen, render, fireEvent } from '@testing-library/react';

describe('ControlAlert', () => {
  describe('basic error', () => {
    const props = {
      children: <span className="ml6">Drats.</span>,
      theme: 'error'
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlAlert {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('basic locked', () => {
    const props = {
      children: <span className="ml6">Nope.</span>,
      theme: 'locked'
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlAlert {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('basic success', () => {
    const props = {
      children: <span className="ml6">Woohoo!</span>,
      theme: 'success'
    } as const;

    test('renders as expected', () => {
      const { baseElement } = render(<ControlAlert {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('dismissive warning', () => {
    const mockOnClick = jest.fn();

    const props = {
      children: <span className="mx6">Uh oh...</span>,
      onButtonClick: mockOnClick,
      theme: 'warning'
    } as const;

    test('onButtonClick is called', () => {
      render(<ControlAlert {...props} />)
      fireEvent.click(screen.getByTestId('alert-dismiss'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('dismissive multiline error', () => {
    const mockOnClick = jest.fn();

    const props = {
      children: (
        <p className="mx6">
          This is the song that never ends.{' '}
          <a className="link" href="http://www.mapbox.com">
            Yes, it just goes on and on my friends.
          </a>{' '}
          Some people started singing it, not knowing what it was. And they'll
          continue singing it forever just because. This is the song that never
          ends.
        </p>
      ),
      onButtonClick: mockOnClick,
      theme: 'error'
    } as const;

    test('onButtonClick is called', () => {
      render(<ControlAlert {...props} />)
      fireEvent.click(screen.getByTestId('alert-dismiss'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
