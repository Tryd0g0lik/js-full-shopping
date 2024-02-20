// src\frontend\src\components\site\Headers.tsx

import React, { JSX } from 'react';
import { Head } from './interfaces.ts';

/**
 * `import HeadFC from '@Attribute/Headers.tsx';`
 *
 * Exemple: `<h2 className="text-center">Хиты продаж!</h2>`
 *
 * @prop `number`:`string`. It sets the leve `<html><h< number >>....</h2></html>`
 * @prop `classes?`: `string`. It is single a class name or multiple. Also is possible and without him.
 * @prop `title?` : `string`. It sets the titles `<html><h2>Your title</h2></html>`. Also is possible without him
 * @returns React.JSX.Element
 */
export default function HeadFC({ number, classes = '', title = '' }: Head): JSX.Element {
  const htmlH = (number === 1)
    ? (
      <h1 className={classes}>{title}</h1>
    )
    : (number === 2)
      ? (
        <h2 className={classes}>{title}</h2>
      )
      : (number === 3)
        ? (
          <h3 className={classes}>{title}</h3>
        )
        : (number === 4)
          ? (
            <h4 className={classes}>{title}</h4>
          )
          : (number === 5)
            ? (
              <h5 className={classes}>{title}</h5>
            )
            : (number === 6)
              ? (
                <h6 className={classes}>{title}</h6>
              )
              : (
                <h6 className={classes}>{title}</h6>
              );

  return (
    <>
      {htmlH}
    </>
  );
}
