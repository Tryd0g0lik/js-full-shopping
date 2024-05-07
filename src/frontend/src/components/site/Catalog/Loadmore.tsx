import React, { JSX } from 'react';
import DivFC from '../Div.tsx';
import ButtonFC from '../Forms/Button.tsx';

/**
 * HEre is a button for will be loaded more the poitions
 * @returns ```html
 * <div class="text-center">
 *   <button type="submit" class="btn btn-outline-primary">Загрузить ещё</button>
 * </div>
 * ```
 * */
export default function LoaderMoreFC(): JSX.Element {
  return (
    <DivFC classes='text-center'>
      <ButtonFC classes='btn btn-outline-primary' context='Загрузить ещё' />
    </DivFC>
  );
}
