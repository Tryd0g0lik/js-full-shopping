import React from 'react';
import { A } from './imtarses.ts';

/**
 * @param `name`: `string`. It's `<a className="classname" href="...">...</a>`
 * @param `path`: `string`. It's `<a className="..." href="path">...</a>`
 * @param `context`: `string`. It's `<a className="..." href="..">context</a>`
 * @returns ancor. It has a patern `<a className="nav-link" href="/">Главная</a>`
 */
export default function AncorFC({ name, path, context }: A): JSX.Element {
  return (
    <a className={name} href={path}>{ context }</a>
  );
}
