import React, { JSX } from 'react';

export function QuantilityOrdersFC(value: number): JSX.Element {
  if (value > 0) {
    return (<div className="header-controls-cart-full">{value}</div>)
  } else {
    return <></>;
  }
}
