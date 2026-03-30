import React from 'react';
import Modal from './modal';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

describe('Modal', () => {
  describe('basic', () => {
    const mockedOnExit = jest.fn();
    const props = {
      accessibleTitle: 'Small modal title',
      accessibleDescription: 'Small modal description',
      size: 'small',
      onExit: mockedOnExit,
      children: <div>Content</div>,
      primaryAction: {
        text: 'Okay',
        callback: jest.fn()
      }
    } as const;

    afterEach(() => {
      cleanup();
    });

    test('renders', () => {
      const { baseElement } = render(<Modal {...props} />);
      expect(baseElement).toMatchSnapshot();
    });

    test('fires onExit', () => {
      render(<Modal {...props} />);
      fireEvent.click(screen.getByTestId('modal-close'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });

    test('does not fire onExit when underlay is clicked if exitOnUnderlayClicked is false', () => {
      render(<Modal {...props} exitOnUnderlayClicked={false}/>);
      fireEvent.click(screen.getByTestId('modal-overlay'));
      expect(mockedOnExit).toHaveBeenCalledTimes(0);
      fireEvent.click(screen.getByTestId('modal-close'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });

    test('allowEventBubbling disables event trapping', () => {
      const props = {
        children: 'content',
        accessibleTitle: 'Modal title',
        accessibleDescription: 'Modal description'
      };
      const { rerender } = render(<Modal {...props} />);
      expect(screen.getByTestId('event-trap')).toBeInTheDocument();
      rerender(<Modal {...props} allowEventBubbling={true} />);
      expect(screen.queryByTestId('event-trap')).not.toBeInTheDocument();
    });
  });

  describe('basic, large', () => {
    const mockedOnExit = jest.fn();
    const props = {
      accessibleTitle: 'Large modal title',
      accessibleDescription: 'Large modal description',
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
      accessibleDescription: 'Auto modal description',
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
      accessibleDescription: 'All options description',
      padding: 'none',
      margin: 'large',
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
      accessibleDescription: 'No onExit description',
      size: 'small',
      children: <div>You can't close me</div>
    } as const;

    render(<Modal {...props} />);
    expect(screen.queryByTestId('modal-close')).not.toBeInTheDocument();
  });
});
