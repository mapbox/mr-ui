/*
Toggle a local loader on and off.
*/
import React, { useState } from 'react';
import LoaderLocal from '../loader-local';

export default function Example() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex">
      <button
        className="btn"
        onClick={() => setLoading(!loading)}
      >
        Toggle loader
      </button>
      <div className="relative ml12">
        {loading && <LoaderLocal />}
      </div>
    </div>
  );
}
