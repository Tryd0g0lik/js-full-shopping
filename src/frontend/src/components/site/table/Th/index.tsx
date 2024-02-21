import React, { JSX } from 'react';
import { TableRow } from '@Root';

export default function ThFC({ scop = '', context }: TableRow): JSX.Element {
  if (scop !== undefined || (scop as string).length > ('').length) {
    return (
      <th scope={scop}>{context}</th>
    );
  } else {
    return (
      <th>{context}</th>
    );
  }
}
