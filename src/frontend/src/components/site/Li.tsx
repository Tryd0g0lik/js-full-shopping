import React, { JSX, JSXElementConstructor, useId } from 'react';
import { MultiProps } from '@Root';
import AncorFC from './Ancor.tsx';

/**
 * file: `src\frontend\src\components\site\Li.tsx`
 *
 * `import LiFC from '@Attribute/Li.tsx';`
 *
 * @param `classes`:`string`,
 * @param `children`: React.JSC.Element
 * @returns ```
  <li className={classes}>
      {children}
    </li>
    ```
 */
export default function LiFC({ classes, children }: MultiProps): JSX.Element { // React.ReactElement[] |
  return (
    <li className={classes}>
      {children}
    </li>
  );
// }
}
