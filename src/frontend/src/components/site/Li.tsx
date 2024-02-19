import React, { JSX, JSXElementConstructor, useId } from 'react';
import { MultiProps } from '@Root';
import AncorFC from './Ancor.tsx';

/**
 * file: `src\frontend\src\components\site\Li.tsx`
 *
 * `import LiFC from '@Attribute/Li.tsx';`
 *
 * @returns array `<li ...> ....</li>`
 */
export default function LiFC({ classes, children }: MultiProps): JSX.Element { // React.ReactElement[] |
  return (
    <li className={classes}>
      {children}
    </li>
  );
// }
}
