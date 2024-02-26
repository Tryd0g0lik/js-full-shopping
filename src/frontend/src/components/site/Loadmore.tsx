import React, { JSX } from 'react';
import DivFC from './Div.tsx';
import ButtonFC from './Forms/Button.tsx';

export default function LoaderMoreFC(): JSX.Element {
  return (
    <DivFC classes='text-center'>
      <ButtonFC classes='btn btn-outline-primary' context='Загрузить ещё' />
    </DivFC>
  );
}
