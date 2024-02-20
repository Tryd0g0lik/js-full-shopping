// src\frontend\src\components\site\Img.tsx
import React, { JSX } from 'react';
import { A } from './interfaces.ts';

/**
 * file" `src\frontend\src\components\site\Img.tsx`
 *
 * `import ImageFC from '@Attribute/Img.tsx';`
 *
 * <html><img src="./..." className="img-fluid" alt="К весне готовы!" /></html>
 *
 * @param `path`: `string` for a atribute `img.src`. It's  `<img src={path} className="..." alt="..." />`<div className=""></div>
 * @param `context?`: `string` for a atribute `img.alt`. It's  `<img src="..." className="..." alt={context} />`
 *  Also is possible and without him.
 *
 * @param `classes?`: `string` for a atribute `img.className`. It's  `<img src="..." className={classes} alt="...." />`
 *  Also is possible and without him.
 *
 * @returns `React.JSX.Element`
 */
export default function ImageFC({ path, context = '', classes = '' }: A): JSX.Element {
  return (
    <img src={path} className={classes} alt={context} />
  );
}
