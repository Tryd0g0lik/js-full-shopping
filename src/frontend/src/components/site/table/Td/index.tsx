import React, { JSX } from 'react';
import { TableRow } from '@Root';

export default function TdFC({ scop = '', context }: TableRow): JSX.Element {
  return (
    <th scope={scop}>{context}</th>
  );
}
