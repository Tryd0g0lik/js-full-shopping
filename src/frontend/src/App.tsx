// src\frontend\src\App.tsx

import React, { JSX } from 'react';
import { BRowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderFC } from '@Pages/Header/index.tsx';
import PagesFC from '@Pages/Pages.tsx';
// import PagesFC from './components/pages/Pages.tsx';

export function AppFC(): JSX.Element {
  return (
    <>
      <PagesFC />
    </>
  );
}
