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
      const newDatas = (resultJson.data).concat([this.datas]);
      this.setItemByKey(key, JSON.stringify({ data: newDatas }));
    } else {
      this.setItemByKey(key, JSON.stringify({ data: [this.datas] }));
    }
  }

  /**
  * @param key it's a key of/for localStorage where are keep the datas all.
  * @returns oject of the key if data is true or null
  */
  getOfLocalStorage(key: string): Record<string, any> | null {
    const chacke = chackeKeyToLockalStorage(key);
    if (chacke) {
      const resultStr = localStorage.getItem(key);
      const resultJson = JSON.parse(resultStr as string) as Record<string, any[]>;
      return resultJson;
    }
    return null;
  }

  /**
     * @param: `key` : string. It's a key of/for localStorage where are keep the datas all..
     * @param `idLine` : number. It's a number line for delete.
     * @returns void;
     */
  deleteOneOfLocalStorage(key: string, idLine: number): void {
    const result = this.getOfLocalStorage(key);
    if (key !== null) {
      // const i = 0;
      const arr = (result?.data as Array<Record<string, any, arr>>);
      const newArr = [];
      console.log('newArr: ', newArr.length);
      for (let i = 0; i < arr.length; i++) {
        if (i !== idLine - 1) {
          newArr.push(arr[i]);
        }
      }
      localStorage.removeItem(key);
      this.setItemByKey(key, JSON.stringify({ data: newArr }));
    }
  }
}
