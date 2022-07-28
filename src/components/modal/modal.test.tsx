import React from 'react';
import Modal from './modal';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Modal', () => {
  describe('basic', () => {
    const mockedOnExit = jest.fn();
    const props = {
      accessibleTitle: 'Small modal title',
      size: 'small',
      onExit: mockedOnExit,
      children: <div>Content</div>,
      primaryAction: {
        text: 'Okay',
        callback: jest.fn()
      }
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Modal {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', () => {
      render(<Modal {...props} />);
      fireEvent.click(screen.getByTestId('modal-close'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });

    test('allowEventBubbling disables event trapping', () => {
      const props = {
        children: 'content',
        accessibleTitle: 'Modal title'
      };
      const { rerender } = render(<Modal {...props} />);
      expect(screen.getByTestId('event-trap')).toBeInTheDocument();
      rerender(<Modal {...props } allowEventBubbling={true} />);
      expect(screen.queryByTestId('event-trap')).not.toBeInTheDocument();
    });
  });

  describe('basic, large', () => {
    const mockedOnExit = jest.fn();
    const props = {
      accessibleTitle: 'Large modal title',
      onExit: mockedOnExit,
      children: <div>Large modal body</div>,
      primaryAction: {
        text: 'Okay',
        callback: jest.fn(),
        destructive: true
      },
      secondaryAction: {
        text: 'Cancel',
        callback: jest.fn()
      },
      tertiaryAction: {
        text: 'Give up',
        callback: jest.fn()
      }
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Modal {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', () => {
      render(<Modal {...props} />);
      fireEvent.click(screen.getByTestId('modal-close'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
  });

  describe('basic, auto', () => {
    const mockedOnExit = jest.fn();
    const props = {
      accessibleTitle: 'Auto modal title',
      onExit: mockedOnExit,
      size: 'auto',
      children: <div>No fixed width on the modal container. But very tall.</div>
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Modal {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', () => {
      render(<Modal {...props} />);
      fireEvent.click(screen.getByTestId('modal-close'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
  });

  describe('all options', () => {
    const props = {
      accessibleTitle: 'All options',
      padding: 'none',
      size: 'small',
      onExit: jest.fn(),
      initialFocus: '#foo',
      padded: false,
      children: (
        <div>
          <div className="mb12">I am a message</div>
          <button aria-label="press me" id="foo" className="btn">
            press me
          </button>
        </div>
      )
    } as const;

    test('renders', () => {
      const { baseElement } = render(<Modal {...props} />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('optional on exit', () => {
    const props = {
      accessibleTitle: 'No onExit passed as prop',
      size: 'small',
      children: <div>You can't close me</div>
    } as const;

    render(<Modal {...props} />);
    expect(screen.queryByTestId('modal-close')).not.toBeInTheDocument();
  });
});
