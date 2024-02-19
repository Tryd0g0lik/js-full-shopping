// src\frontend\src\components\pages\Contacts\index.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';
// import { Child } from '../../../interfaces.ts';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { CMainFC } from './Main/index.tsx';

export function ContactsFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function ContactspageFC(): JSX.Element {
  return (
    <>
      <ContactsFC>
        <Fragment>
          <HeaderFC />
          <CMainFC />
          <FooterFC />
        </Fragment>
      </ContactsFC>
    </>
  );
}
