import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { LMain } from './Main/index.tsx';

export function LoaderFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function LoaderpageFC(): JSX.Element {
  return (
    <LoaderFC>
      <Fragment>
        <HeaderFC />
        <LMain />
        <FooterFC />
      </Fragment>
    </LoaderFC>
  );
}
