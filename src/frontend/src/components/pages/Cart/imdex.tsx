// src\frontend\src\components\pages\Cart\imdex.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@type';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
import { CartMainFC } from './Main/index.tsx';


export function CartpageFC(): JSX.Element {
  console.log("Greeting was rendered at [CartpageFC]", new Date().toLocaleTimeString());
  return (
    <>
      <HeaderFC />
      <CartMainFC />
      <FooterFC />
    </>
  );
}
