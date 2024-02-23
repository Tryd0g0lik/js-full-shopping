// src\frontend\src\components\site\Forms\Button.tsx
import React from 'react';
import { Forms } from '@Attribute/interfaces.ts';

/**
 * `src\frontend\src\components\site\Forms\Button.tsx`
 *
 * `import ButtonFC from '@Attribute/Forms/Button.tsx';`
 *
 * @param param0
 * @returns
 */
export default function ButtonFC({ classes = '', context }: Forms): React.JSX.Element {
  return (
    <button type='submit' className={classes}>{context}</button>
  );
}
