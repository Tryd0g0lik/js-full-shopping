// src\frontend\src\components\site\Forms\Button.tsx
import React from 'react';
import { Forms } from '@site/interfaces.ts';

/**
 * `src\frontend\src\components\site\Forms\Button.tsx`
 *
 * `import ButtonFC from '@site/Forms/Button.tsx';`
 *
 * @param `classes`: `string`
 * @param `context`: `string`
 * @returns ` <button type='submit' className={classes}>{context}</button>`
 */
export default function ButtonFC({ classes = '', context }: Forms): React.JSX.Element {
  return (
    <button type='submit' className={classes}>{context}</button>
  );
}
