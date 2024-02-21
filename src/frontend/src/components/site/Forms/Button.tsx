import React, { JSX } from 'react';
import { Forms } from '@Attribute/interfaces.ts';

export default function ButtonFC({ classes = '', context }: Forms): JSX.Element {
  return (
    <button type='submit' className={classes}>{context}</button>
  );
}
