// src\frontend\src\interfaces.ts

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Pages} from '@Root';`
 */
export enum Pages {
  'Home' = '/',
  'Loader' = '/loader',
  'Contacts' = '/contacts',
  'Catalog' = '/catalog',
  'Cart' = '/cart',
  'About' = '/about',
  'Undefin' = '/404'
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { PTitle } from '@Root';`
 *
  */
export enum PTitle {
  '/' = 'Главная',
  '/catalog' = 'Каталог',
  '/about' = 'О магазине',
  '/contacts' = 'Контакты'
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * import { Child } from '@Root';
 */
export interface Child {
  children: JSX.Element
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * import { MultiProps } from '@Root';
 *
 * Extends the interface `Child`
 *
 * @prop `classes?`: `string` It is single a class name or multiple. Also is possible and without him.
 */
export interface MultiProps extends Child {
  classes?: string
}
