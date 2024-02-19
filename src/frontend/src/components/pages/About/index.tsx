// src\frontend\src\components\pages\About\index.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { AMain } from './Main/index.tsx';

export function AboutFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function AboutpageFC(): JSX.Element {
  return (
    <AboutFC>
      <Fragment>
        <HeaderFC />
        <AMain />
        <FooterFC />
      </Fragment>
    </AboutFC>
  );
}
