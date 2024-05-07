import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { AppFC } from './App.tsx';
import './css/style.css';

/* REDUX */
import { Provider } from 'react-redux';
import configStore from '@reduxs/store.ts';
import { PagesFC } from '@pages/Pages.tsx';

const root = document.getElementById('root');

if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <Provider store={configStore}>
      <StrictMode>
        <PagesFC />
      </StrictMode>
    </Provider>
  );
}
console.log('Good lack work');
