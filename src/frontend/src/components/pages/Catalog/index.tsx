// src\frontend\src\components\pages\Catalog\index.tsx

import React, { JSX, Fragment } from 'react';
import { Child } from '@type';

import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
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

// export function CatalogFC({ children }: Child): JSX.Element {
//   return (
//     <>
//       {children}
//     </>
//   );
// }

/**
 * `import { CatalogpageFC } from './Catalog/index.tsx';`
 */
export function CatalogpageFC(): JSX.Element {
  return (
    <>
      {/* <Fragment> */}
      <HeaderFC />
      <DMainFC />
      <FooterFC />
      {/* </Fragment> */}
    </>
  );
}
