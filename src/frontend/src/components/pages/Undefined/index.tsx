import React, { JSX } from 'react';
import { Child } from '@Root';

export function UndefinedFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
