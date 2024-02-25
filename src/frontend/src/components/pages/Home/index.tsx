import React, { JSX, Fragment } from 'react';
import { Child } from '../../../interfaces.ts';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
import { MainFC } from './Main/index.tsx';

export function HomeFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function HomepageFC(): JSX.Element {
  return (
    <HomeFC>
      <Fragment>
        <HeaderFC />
        <MainFC />
        <FooterFC />
      </Fragment>
    </HomeFC>
  );
}
