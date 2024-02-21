// src\frontend\src\components\pages\Cart\imdex.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { CMFC } from './Main/index.tsx';

export function CartFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function CartpageFC(): JSX.Element {
  return (
    <CartFC>
      <Fragment>
        <HeaderFC />
        <CMFC />
        <FooterFC />
      </Fragment>
    </CartFC>
  );
}
