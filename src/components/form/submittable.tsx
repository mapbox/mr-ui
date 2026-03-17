import React, { ReactNode, FormEvent, KeyboardEvent } from 'react';

interface SubmittableProps {
  onEnter: (event: KeyboardEvent<HTMLFormElement>) => void;
  onCancel?: (event: KeyboardEvent<HTMLFormElement>) => void;
  noValidate?: boolean;
  children: ReactNode;
}

export default function Submittable({ onEnter, onCancel, children, ...rest }: SubmittableProps) {
  const onKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    if ((event.target as HTMLElement).tagName === 'INPUT') {
      if (event.code === 'Enter') {
        onEnter(event);
      } else if (event.code === 'Escape' && onCancel) {
        onCancel(event);
      }
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onKeyDown={onKeyDown} onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
}
