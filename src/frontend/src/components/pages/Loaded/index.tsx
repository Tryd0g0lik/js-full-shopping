import React, { JSX, Fragment } from 'react';
import { Child } from '@Root';

import { HeaderFC } from '@Pages/Header/index.tsx';
import { FooterFC } from '@Pages/Footer/index.tsx';
import { LMain } from './Main/index.tsx';
const arr = [
  {
    id: 11,
    title: 'Все'
  },
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

export function LoadedFC({ children }: Child): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export function LoadedpageFC(): JSX.Element {

  return (
    <LoadedFC>
      <Fragment>
        <HeaderFC />
        <LMain categories={arr} />
        <FooterFC />
      </Fragment>
    </LoadedFC>
  );
}
