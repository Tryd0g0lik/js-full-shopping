// src\frontend\src\components\pages\Catalog\index.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { DMainFC } from './Main/index.tsx';
const arr = [
  {
    id: 12,
    title: 'Мужская обувь'
  },
  {
    id: 13,
    title: 'Женская обувь'
  },
  {
    id: 14,
    title: 'Обувь унисекс'
  },
  {
    id: 15,
    title: 'Детская обувь'
  }
];

export function CatalogFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

/**
 * `import { CatalogpageFC } from './Catalog/index.tsx';`
 */
export function CatalogpageFC(): JSX.Element {
  return (
    <CatalogFC>
      <Fragment>
        <HeaderFC />
        <DMainFC categories={arr} />
        <FooterFC />
      </Fragment>
    </CatalogFC>
  );
}
