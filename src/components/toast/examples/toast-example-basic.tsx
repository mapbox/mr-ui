/*
A toast message with an action.
*/
import React, { ReactElement, useState } from 'react';
import Toast from '../toast';

export default function Example() {
  const [open, setOpen] = useState(false);
  const renderToast = (): ReactElement => {
    return (
      <Toast
        content="3 files have been moved to 'Your folder'"
        duration={3000}
        closeButton={false}
        active={open}
        action={{ text: 'Open folder', callback: () => {} }}
        onExit={() => setOpen(false)}
      >
        <button className="btn" onClick={() => setOpen(true)}>
          Trigger toast from here
        </button>
      </Toast>
    );
  };

  return <div className="flex">{renderToast()}</div>;
}
