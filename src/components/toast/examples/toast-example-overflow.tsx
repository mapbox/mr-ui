/*
A toast message without a close button and with a long message.
*/
import React, { ReactElement, useState } from 'react';
import Toast from '../toast';

export default function Example() {
  const [open, setOpen] = useState(false);
  const renderToast = (): ReactElement => {
    return (
      <Toast
        content="This is a much longer toast message that will likely truncate eventually"
        duration={3000}
        closeButton={false}
        active={open}
        action={{ text: 'Toast Action', callback: () => {} }}
      >
        <button className="btn" onClick={() => setOpen(!open)}>
          Another toast
        </button>
      </Toast>
    );
  };

  return <div className="flex">{renderToast()}</div>;
}
