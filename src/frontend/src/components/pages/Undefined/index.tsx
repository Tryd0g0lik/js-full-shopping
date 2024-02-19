import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { UMainFC } from './Main/index.tsx';

export function UndefinedFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function UnderfinedpageFC(): JSX.Element {
  return (
    <UndefinedFC>
      <Fragment>
        <HeaderFC />
        <UMainFC />
        <FooterFC />
      </Fragment>
    </UndefinedFC>
  );
}
