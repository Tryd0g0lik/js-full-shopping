import React, { JSX } from 'react';
import { Child } from '@Root';

export default function BannerFC({ children }: Child): JSX.Element {
  return (
    <div className="banner">
      {children}
    </div>
  );
}
