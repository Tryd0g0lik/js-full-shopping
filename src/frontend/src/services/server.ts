// src\frontend\src\services\server.ts
import { Str, Product, Val, Position, PromiseOne } from '@Root';
export class SFetch {
  urls: string;

  offsets: { offset: number };

  q_: { q: string };

  index: number;

  constructor(url: Str) {
    this.urls = url;
  }

  /**
   *
   * Here must send `{offset: number}` or `{q: string}` to the entry point.
   * @param `value` is `{offset: number}` or `{q: string}`
   *
   */
  set requestOneBefore(value: Product) {
    const keys: string = Array.from(Object.keys({ ...value }))[0];
    const val: string | number = Array.from(Object.values({ ...value }))[0];

    if (keys.includes('offset')) {
      this.offsets = { offset: val as number };
    } else {
      this.q_ = { q: val as string };
    }
  }

  /**
   * @returns`{offset: number}` or `{q: string}`;
   */
  get requestOneBefore(): { offset: number } | { q: string } {
    if (this.offsets !== undefined) {
      return this.offsets;
    }
    return this.q_;
  }

  /**
   * 
   * @returns Recived a Promise ....
   */
  async requestOneParamAsync(): Promise<Position> {
    const value: { offset: number } | { q: string } = this.requestOneBefore;
    const url = this.urls.slice(0);
    let pathName: Val = '';
    const key = Array.from(Object.keys(value))[0];
    const val = Array.from(Object.values(value))[0];

    if (key.includes('offset')) {
      pathName = `?offset=${val}`;
    } else {
      pathName = `?q=${val}`;
    }
    const promise = await fetch(url + pathName);
    console.log(`[Promise]: ${promise[0].id}`);
    // debugger
    return promise;
  }
}
