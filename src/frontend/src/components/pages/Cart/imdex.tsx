// src\frontend\src\components\pages\Cart\imdex.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@type';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
import { CartMainFC } from './Main/index.tsx';

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
				<CartMainFC />
        <FooterFC />
      </Fragment>
    </CartFC>
  );
}
