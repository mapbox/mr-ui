/*
Restart the loader to see a loader for 1 second before the content appears.
*/
import React, { useState, useEffect } from 'react';
import MinimumDurationLoader from '../minimum-duration-loader';

export default function Example() {
  const [loading, setLoading] = useState(false);

  // Using a timer as a pseudo networ request 
  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      setLoading(true);
    }, 500);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [loading]);

  return (
    <div className="flex flex--center-cross">
      <button
        className="btn"
        onClick={() => setLoading(false)}
      >
        Restart loader
      </button>
      <div className="ml12">
        <MinimumDurationLoader isLoaded={loading}>
          Peekaboo!
        </MinimumDurationLoader>
      </div>
    </div>
  );
}
