import Toast from './toast';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Toast', () => {
  describe('render with options', () => {
    let mockedOnExit = jest.fn();
    let props = {
      content: 'Toast message',
      active: true,
      action: {
        text: 'Open folder',
        callback: jest.fn()
      },
      onExit: mockedOnExit
    };

    test('renders basic', () => {
      const { baseElement } = render(<Toast {...props}></Toast>);
      expect(baseElement).toMatchSnapshot();
    });

    test('renders without close', () => {
      render(<Toast {...props} closeButton={false} />);
      expect(screen.queryByTestId('toast-close')).toBeNull();
    });

    test('renders without action button', () => {
      render(
        <Toast
          content="toast without action"
          active={true}
          onExit={mockedOnExit}
        />
      );
      expect(screen.queryByTestId('toast-action')).toBeNull();
    });
  });

  describe('toast dismissed', () => {
    let mockedOnExit = jest.fn();
    const props = {
      content: 'Toast message',
      active: true,
      action: {
        text: 'Open folder',
        callback: jest.fn()
      },
      onExit: mockedOnExit,
      duration: 1000
    } as const;

    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('fires onExit after duration', () => {
      render(<Toast {...props}></Toast>);
      expect(mockedOnExit).toHaveBeenCalledTimes(0);
      jest.advanceTimersByTime(1001);
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
    test('fires onExit when closing with close button', () => {
      render(<Toast {...props}></Toast>);
      fireEvent.click(screen.getByTestId('toast-close'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });

    test('fires onExit when pressing action button', () => {
      render(<Toast {...props}></Toast>);
      fireEvent.click(screen.getByTestId('toast-action'));
      expect(mockedOnExit).toHaveBeenCalledTimes(1);
    });
  });
});
