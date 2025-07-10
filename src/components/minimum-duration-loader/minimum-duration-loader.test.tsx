import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

    test('renders the content 1s after `isLoaded` prop changes', async () => {
      const { rerender } = render(<MinimumDurationLoader {...props} />)

      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();

      rerender(<MinimumDurationLoader {...{...props, isLoaded: true}} />)

      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();

      jest.advanceTimersByTime(1000);

      await waitFor(() => {
        expect(screen.queryByTestId('minimum-duration-loader')).not.toBeInTheDocument();
      })
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
    });

    test.skip('does not render the content if isLoaded becomes `false` after having been `true`', () => {
      const { rerender } = render(<MinimumDurationLoader {...{...props, isLoaded: true}} />)
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();

      jest.advanceTimersByTime(1000);
      expect(screen.getByTestId('test-content')).toBeInTheDocument();
      rerender(<MinimumDurationLoader {...props } />)
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();

      jest.advanceTimersByTime(1000);
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

    test('renders the content 5s after isLoaded prop changes', async () => {
      const { rerender } = render(<MinimumDurationLoader {...props} />)

      rerender(<MinimumDurationLoader {...{...props, isLoaded: true}} />)
      // Loader should exist
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
      jest.advanceTimersByTime(1000);
      // Loader should still exist because we exceeded the minimum duration
      expect(screen.getByTestId('minimum-duration-loader')).toBeInTheDocument();
      expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
      jest.advanceTimersByTime(4000);
      // We've exceeded the minimum duration, so the loader should not exist
      await waitFor(() => {
       expect(screen.queryByTestId('minimum-duration-loader')).not.toBeInTheDocument()
      });
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

  describe('always mounts the content exactly once', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    let mountedCount = 0;

    const Counter: React.FC = () => {
      React.useEffect(() => {
        mountedCount++
      }, []);

      return <span data-testid="mounted-count">{mountedCount}</span>;
    }

    afterEach(() => {
      mountedCount = 0;
    })

    test('when isLoaded = true before minDuration has passed', () => {
      const MIN_DURATION = 100;
      const { rerender } = render(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={false}>
          <Counter />
        </MinimumDurationLoader>
      )

      expect(mountedCount).toBe(0)

      jest.advanceTimersByTime(60);
      rerender(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={true}>
          <Counter />
        </MinimumDurationLoader>
      )

      // Does not mount yet since minDuration has not been reached
      expect(mountedCount).toBe(0)
      rerender(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={true}>
          <Counter />
        </MinimumDurationLoader>
      )

      jest.advanceTimersByTime(60);

      // Mounts since minDuration has passed and isLoaded = true
      expect(mountedCount).toBe(1)
      
      rerender(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={true}>
          <Counter />
        </MinimumDurationLoader>
      )

      // Confirm that the component has not been mounted again if we move forward in time
      jest.advanceTimersByTime(1);
      expect(mountedCount).toBe(1)
    });

    test('when isLoaded = true after minDuration has passed', () => {
      const MIN_DURATION = 100;
      const { rerender } = render(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={false}>
          <Counter />
        </MinimumDurationLoader>
      )

      expect(mountedCount).toBe(0)

      // Move forward in time more than minDuration before setting isLoaded = true
      jest.advanceTimersByTime(110);
      rerender(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={true}>
          <Counter />
        </MinimumDurationLoader>
      )

      // Mounts since minDuration has passed and isLoaded = true
      expect(mountedCount).toBe(1)

      // Confirm that the component has not been mounted again if we move forward in time
      jest.advanceTimersByTime(1);
      rerender(
        <MinimumDurationLoader minDuration={MIN_DURATION} isLoaded={true}>
          <Counter />
        </MinimumDurationLoader>
      )


      expect(mountedCount).toBe(1)
    });
  })
});
