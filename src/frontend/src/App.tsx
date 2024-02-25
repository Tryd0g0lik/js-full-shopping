// src\frontend\src\App.tsx

import React, { JSX } from 'react';
import { PagesFC } from '@pages/Pages.tsx';
// import PagesFC from './components/pages/Pages.tsx';

export function AppFC(): JSX.Element {
  return (
    <>
      <PagesFC />
    </>
  );
}
