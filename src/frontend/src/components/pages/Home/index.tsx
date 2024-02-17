import React, { JSX } from 'react';
import { Child } from '../../interfaces.ts';

export function HomepageFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
