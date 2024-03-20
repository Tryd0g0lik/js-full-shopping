// src\frontend\src\components\site\Forms\Imputs.tsx
import React, { JSX } from 'react';
import { Forms } from '@site/interfaces.ts';
/**
 * file: `src\frontend\src\components\site\Forms\Imputs.tsx`
 *
 * `import { InputsFC } from '@site/Forms/Imputs.tsx';`
 *
 * @param `placeholder`: `string`. The placeholder attribute defines the text displayed in a form control when the control has no value. https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
 * @param `classes?`: `string`. Defoult  It is single a class name or multiple. Also is possible and without him.
 * @param 'val?':string for an attribute 'value' from the inpute tag.
 *
 */
export default function InputsFC({ classes = '', types = '', ind = '', placeholder = '', val = '' }: Forms): JSX.Element {
  return (
    <input type={types} className={classes}
      id={(ind.length > 0) ? ind : undefined}
      value={(val.length > 0) ? val : undefined}
      placeholder={placeholder} />
  );
}
