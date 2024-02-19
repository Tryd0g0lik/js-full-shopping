import React, { JSX } from 'react';
import { Head } from './interfaces.ts';
export default function HeadersFC({ number, classes = '', title }: Head): JSX.Element {
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
