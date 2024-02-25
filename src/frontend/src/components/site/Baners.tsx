import React, { JSX } from 'react';
import { Child } from '@type';

export default function BannerFC({ children }: Child): JSX.Element {
  return (
    <div className="banner">
      {children}
    </div>
  );
}
