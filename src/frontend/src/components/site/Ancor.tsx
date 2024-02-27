import React from 'react';
import { A } from './interfaces.ts';

/**
 * file: src\frontend\src\components\site\Ancor.tsx
 *
 * @param `classes`: `string`. It's `<a className="classname" href="...">...</a>`
 * @param `path`: `string`. It's `<a className="..." href="path">...</a>`
 * @param `context`: `string`. It's `<a className="..." href="..">context</a>`
 * @param `dataCategory`:`number|string|undefined` This an attribute it's  datas for the html `data-category`
 * If `dataCategory !== undefined` it will be returned:
 *  -
 * ```tsx
 *  <a className={classes} data-category={dataCategory} href={path}>{context}</a>
 * ```
 *  - or:
 * ```html
 *  <a className="Yor_class_name" data-category="< Your a number or name for category >" href="#">Yor name</a>
 * ```
 * - else will be returned:
 * ```html
 *  <a className="Yor_class_name" href="#">Yor name</a>
 * ```
 * @returns ancor. It has a patern `<a className="nav-link" href="/">Главная</a>`
 */
export default function AncorFC({ classes, path, dataCategory = undefined, context = undefined }: A): JSX.Element {
  const result = (dataCategory !== undefined)
    ? (
      <a className={classes} data-category={dataCategory} href={path}>{context}</a>
    )
    : (
    <a className={classes} href={path}>{context}</a>
    );
  return result;
}
