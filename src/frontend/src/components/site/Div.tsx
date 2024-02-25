// src\frontend\src\components\site\Div.tsx

import React, { JSX } from 'react';
import { MultiProps } from '@type';

/**
 * `src\frontend\src\components\site\Div.tsx`
 *
 * `import DivFC from '@site/Div.tsx';`
 *
 * This's `<div>|</div>`
 *
 * @param `classes?:string`
 * @param `children?:React.JSX.Element`
 * @returns ```tsx
 * <div className={classes}>
        {children}
      </div>
    ```
    or
    ```tsx
    <div className={classes}></div>
    ```
 */
export default function DivFC({ classes, children }: MultiProps): JSX.Element {
  const responce = (children !== undefined)
    ? (
      <div className={classes}>
        {children}
      </div>
    )
    : (
      <div className={classes}></div>
    );
  return responce;
}
