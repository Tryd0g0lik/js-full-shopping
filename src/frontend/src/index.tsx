import React, { StrictMode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppFC } from './App.tsx';
import './css/style.css';

/* REDUX */
import { Provider } from 'react-redux';
import configStore from '@reduxs/store.ts';

const root = document.getElementById('root');

// debugger;
if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <Provider store={configStore}>
      <StrictMode>
        {/* <BrowserRouter> */}
        <AppFC />
        {/* </BrowserRouter > */}
      </StrictMode>
    </Provider>
  );
}
console.log('Good lack work');
