import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * It doesn't look like react-docgen works with hooks so keep this as an "inner" function.
 */
function MinimumDurationLoaderInner({
  children,
  isLoaded,
  loader,
  minDuration
}) {
  // If was initially loaded, load immediately.
  const [wasLoaded] = useState(isLoaded);

  const isLoadedRef = useRef(isLoaded);
  const isLoadedPrevious = isLoadedRef.current;
  useEffect(() => {
    isLoadedRef.current = isLoaded;
  }, [isLoaded]);

  const startedLoadingTimestampRef = useRef(0);
  const delayedMountTimeoutRef = useRef(null);

  const [delayedLoaded, setDelayedLoaded] = useState(false);

  useEffect(() => {
    // Duration for our timeout to set delayedLoaded to true.
    let duration = 0;

    if (!isLoadedPrevious && isLoaded) {
      startedLoadingTimestampRef.current = null;
      setDelayedLoaded(false);
    }

    if (startedLoadingTimestampRef.current) {
      // This means the minDuration has changed after we started the timer.
      duration = Math.min(
        0,
        minDuration - (Date.now() - startedLoadingTimestampRef.current)
      );
    } else {
      // This is our first time.
      startedLoadingTimestampRef.current = Date.now();
      duration = minDuration;
    }

    delayedMountTimeoutRef.current = setTimeout(() => {
      delayedMountTimeoutRef.current = null;
      setDelayedLoaded(true);
    }, duration);

    // Clear the existing timeout if the content begins loading again.
    return () => {
      if (delayedMountTimeoutRef.current) {
        clearTimeout(delayedMountTimeoutRef.current);
      }
    };
  }, [
    startedLoadingTimestampRef,
    delayedMountTimeoutRef,
    minDuration,
    isLoadedPrevious,
    isLoaded
  ]);

  const shouldRenderContent = isLoaded && (wasLoaded || delayedLoaded);

  if (shouldRenderContent) {
    return children;
  }

  return loader;
}

/**
 * This component displays a loading indicator in place of its children until
 * the `isLoaded` prop is true. The indicator will be displayed for a minimum
 * amount of time as specified by the minDuration prop (defaults to one second).
 */
export default class MinimumDurationLoader extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    isLoaded: PropTypes.bool,
    loader: PropTypes.node,
    minDuration: PropTypes.number
  };

  static defaultProps = {
    loader: <div className="loading" data-test-loader />,
    minDuration: 1000
  };

  render() {
    return <MinimumDurationLoaderInner {...this.props} />;
  }
}
