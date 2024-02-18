import React, { JSX } from 'react';
import { Child } from '@Root';

export function CatalogFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}
