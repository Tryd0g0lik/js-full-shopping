import React, { JSX } from 'react';
import { Child } from '@type';

export default function TrFC({ children }: Child): JSX.Element {
  return (
    <tr>
      {children}
    </tr>
  );
}
