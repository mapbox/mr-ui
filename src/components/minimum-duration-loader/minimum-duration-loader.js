import PropTypes from 'prop-types';
import React from 'react';

// This component displays a loading indicator in place of its children until
// the isLoaded prop is true. The indicator will be displayed for a minimum
// amount of time as specified by the minDuration prop (defaults to one second).

export default class MinimumDurationLoader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    isLoaded: PropTypes.bool,
    loader: PropTypes.node,
    minDuration: PropTypes.number,
    onContentRender: PropTypes.func
  };

  static defaultProps = {
    loader: <div className="loading" data-test-loader />,
    minDuration: 1000
  };

  _delayedMountTimeout = null;
  _startedLoadingTimestamp = 0;

  constructor(props) {
    super(props);

    this.state = { shouldRenderContent: props.isLoaded };
  }

  componentDidMount() {
    this._startedLoadingTimestamp = Date.now();
    if (this.props.onContentRender && this.state.shouldRenderContent) {
      this.props.onContentRender();
    }
  }

  componentDidUpdate() {
    if (this.props.onContentRender && this.state.shouldRenderContent) {
      this.props.onContentRender();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const currentTime = Date.now();

    if (!nextProps.isLoaded && this._delayedMountTimeout !== null) {
      // Clear the existing timeout if the content begins loading again.
      clearTimeout(this._delayedMountTimeout);
      this._delayedMountTimeout = null;
    }

    if (nextProps.isLoaded && !this.state.shouldRenderContent) {
      const timeSinceLoading = currentTime - this._startedLoadingTimestamp;
      const nextState = { shouldRenderContent: true };

      if (timeSinceLoading < nextProps.minDuration) {
        // Display the content after the minimum duration has been reached.
        this._delayedMountTimeout = setTimeout(() => {
          this._delayedMountTimeout = null;
          this.setState(nextState);
        }, nextProps.minDuration - timeSinceLoading);
      } else {
        // The minimum duration has been reached, so show the content immediately.
        this.setState(nextState);
      }
    } else if (!nextProps.isLoaded && this.state.shouldRenderContent) {
      // Reset the component's original state if the content begins loading again.
      this._startedLoadingTimestamp = currentTime;
      this.setState({ shouldRenderContent: false });
    }
  }

  componentWillUnmount() {
    if (this._delayedMountTimeout) {
      clearTimeout(this._delayedMountTimeout);
    }
  }

  render() {
    if (this.state.shouldRenderContent) {
      return this.props.children;
    }

    return this.props.loader;
  }
}
