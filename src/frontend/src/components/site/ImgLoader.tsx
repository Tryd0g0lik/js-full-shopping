// src\frontend\src\components\site\ImgLoader.tsx
import React, { JSX } from 'react';

/**
 * `import ImLoader from '@Attribute/ImgLoader.tsx';`
 *
 * This called an loader picture. It is possible to see when the page loads
 */
export default function ImLoader(): JSX.Element {
  return (
    <div className="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
