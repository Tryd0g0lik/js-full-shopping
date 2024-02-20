// src\frontend\src\components\site\Forms\index.tsx
import React, { JSX } from 'react';
import { MultiProps } from '@Root';

/**
 * file: `src\frontend\src\components\site\Forms\index.tsx`
 *
 * `import { Forms } from '@Attribute/interfaces.ts';`
 *
 * @param param0
 * @returns
 */
export default function FormFC({ children, classes = '' }: MultiProps): JSX.Element {
  return (
    <form className={classes}>
      {children}
    </form>
  );
}
