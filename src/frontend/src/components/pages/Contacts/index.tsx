// src\frontend\src\components\pages\Contacts\index.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@type';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
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
