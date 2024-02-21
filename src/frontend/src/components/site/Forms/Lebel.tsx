// src\frontend\src\components\site\Forms\Lebel.tsx

import { Forms } from '@Attribute/interfaces.ts';
import React, { JSX } from 'react';

/**
 * `src\frontend\src\components\site\Forms\Lebel.tsx`
 *
 * `import LabelFC from '@Attribute/Forms/Lebel.tsx';`
 *
 * @param `classes?`: `string`
 * @param `htmlFor`:`string`
 * @param `context`:`string` It's a text. User his see on browser.
 * @returns `<label htmForm='...'>|</label>` It's React.JSX.Element
 */
export default function LabelFC({ htmlfor, classes = '', context }: Forms): JSX.Element {
  return (
    <label className={classes} htmlFor={htmlfor}>{context}</label>
  );
}
