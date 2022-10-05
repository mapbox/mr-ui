/*
A simple toast message without an action button, with a close button, and with a long message that truncates.
*/
import React, { ReactElement, useState } from 'react';
import Toast from '../toast';

export default function Example() {
  const [open, setOpen] = useState(false);
  const renderToast = (): ReactElement => {
    return (
      <Toast
        content="This is a much longer toast message that will likely truncate eventually with enough text"
        duration={5000}
        closeButton={true}
        active={open}
        onExit={() => setOpen(false)}
      >
        <button className="btn" onClick={() => setOpen(true)}>
          Another toast
        </button>
      </Toast>
    );
  };

  return <div className="flex">{renderToast()}</div>;
}
