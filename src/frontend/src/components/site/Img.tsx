// src\frontend\src\components\site\Img.tsx
import React, { JSX } from 'react';
import { A } from './interfaces.ts';
/**
 * file" `src\frontend\src\components\site\Img.tsx`
 *
 * `import ImageFC from '@site/Img.tsx';`
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
  function ImgPattern(): JSX.Element | string {
    const img = (< svg width="100" height="100" fill="none"
      stroke="currentColor"
      strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.75 19.25h8.5a2 2 0 0 0 2-2V9L14 4.75H7.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2Z"></path>
      <path d="M18 9.25h-4.25V5"></path>
    </svg>);
    return String(img);
  }
  return (
    <img src={((path !== undefined)
      ? path
      : ImgPattern()
    ) as string} className={classes} alt={context} />
  );
}
