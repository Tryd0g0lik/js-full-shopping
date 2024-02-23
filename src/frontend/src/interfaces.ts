// src\frontend\src\interfaces.ts

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Pages} from '@Root';`
 */
export enum Pages {
  'Home' = '/',
  'Loaded' = '/loaded',
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
  children?: JSX.Element
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { MultiProps } from '@Root'`;
 *
 * Extends the interface `Child`
 *
 * @prop `classes?`: `string` It is single a class name or multiple. Also is possible and without him.
 */
export interface MultiProps extends Child {
  classes?: string
  handler?: () => void
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * @prop `id`: `string`.
 * @prop `title`:`string`.
 */
interface Category {
  id: number
  title: string
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Categories } from '@Root';`
 *
 * @prop `id`: `string`.
 * @prop `title`:`string`.
 * @returns `[{id: 0, title: "Category name" }, ]`
 */
export interface Categories {
  categories: Category[]
}

/**
 *
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Position } from '@Root';`
 *
 * @prop `title`: `string`. It is a name position
 * @prop `price?`: `string` Default values is '0'. This is the main price.
 * @prop `children?: JSX.Element`
 */
export interface Position extends Child {
  title: string
  price?: string
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * import { Td } from '@Root';
 *
 * @prop `children?: JSX.Element`
 * ```
 * function COmponent(): JSX.Element {
 *  return(
 *    <>
 *    <Fragment>
 *      { children }
 *    </Fragment>
 *    </>
 *  );
 * }
 *
 * ```
 * @prop `context: `string`  It is context for display on the page `<html><tr><th>Your contex</th></tr></html>`.
 * @prop `cspan` : `string` It's property css 'collspan'.
 */
export interface TableRow extends MultiProps {
  scop?: string
  context: string
}

export interface Heads {
  headers: string[][]
}
