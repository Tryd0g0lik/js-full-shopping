// src\frontend\src\components\site\Forms\index.tsx
import React, { FormEvent, JSX } from 'react';
import { MultiProps } from '@type';
// const handler = (e: FormEvent): void => {
//   e.preventDefault();
// };
/**
 * file: `src\frontend\src\components\site\Forms\index.tsx`
 *
 * `import { Forms } from '@site/interfaces.ts';`
 *
 * @param param0
 * @returns
 */
export default function FormFC({ children, classes = '', handler }: MultiProps): JSX.Element {
  return (
    <form className={classes} onSubmit={handler}>
      {children}
    </form>
  );
}
