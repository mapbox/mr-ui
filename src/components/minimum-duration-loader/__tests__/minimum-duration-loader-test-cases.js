import PropTypes from 'prop-types';
import React from 'react';
import MinimumDurationLoader from '../minimum-duration-loader';

const testCases = {};

class TestMinimumDurationLoader extends React.Component {
  static propTypes = {
    loaderProps: PropTypes.object
  };

  state = {
    isLoaded: false
  };

  toggleLoading = () => {
    this.setState({ isLoaded: !this.state.isLoaded });
  };

  render() {
    return (
      <div>
        <div>
          Current Loading State: {this.state.isLoaded ? 'Loaded' : 'Not Loaded'}
        </div>
        <div>
          <button
            aria-label="Toggle"
            className="btn"
            onClick={this.toggleLoading}
          >
            Toggle Loading State
          </button>
        </div>
        <MinimumDurationLoader
          isLoaded={this.state.isLoaded}
          {...this.props.loaderProps}
        />
      </div>
    );
  }
}

const children = <span data-test-content>Content</span>;
const customLoader = <span>Custom Loader</span>;

testCases.minimumLoaderWithDefaultLoader = {
  description: 'default loader',
  element: (
    <TestMinimumDurationLoader
      loaderProps={{
        children
      }}
    />
  )
};

testCases.minimumLoaderWithCustomLoader = {
  description: 'custom loader',
  element: (
    <TestMinimumDurationLoader
      loaderProps={{
        children,
        loader: customLoader
      }}
    />
  )
};

testCases.minimumLoaderWithCustomDuration = {
  description: 'custom duration of 5s',
  element: (
    <TestMinimumDurationLoader
      loaderProps={{
        children,
        minDuration: 5000
      }}
    />
  )
};

testCases.minimumLoaderWithCustomDurationAndCustomLoader = {
  description: 'custom duration of 5s and custom loader',
  element: (
    <TestMinimumDurationLoader
      loaderProps={{
        children,
        loader: customLoader,
        minDuration: 5000
      }}
    />
  )
};

testCases.defaultPropsNotLoaded = {
  description: 'default duration and loader, not loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: false
  }
};

testCases.defaultPropsLoaded = {
  description: 'default duration and loader, loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: true
  }
};

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

testCases.minimumLoaderLoadedWithDefaultLoader = {
  description: 'default loader, loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: true
  }
};

testCases.minimumLoaderNotLoadedWithDefaultLoader = {
  description: 'default loader, not loaded on mount',
  component: MinimumDurationLoader,
  noDisplay: true,
  props: {
    children,
    isLoaded: false
  }
};

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

export { testCases };
