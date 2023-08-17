import React from 'react';
import { render, screen, act } from '@testing-library/react';
import MinimumDurationLoader from './minimum-duration-loader';

const children = <span data-testid='test-content'>Content</span>;
const customLoader = <span>Custom Loader</span>;

describe('MinimumDurationLoader', () => {
  describe('default duration and loader, not loaded on mount', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    const props = {
      children,
      isLoaded: false
    };

    test('renders the loading indicator and doesn\'t render the content', () => {
      render(<MinimumDurationLoader {...props} />)
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
    });

    test('renders the content 1s after `isLoaded` prop changes', () => {
      const { rerender } = render(<MinimumDurationLoader {...props} />)

      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();

      rerender(<MinimumDurationLoader {...{...props, isLoaded: true}} />)

      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();

     act(() => jest.advanceTimersByTime(1000));

      expect(screen.queryByTestId('minimum-duration-loader')).not.toBeInTheDocument();
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
    });

    test.skip('does not render the content if isLoaded becomes `false` after having been `true`', () => {
      const { rerender } = render(<MinimumDurationLoader {...{...props, isLoaded: true}} />)
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      act(() => jest.advanceTimersByTime(1000));
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
      rerender(<MinimumDurationLoader {...props } />)
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      act(() => jest.advanceTimersByTime(1000));
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
    });
  });

  describe('default duration and loader, loaded on mount', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    const props = {
      children,
      isLoaded: true
    }

    test('renders the content immediately when isLoaded is true on mount', () => {
      render(<MinimumDurationLoader {...props} />)
      expect(screen.queryByTestId('minimum-duration-loader')).not.toBeInTheDocument();
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
    });
  });

  describe('custom duration', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    const props = {
      children,
      isLoaded: false,
      minDuration: 5000
    }

    test('renders the loading indicator and doesn\'t render the content', () => {
      render(<MinimumDurationLoader {...props} />)
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
    });

    test('renders the content 5s after isLoaded prop changes', () => {
      const { rerender } = render(<MinimumDurationLoader {...props} />)

      rerender(<MinimumDurationLoader {...{...props, isLoaded: true}} />)
      // Loader should exist
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
      act(() => jest.advanceTimersByTime(1000));
      // Loader should still exist because we exceeded the minimum duration
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
      act(() => jest.advanceTimersByTime(4000));
      // We've exceeded the minimum duration, so the loader should not exist
      expect(screen.queryByTestId('minimum-duration-loader')).not.toBeInTheDocument();
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
    });
  });

  describe('default loader, loaded on mount', () => {
    const props = {
      children,
      isLoaded: true
    }

    test('renders', () => {
      const { baseElement } = render(<MinimumDurationLoader {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('default loader, not loaded on mount', () => {
    const props = {
      children,
      isLoaded: false
    }

    test('renders', () => {
      const { baseElement } = render(<MinimumDurationLoader {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('custom loader, loaded on mount', () => {
    const props = {
      children,
      loader: customLoader,
      isLoaded: true
    }

    test('renders', () => {
      const { baseElement } = render(<MinimumDurationLoader {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('custom loader, not loaded on mount', () => {
    const props = {
      children,
      loader: customLoader,
      isLoaded: false
    }

    test('renders', () => {
      const { baseElement } = render(<MinimumDurationLoader {...props} />)
      expect(baseElement).toMatchSnapshot();
    });
  });
});
