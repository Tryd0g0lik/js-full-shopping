import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { DMainFC } from './Main/index.tsx';

export function CatalogFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function CatalogpageFC(): JSX.Element {
  return (
    <CatalogFC>
      <Fragment>
        <HeaderFC />
        <DMainFC />
        <FooterFC />
      </Fragment>
    </CatalogFC>
  );
}
