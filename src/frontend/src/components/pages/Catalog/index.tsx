// src\frontend\src\components\pages\Catalog\index.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { DMainFC } from './Main/index.tsx';
const arr = [
  { id: 1, title: 'Все', path: '#' },
  { id: 2, title: 'Женская обувь', path: '#' },
  { id: 3, title: 'Мужская обувь', path: '#' },
  { id: 4, title: 'Обувь унисекс', path: '#' },
  { id: 5, title: 'Детская обувь', path: '#' }
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
