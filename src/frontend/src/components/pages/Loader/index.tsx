import React, { JSX } from 'react';
import { Child } from '@Root';
export function LoaderFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
