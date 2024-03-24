// src\frontend\src\components\pages\Cart\imdex.tsx

import React, { JSX } from 'react';
import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';

import { CartMainFC } from './Main/index.tsx';


export function CartpageFC(): JSX.Element {


  return (
    <>
      <HeaderFC />
      <CartMainFC />
      <FooterFC />
    </>
  );
};
