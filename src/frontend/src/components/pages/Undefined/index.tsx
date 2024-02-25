import React, { JSX, Fragment } from 'react';
import { Child } from '@type';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
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
