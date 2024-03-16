// src\frontend\src\components\pages\Cart\imdex.tsx

import React, { JSX, Fragment, useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Child, DataToCart, PositionsCard } from '@type';
import { Position } from '@type';
import { HeaderFC } from '@pages/Header/index.tsx';
import { FooterFC } from '@pages/Footer/index.tsx';

import { DispatcherStorage } from '@service/postman.ts';
import useAddCard, { UseAddCard } from '@service/card/add.tsx';
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
