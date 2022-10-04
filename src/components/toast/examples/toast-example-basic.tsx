/*
A simple toast message with action and close buttons.
*/
import React, { ReactElement, useState } from 'react';
import Toast from '../toast';

export default function Example() {
  let [open, setOpen] = useState(true);
  const renderToast = (): ReactElement => {
    return (
      <Toast
        content="3 files have been moved to 'Your folder'"
        duration={100000}
        closeButton={true}
        active={open}
        action={{ text: 'Open folder', callback: () => {} }}
      >
        <button className="btn" onClick={() => setOpen(!open)}>
          Trigger toast from here
        </button>
      </Toast>
    );
  };

  return <div className="flex">{renderToast()}</div>;
}
