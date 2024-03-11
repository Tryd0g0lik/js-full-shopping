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
/**
 *
 * @type data: JSON datas to the JSON.stringefy(..) или undefined
 */
export class SetToLoackaStorage {
  readonly datas: Record<string, any> | undefined;

  newDatas: undefined | string;

  readonly uintUrl: string;

  link: HTMLAnchorElement;

  constructor(data: Record<string, any>) {
    this.datas = data;
  }

  /* задаем ключ под которым сохраним данные.
  Если "this.datas" === undefined, метод не работает
   */
  setToLocalStorage(key: string): void {
    if (this.datas === undefined) return;
    const chacke = chackeKeyToLockalStorage(key);
    if (chacke) {
      const resultStr = localStorage.getItem(key) as string;
      const resultJson = JSON.parse(resultStr);
      const newDatas = (resultJson.data).concat([this.datas]);
      localStorage.setItem(key, JSON.stringify({ data: newDatas }));
    } else {
      localStorage.setItem(key, JSON.stringify({ data: [this.datas] }));
    }

    setTimeout(() => {
      localStorage.clear();
    }, 172800);
  }

  /* задаем ключ под которыем данные читаем.
  Возвращаем Array  данных */
  getToLocalStorage(key: string): Array<Record<string, any>> | void {
    const chacke = chackeKeyToLockalStorage(key);
    if (chacke) {
      const resultStr = localStorage.getItem(key);
      const resultJson = JSON.parse(resultStr);
      const resultArr = resultJson.data;
      return resultArr as Array<Record<string, any>>;
    }
  }
}
