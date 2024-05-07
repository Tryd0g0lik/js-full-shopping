// src\frontend\src\components\pages\Catalog\index.tsx

import React, { JSX } from 'react';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
import { DMainFC } from './Main/index.tsx';

export function CatalogpageFC(): JSX.Element {
  return (
    <>
      <HeaderFC />
      <DMainFC />
      <FooterFC />
    </>
  );
}
