// src\frontend\src\interfaces.ts
import React, { useState } from 'react'
/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Pages} from '@type';`
 *
 * @returns ```txt
 * {
 * 'Home' = '/',
  'Loaded' = '/loaded',
  'Contacts' = '/contacts',
  'Catalog' = '/catalog',
  'Cart' = '/cart',
  'About' = '/about',
  'Undefin' = '/404'
 }
  ```
 */
export enum Pages {
  'Home' = '/',
  'Loaded' = '/loaded',
  'Contacts' = '/contacts',
  'Catalog' = '/catalog',
  'Cart' = '/cart',
  'About' = '/about',
  '404_' = '/404',
  'Product' = '/catalog/:id'
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { PTitle } from '@type';`
 *
  */
export enum PTitle {
  '/' = 'Главная',
  '/catalog' = 'Каталог',
  '/about' = 'О магазине',
  '/contacts' = 'Контакты',
  '/404' = 'Не найден'
}

export enum FilterCategories {
  'Все' = 1,
  'Мужская обувь' = 12,
  'Женская обувь' = 13,
  'Обувь унисекс' = 14,
  'Детская обувь' = 15
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * import { Child } from '@type';
 */
export interface Child {
  children?: JSX.Element
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { MultiProps } from '@type'`;
 *
 * Extends the interface `Child`
 *
 * @prop `classes?`: `string` It is single a class name or multiple. Also is possible and without him.
 * @prop `handler?`: `() => void` Here is a handler for events.
 * @prop `children?`: `() => React.JSX.Element` Is a child element JSX.
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
export interface Category {
  id: number
  title: string
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Categories } from '@type';`
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
 * `import { Position } from '@type';`
 *
 * @prop `id?`: `number`
 * @prop `category?`: `number`
 * @prop `title?`: `string`
 * @prop `images?`: `string[]`
 * @prop `sku?`: `string`
 * @prop `manufacturer?`: `string`
 * @prop `color?`: `string`
 * @prop `material?`: `string`
 * @prop `reason?`: `string`
 * @prop `season?`: `string`
 * @prop `heelSize?`: `string`
 * @prop `price?`: `number`
 * @prop `oldPrice?`: `number`
 * @prop `sizes?`: `[Record<string, boolean>]`
 * @prop `size?`: `string`
 * * @prop `quantility?`: `number`
 * @prop `children?`: React.JSX.Elements
 */
export interface Position extends Child {
	order?: any
  id?: number
  category?: number
  title?: string
  images?: string[]
  sku?: string
  manufacturer?: string
  color?: string
  material?: string
  reason?: string
  season?: string
  heelSize?: string
  price?: number
  oldPrice?: number
  quantility?: number
  sizes?: Array<{
    size: string
    available: boolean
  }> // [Record<string, boolean>]
  size?: string
}
export type ORDER = 'ORDER';
/**
 * @prop 'order' is vef a template:
 * [{
 *  id: number
 *  title: string
 *  size: string
 *  quantility: number
 *  price: number
 * }]
 */
export interface PositionsCard {
  type: ORDER
  id?: number
  order: Position[]
}

/*
* https://github.com/microsoft/TypeScript/issues/40383#issuecomment-720395788
*
* Below is a aswer on error:
* Engl - "Type '{ className: string; }' is not assignable to type 'IntrinsicAttributes"
* RU: = "Тип не может быть назначен для типа "IntrinsicAttributes"."
*/
export interface DataToCart extends React.Component<any> {
  props: { order: Position[] }
}

// export interface : {
//   id: number;
//   order: Position;
// } []
export interface PositionLoader { params: Position }

/**
 * @returns `{
 * id: number
 * category: number
 * title: string
 * price: number
 * images: string[]
 * }`
 */
export interface PromiseOne {
  id: number
  category: number
  title: string
  price: number
  images: string[]
}

/**
 * `import { PromiseArr } from '@type';`
 *
 * @returns `{promise: PromiseOne[]}`
 */
export interface PromiseArr {
  promise: PromiseOne[]
}

/**
 * import { Td } from '@type';
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

/**
 * @returns `type Str = string;`
 */
export type Str = string;

/**
 * @returns `type Val = string | number`
 */
export type Val = string | number;

export type HandlerPositionVal = Position[] | undefined;
/**
 * ```
 * ind?: number
 * offset?: number
 * q?: string
  ```
 */
export interface Requests {
  ind?: number
  order?: {
    owner: {
      phone: string
      address: string
    }
    items: Array<{
      id: number
      price: number
      count: number
    }>
  }
  offset?: number
  q?: string
  'top-sales'?: boolean
  categories?: boolean
}
export interface POSTRequests {
  method: string
  body: Requests["order"]

  headers: {
    "Content-Type:": string,
    "Access-Control-Allow-Origin": string
  }
};
export interface ReadOnlyFunction {
  readonly: () => void
}

export type SearchContext = {
  searchly: string
  method?: (newText: string, cb: () => void) => void
}


export interface SearchForm {
  search?: string
}
export interface CatalogSearched {
  categoryNumber: 1 | 11 | 12 | 13 | 14 | 15
  positions?: Position[]
  inputValue: string | undefined
}
