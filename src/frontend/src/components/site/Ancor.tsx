import React from 'react';
import { A } from './interfaces.ts';

/**
 * file: src\frontend\src\components\site\Ancor.tsx
 *
 * @param `classes`: `string`. It's `<a className="classname" href="...">...</a>`
 * @param `path`: `string`. It's `<a className="..." href="path">...</a>`
 * @param `context`: `string`. It's `<a className="..." href="..">context</a>`
 * @returns ancor. It has a patern `<a className="nav-link" href="/">Главная</a>`
 */
export default function AncorFC({ classes, path, context }: A): JSX.Element {
  return (
    <a className={classes} href={path}>{context}</a>
  );
}
