import React from 'react';
import { render, screen } from '@testing-library/react';
import MinimumDurationLoader from './minimum-duration-loader';

const children = <span data-testid='test-content'>Content</span>;
//const customLoader = <span>Custom Loader</span>;

describe('MinimumDurationLoader', () => {
  describe('default duration and loader, not loaded on mount', () => {
    beforeEach(() => {
      jest.useFakeTimers();
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

      jest.advanceTimersByTime(1000);

      expect(screen.queryByTestId('minimum-duration-loader')).not.toBeInTheDocument();
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
});

/*

testCases.defaultPropsLoaded = {
  description: 'default duration and loader, loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: true
  }
};

  describe(testCases.defaultPropsLoaded.description, () => {
    beforeEach(() => {
      jest.useFakeTimers();
      testCase = testCases.defaultPropsLoaded;
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('renders the content immediately when isLoaded is true on mount', () => {
      wrapper = mount(React.createElement(testCase.component, testCase.props));
      expect(wrapper.find('[data-test-loader]').length).toEqual(0);
      expect(wrapper.find('[data-test-content]').length).toEqual(1);
    });
  });

testCases.customDuration = {
  description: 'custom duration',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: false,
    minDuration: 5000
  }
};

  describe(testCases.customDuration.description, () => {
    beforeEach(() => {
      jest.useFakeTimers();
      testCase = testCases.customDuration;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("renders the loading indicator and doesn't render the content", () => {
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
    });

    it('renders the content 5s after isLoaded prop changes', () => {
      wrapper.setProps({ isLoaded: true });
      wrapper.update();
      // Loader should exist
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
      jest.advanceTimersByTime(1000);
      wrapper.update();
      // Loader should still exist because we exceeded the minimum duration
      expect(wrapper.find('[data-test-loader]').length).toEqual(1);
      expect(wrapper.find('[data-test-content]').length).toEqual(0);
      jest.advanceTimersByTime(4000);
      wrapper.update();
      // We've exceeded the minimum duration, so the loader should not exist
      expect(wrapper.find('[data-test-loader]').length).toEqual(0);
      expect(wrapper.find('[data-test-content]').length).toEqual(1);
    });
  });

testCases.minimumLoaderLoadedWithDefaultLoader = {
  description: 'default loader, loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: true
  }
};

  describe(testCases.minimumLoaderLoadedWithDefaultLoader.description, () => {
    beforeEach(() => {
      testCase = testCases.minimumLoaderLoadedWithDefaultLoader;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

testCases.minimumLoaderNotLoadedWithDefaultLoader = {
  description: 'default loader, not loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: false
  }
};

  describe(
    testCases.minimumLoaderNotLoadedWithDefaultLoader.description,
    () => {
      beforeEach(() => {
        testCase = testCases.minimumLoaderNotLoadedWithDefaultLoader;
        wrapper = shallow(
          React.createElement(testCase.component, testCase.props)
        );
      });

      it('renders', () => {
        expect(wrapper).toMatchSnapshot();
      });
    }
  );

testCases.minimumLoaderLoadedWithCustomLoader = {
  description: 'custom loader, loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: true,
    loader: customLoader
  }
};

  describe(testCases.minimumLoaderLoadedWithCustomLoader.description, () => {
    beforeEach(() => {
      testCase = testCases.minimumLoaderLoadedWithCustomLoader;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

testCases.minimumLoaderNotLoadedWithCustomLoader = {
  description: 'custom loader, not loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: false,
    loader: customLoader
  }
};
  describe(testCases.minimumLoaderNotLoadedWithCustomLoader.description, () => {
    beforeEach(() => {
      testCase = testCases.minimumLoaderNotLoadedWithCustomLoader;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    it('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  */
