import { Position, PositionsCard } from "@type";

/* есди вернет false -ключ не найден в lockalStorage, или true */
function chackeKeyToLockalStorage(name: string): boolean {
  let result = false;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    result = (key !== null) ? key.includes(name) : false;
    if (result) {
      return result;
    }
  }
  return result;
}

export class DispatcherStorage {
  readonly datas: Record<string, any> | undefined;

  newDatas: undefined | string;

  readonly uintUrl: string;

  link: HTMLAnchorElement;

  /**
    *
    * @type data: JSON datas to the JSON.stringefy(..) or undefined
    */
  constructor(data: Record<string, any> | undefined = undefined) {
    this.datas = data;
  }

  /**
     * He get the object of localStorag
     * @param `key` : string it's a key of/for localStorage where are keep the datas all.
     * @returns oject of the key
     */
  private getItemOfKey(key: string): Record<string, any> {
    const resultStr = localStorage.getItem(key) as string;
    const resultJson = JSON.parse(resultStr);
    return resultJson as Record<string, any>;
  }

  /**
     * He insert an object inside localStorag by key
     * @param `key` : string it's a key of/for localStorage where are keep the datas all.
     * @param `value`: object, Array string type or simple string.
     */
  private setItemByKey(key: string, value: string): void {
    if ((key !== undefined) || (value !== undefined)) {
      localStorage.setItem(key, value);
    }
  }

  /**
    * задаем ключ под которым сохраним данные.
 Если "this.datas" === undefined, метод не работает
    */
  setToLocalStorage(key: string): void {
    if (this.datas === undefined) return;
    const chacke = chackeKeyToLockalStorage(key);
    if (chacke) {
      // const resultStr = localStorage.getItem(key) as string;
      const resultJson = this.getItemOfKey(key);// JSON.parse(resultStr);
      /* ---------------- -- */
      const ordersArr = (resultJson?.data.order as Array<Position>);
      for (let i = 0; i < ordersArr.length; i++) {
        if (ordersArr[i].id === this.datas.order[0].id as Position) {
          ordersArr[i].quantility += this.datas.order[0].quantility;
          localStorage.removeItem(key);
          this.setItemByKey(key, JSON.stringify({ data: { order: ordersArr } }));
          return
        }
      }
      /* ---------------- -- */

      (resultJson.data.order).push(this.datas.order[0] as Position);
      this.setItemByKey(key, JSON.stringify({ data: { order: resultJson.data.order } }));

    } else {

      this.setItemByKey(key, JSON.stringify({ data: { order: this.datas.order as Position[] } }));
    }
  }

  /**
  * @param key it's a key of/for localStorage where are keep the datas all.
  * @returns oject of the key if data is true or null
  */
  getOfLocalStorage(key: string): Record<string, any> | null { // Dubl function/ First is belove/
    const chacke = chackeKeyToLockalStorage(key);
    if (chacke) {
      const resultStr = localStorage.getItem(key);
      const resultJson = JSON.parse(resultStr as string) as Record<string, any>;
      return resultJson as { data: { order: Position[] } };
    }
    return new Object();
  }

  /**
     * @param: `key` : string. It's a key of/for localStorage where are keep the datas all..
     * @param `idLine` : number. It's a number line for delete.
     * @returns void;
     */
  deleteOneOfLocalStorage(key: string, idLine: number): void {
    const result = this.getOfLocalStorage(key);
    if (key !== null) {
      const arr = (result?.data.order as Array<Position>);
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id !== Number(idLine)) {
          newArr.push(arr[i]);
        }
      }
      localStorage.removeItem(key);
      this.setItemByKey(key, JSON.stringify({ data: { order: newArr } }));
    }
  }
}
