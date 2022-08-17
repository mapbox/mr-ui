/*
An opaque loader. Click the button to show it for three seconds.
*/
import React, { useEffect, useState } from 'react';
import LoaderFull from '../loader-full';

export default function Example() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;

    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [loading]);

  return (
    <>
      <button
        aria-label="Show loader"
        className="btn"
        onClick={() => setLoading(true)}
      >
        Show loader
      </button>
      {loading && <LoaderFull opaque={true} />}
    </>
  );
}
