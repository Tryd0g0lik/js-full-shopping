import React, { JSX } from 'react';
import { ProductMainFC } from './Main/index.tsx';
import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';

export function ProductFC(): JSX.Element {
  return (
    <>
      <HeaderFC />
      <ProductMainFC />
      <FooterFC />
    </>
  );
}
