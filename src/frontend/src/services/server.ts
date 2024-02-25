// src\frontend\src\services\server.ts
import { Str, Product, Val, Position, PromiseOne } from '@type';
type PromisePosition = void | Position[];

/**
 * `src\frontend\src\services\server.ts`
 *
 * `
 */
export class SFetch {
  urls: string;

  offsets: { offset: number } | undefined;

  q_: { q: string } | undefined;

  topSales: boolean;

  index: number;

  constructor(url: Str) {
    this.urls = url;
  }

  /**
   * Here an one parameter is before request for server
   *
   * Here must send `{offset: number}` or `{q: string}` or `{'top-sales': true }`
   * to the entry point.
   * @param `value` is `{offset: number}` or `{q: string}`or `{'top-sales': true }`
   *
   */
  set requestOneBefore(value: Product) {
    const keys: string = Array.from(Object.keys({ ...value }))[0];
    const val: string | number = Array.from(Object.values({ ...value }))[0];

    if (keys.includes('offset')) {
      this.offsets = { offset: val as number };
    } else if (keys.includes('top-sales')) {
      this.topSales = true;
    } else {
      this.q_ = { q: val as string };
    }
  }

  /**
   *  Here an one parameter is before request for server
   *
   * @returns `{offset: number}` - Here is a dowloand more.
   * Or `{q: string}` - Here is a text for a surching row.
   * Or `{ 'top-sales': boolean }` - Here is a top of sales.
   *
   */
  get requestOneBefore(): { offset: number } | { q: string } | { 'top-sales': boolean } {
    if (this.offsets !== undefined) {
      return this.offsets;
    } else if (this.topSales) {
      return { 'top-sales': true };
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
   *  - a `top-sales` to return the path name `top-sales` `http://localhost:7070/api/top-sales.`
   *  -
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
  async requestOneParamAsync(): Promise<PromisePosition> {
    const value: { offset: number } | { q: string } | { 'top-sales': boolean } = this.requestOneBefore;
    const url = this.urls.slice(0);
    let pathName: Val = '';
    const key = Array.from(Object.keys(value))[0];
    const val = Array.from(Object.values(value))[0];

    if (key.includes('offset')) {
      pathName = `items/?offset=${val}`;
    } if (key.includes('top-sales') && (val === true)) {
      pathName = '/top-sales';
    } else {
      pathName = `items/?q=${val}`;
    }

    const answer = await fetch(url + pathName);
    if (answer.ok) {
      const answerJson = await answer.json();
      console.log(`[Promise]: ${JSON.stringify(answerJson)}`);
      this.offsets = undefined;
      this.q_ = undefined;
      this.topSales = false;
    } else {
      console.warn('[Ошибка HTTP]: ' + answer.status);
      console.warn('[Ошибка HTTP]: ' + answer.statusText);
    }
  }
}
