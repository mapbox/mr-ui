import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../utils/use_previous';

interface Props {
  children: ReactNode;
  isLoaded: boolean;
  loader?: ReactNode;
  minDuration?: number;
}

/**
 * Display a loading indicator in place of its children until the `isLoaded` 
 * prop is true. The indicator will be displayed for a minimum
 * amount of time as specified by the `minDuration`.
 */
export default function MinimumDurationLoader({
  children,
  isLoaded,
  loader = <div className="loading" data-testid="minimum-duration-loader" />,
  minDuration = 1000
}: Props): ReactElement {

  // If `isLoaded` is immediately true, load children right away.
  const [ wasLoaded ] = useState(isLoaded);
  const prevIsLoaded: boolean = usePrevious(isLoaded);
  const startTime = useRef(0);
  const delayedMountTimeoutRef = useRef(null);
  const [delayedLoaded, setDelayedLoaded] = useState(false);

  useEffect(() => {
    // Duration for our timeout to set delayedLoaded to true.
    let duration = 0;

    if (!prevIsLoaded && isLoaded) {
      startTime.current = null;
      setDelayedLoaded(false);
    }

    if (startTime.current) {
      // This means the minDuration has changed after we started the timer.
      duration = Math.min(0, minDuration - (Date.now() - startTime.current));
    } else {
      // This is our first time.
      startTime.current = Date.now();
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
    startTime,
    delayedMountTimeoutRef,
    minDuration,
    prevIsLoaded,
    isLoaded
  ]);

  const shouldRenderContent = isLoaded && (wasLoaded || delayedLoaded || prevIsLoaded);

  if (shouldRenderContent) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <>
      {loader}
    </>
  );
}

MinimumDurationLoader.propTypes = {
  /**
   * The content of the modal.
   */
  children: PropTypes.node.isRequired,
  /**
   * When `false` the loader will continue to display until this is passed as `true.
   */
  isLoaded: PropTypes.bool.isRequired,
  /**
   * An optional for passing a custom loader.
   */
  loader: PropTypes.node,
  /**
   * The minimum duration the loader should appear for (defaults to one second).
   */
  minDuration: PropTypes.number
};
