// src\frontend\src\services\server.ts
import { PositionFC } from '@site/Positions';
import {
  Str, Requests, POSTRequests, Val, Position, HandlerPositionVal
} from '@type';
import getCookie from './cookies.ts';
/**
 * `src\frontend\src\services\server.ts`
 *
 * Based on function `fetc()`
 *
 * @param `url` it's an adress for request on the server.
 */
export class SFetch {
  urls: string;

  offsetsNumber: { offset: number } | undefined;

  q_: { q: string } | undefined;

  orders: Requests['order'] | undefined;

  topSales: boolean | undefined;

  index: number;

  categories: boolean | undefined;

  private readonly controller: AbortController;

  constructor(url: Str) {
    this.urls = url;
    this.controller = new AbortController();
  }

  /**
   * This's a SET-function. Here only create data for to sends
   * Here an one parameter geting before request to the server
   * The Enntry point getting the 'value' param
   *
   *
   *
   * @param `value` is `{offset: number}` or `{q: string}`or `{'top-sales': true }` or `{'categories': true }`
   * or `{order: }` -  JSON
   * @returns < not descriptions >, The 'this.orders' has a value '{order: < JSON >}'
   */
  set requestOneBefore(value: Requests) {
    const keys: string = Array.from(Object.keys({ ...value }))[0];
    const val: string | number | boolean | Requests['order'] = Array.from(Object.values({ ...value }))[0];

    if (keys.includes('offset')) {
      this.offsetsNumber = { offset: val as number };
    } else if (keys.includes('top-sales')) {
      this.topSales = true;
    } else if (keys.includes('categories')) {
      this.categories = true;
    } else if (keys.includes('order')) {
      this.orders = val as Requests['order'];
    } else {
      this.q_ = { q: val as string };
    }
  }

  /**
   *  This's GET-function.
   *  Here only recive a data from the SET-function and transfer to the method 'requestOneParamAsync'
   *
   * @returns `{offset: number}` - Here is a dowloand more.
   * Or `{q: string}` - Here is a text for a surching row.
   * Or `{ 'top-sales': boolean }` - Here is a top of sales.
   * Or `{'top-sales': boolean }` - Here is an array categories
   * Or the 'this.orders'. It's has a value '{order: < JSON.stringify >}'
   */
  get requestOneBefore(): { offset: number } | { q: string } | { 'top-sales': boolean } |
  { categories: boolean } | { 'api-order': true } {
    if (this.offsetsNumber !== undefined) {
      return this.offsetsNumber;
    } else if (this.topSales !== undefined) {
      return { 'top-sales': true };
    } else if (this.categories !== undefined) {
      return { categories: true };
    } else if (this.orders !== undefined) {
      return { 'api-order': true };
    }
    return this.q_ as { q: string };
  }

  /**
 *
 * @param `body` the point entry getting a response from `fetch()`.
 * After, will do render a recived data. 'true' if getting datas in JSON format and otherwise an error getting.
 * If an error recived then returns `body`
 * @returns
 */
  async parserResponseAsJson(body: Response) {
    try {
      const jsonData = await body.json() as Array<Record<string, unknown>>;
      return jsonData;
    } catch (err) {
      console.warn('render a response in to the JSON returned Error: ', err);
    }
    return body.json();
  }

  /**
   *
   *  Here is:
   *  - sending datas to the server througth 'Fetch'.
   *  - received datas after a request for the server.
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
   *  - a `api-order` to return the path name `categories``http://localhost:7070/api/order`. It's 'POST' request
   * After creating the URL-addres server do requst from `fetch()`
   * ....
   *
   * Type: 'PromisePosition' => 'void | Position[]'
   *  @type: 'Position[]': =>
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
    * @prop `{order: Requests["order"]}` for sending an order from user
    *
    * @param `handler` : `typeof useState`
    * @param `get`: `boolean`. Default value is 'true'. It's a 'GET' type request.  Value 'false' means a 'POST" type request.
   * @returns type 'Promise<PromisePosition>'
   */
  async getRrequestOneParamServer(handler: (value: HandlerPositionVal | number) => void, get = true): Promise<HandlerPositionVal | void> {
    const value: { offset: number } |
    { q: string } | { 'top-sales': boolean } |
    { categories: boolean } | { 'api-order': boolean } = this.requestOneBefore;
    // debugger
    /* ------------------- */
    const url = this.urls.slice(0);
    let pathName: Val = '';
    /* receive the key name */
    const key = Array.from(Object.keys(value))[0];
    /* received data from values */
    const val = Array.from(Object.values(value))[0];

    /* ------------------- */
    if (get) {
      if (key.includes('offset')) {
        pathName = `/items/?offset=${val}`;
      } else if (key.includes('top-sales') && (val === true)) {
        pathName = '/top-sales';
      } else if (key.includes('categories') && (val === true)) {
        pathName = '/categories';
      } else {
        pathName = `/items/?q=${val}`;
      }
    } else {
      if ((key.includes('order'))) {
        pathName = '/api/order';
      }
    }

    /* ----------server.ts:231 The fetch request was aborted:  TypeError: Failed to construct 'Request': Invalid name--------- */
    const signal = this.controller.signal;

    try {
      const objEmpty = new Object();
      const params = (get)
        ? objEmpty
        : {
          method: 'POST',
          body: this.orders,
          headers: {
            caches: 'no-cache',
            'X-CSRFToken': getCookie('csrftoken'),
            'Content-Type': 'application/json'
          }
        } as unknown as POSTRequests;

      const req = new URL(url + pathName);

      const answer = await fetch(req, params);

      if (answer.ok) {
        const answerJson = await this.parserResponseAsJson(answer);

        /* Below: The useState hook for update state from a React */

        let responce: unknown | Position[] = '';
        if ((answerJson !== null) && (answerJson !== undefined)) {
          responce = answerJson;
          if (key.includes('offset')) {
            responce = Array.from(Object.values({ ...answerJson }));
            handler(responce as Position[]);
            return;
          }
          if (!get) {
            handler((-1));
            return;
          }

          handler(responce as Position[]);
        }

        // this.offsetsNumber = undefined;
        // this.q_ = undefined;
        // this.topSales = undefined;
        // this.categories = undefined;
      } else {
        console.warn('[Ошибка HTTP]: ' + answer.status);
        console.warn('[Ошибка HTTP]: ' + answer.statusText);
      }
    } catch (error) {
      const err = error;
      console.warn('The fetch request was aborted: ', err);
    }
  }
}
