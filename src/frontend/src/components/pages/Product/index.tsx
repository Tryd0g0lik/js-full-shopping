import React, { JSX } from 'react';
import { ProductMainFC } from './Main/index.tsx';
import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';
import { Await, useLoaderData } from 'react-router-dom';
import { Position } from '@type';

export function ProductFC(): JSX.Element {
  const data = useLoaderData() as Position;
  console.log(`#1 [Product][ProductFC] fetch Result: ${JSON.stringify(data)}`);

  return (
    <>
      <HeaderFC />
      <Await resolve={data}>
        <ProductMainFC />
      </Await>
      <FooterFC />
    </>
  );
}
