import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { LMain } from './Main/index.tsx';

export function LoadedFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function LoadedpageFC(): JSX.Element {
  return (
    <LoadedFC>
      <Fragment>
        <HeaderFC />
        <LMain />
        <FooterFC />
      </Fragment>
    </LoadedFC>
  );
}
