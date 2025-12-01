/*
A toast with custom styling.
*/
import React, { ReactElement, useState } from 'react';
import Toast from '../toast';

export default function Example() {
  const [open, setOpen] = useState(false);
  const renderToast = (): ReactElement => {
    return (
      <>
        <button className="btn" onClick={() => setOpen(true)}>
          A different themed toast
        </button>
        <Toast
          themeControlWrapper='fixed left top mt12 w-full flex flex--center-main events-none'
          themeControl='flex flex--center-cross bg-gray-dark color-white round-full pl12 py6'
          themeItem='txt-truncate txt-s txt-light'
          closeButton={false}
          duration={3000}
          content={(
            <div className='flex'>
              <div className="mr12">Loading features</div>
              <div className="loading mx-auto loading--s loading--dark" />
            </div>
          )}
          active={open}
          onExit={() => setOpen(false)}
        />
      </>
    );
  };

  return <div className="flex">{renderToast()}</div>;
}
