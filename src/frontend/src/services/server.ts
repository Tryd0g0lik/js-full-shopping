// src\frontend\src\services\server.ts
import {
  Str, Request, Val, Position,
  PromiseOne, ReadOnlyFunction,
  Categories, Category, HandlerCategoryVal, HandlerPositionVal
} from '@type';
import { ErrorInfo } from 'react';
/**
 * `src\frontend\src\services\server.ts`
 *
 * Based on function `fetc()`
 *
 * @param `url` it's an adress for request on the server.
 */
export class SFetch {
  urls: string;

  offsets: { offset: number } | undefined;

  q_: { q: string } | undefined;

  topSales: boolean | undefined;

  index: number;

  categories: boolean | undefined;

  private readonly controller: AbortController;

  constructor(url: Str) {
    this.urls = url;
    this.controller = new AbortController();
  }

  /**
   * Here an one parameter is before request for server
   *
   * Here must send `{offset: number}` or `{q: string}` or `{'top-sales': boolean }`
   * or `{'categories': true }` to the entry point.
   * @param `value` is `{offset: number}` or `{q: string}`or `{'top-sales': true }` or `{'categories': true }`
   *
   */
  set requestOneBefore(value: Request) {
    const keys: string = Array.from(Object.keys({ ...value }))[0];
    const val: string | number | boolean = Array.from(Object.values({ ...value }))[0];

    if (keys.includes('offset')) {
      this.offsets = { offset: val as number };
    } else if (keys.includes('top-sales')) {
      this.topSales = true;
    } else if (keys.includes('categories')) {
      this.categories = true;
    } else {
      this.q_ = { q: val as string };
    }
  }

  /**
   *  Here we getting an one parameter before request for the server
   *
   * @returns `{offset: number}` - Here is a dowloand more.
   * Or `{q: string}` - Here is a text for a surching row.
   * Or `{ 'top-sales': boolean }` - Here is a top of sales.
   * Or `{'top-sales': boolean }` - Here is an array categories
   *
   */
  get requestOneBefore(): { offset: number } | { q: string } | { 'top-sales': boolean } |
  { categories: boolean } {
    if (this.offsets !== undefined) {
      return this.offsets;
    } else if (this.topSales !== undefined) {
      return { 'top-sales': true };
    } else if (this.categories !== undefined) {
      return { categories: true };
    }
    return this.q_ as { q: string };
  }

  /**
   *  Here is received datas after a request for the server.
   *
   * This a method getting datas from a `this.requestOneBefore`. It's a firs row.
   * It keep value of type `{ offset: number }` or `{ q: string }`.
   *
   * If a data/parameter is the set  `{ offset: number }` or `{ q: string }` .
   * Then If he has:
   *  - a `offset` to return the path name `?offset=${val}`. `http://localhost:7070/api/top-sales.` ;
   *  - a `q` to return the path name `?q=${val}`. `http://localhost:7070/api/items?q=<text for search row>`
   *  - a `top-sales` to return the path name `top-sales` `http://localhost:7070/api/top-sales`.
   *  - a `categories` to return the path name `categories``http://localhost:7070/api/categories`.
   * After creating the URL-addres server do requst from `fetch()`
   * ....
   *
   * Type: 'PromisePosition' => 'void | Position[]'
   *
   * Type: 'Position[]' =>
   *  @prop `id?`: `number`
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
    * @prop `children?`: React.JSX.Elements
   * @returns type 'Promise<PromisePosition>'
   */
  async requestOneParamAsync(handler: (value: HandlerPositionVal | HandlerCategoryVal) => void): Promise<HandlerPositionVal | HandlerCategoryVal | void> {
    const value: { offset: number } |
    { q: string } | { 'top-sales': boolean } |
    { categories: boolean } = this.requestOneBefore;

    const url = this.urls.slice(0);
    let pathName: Val = '';
    /* receive the key name */
    const key = Array.from(Object.keys(value))[0];
    /* received data from values */
    const val = Array.from(Object.values(value))[0];

    /* */
    if (key.includes('offset')) {
      pathName = `/items/?offset=${val}`;
    } else if (key.includes('top-sales') && (val === true)) {
      pathName = '/top-sales';
    } else if (key.includes('categories') && (val === true)) {
      pathName = '/categories';
    } else {
      pathName = `/items/?q=${val}`;
    }

    const signal = this.controller.signal;
    try {
      const answer = await fetch(url + pathName, { signal });

      if (answer.ok) {
        const answerJson = await this.parserResponseAsJson(answer);
        console.log(`[Promise]: ${JSON.stringify(answerJson)}`);

        /* The useState hook for update state from a React */
        if (handler !== undefined) {

          handler(answerJson as Position[]);
        }

        this.offsets = undefined;
        this.q_ = undefined;
        this.topSales = undefined;
        this.categories = undefined;
      } else {
        console.warn('[Ошибка HTTP]: ' + answer.status);
        console.warn('[Ошибка HTTP]: ' + answer.statusText);
      }
    } catch (error: ErrorInfo | unknown | undefined) {
      const err = error;
      console.warn('The fetch request was aborted: ', err);
    }
  }

  /**
   *
   * @param `body` the point entry getting a response from `fetch()`.
   * After, will do render a recived data. 'true' if getting datas in JSON format and otherwise an error getting.
   * If an error recived then returns `body`
   * @returns
   */
  async parserResponseAsJson(body: Response): Promise<unknown> {
    try {
      const jsonData = await body.json() as Array<Record<string, unknown>>;
      return jsonData;
    } catch (err) {
      console.warn('render a response in to the JSON returned Error: ', err);
      return body;
    }
  }

  cansellFetch<ReadOnlyFunction>(): void {
    this.controller.abort();
  }
}
