// src\frontend\src\App.tsx

import React, { JSX } from 'react';
import { PagesFC } from '@Pages/Pages.tsx';
// import PagesFC from './components/pages/Pages.tsx';

export function AppFC(): JSX.Element {
  return (
    <>
      <PagesFC />
    </>
  );
}
