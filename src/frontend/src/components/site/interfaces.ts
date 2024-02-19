export interface Str {
  name: string
}

export interface A extends Str {
  path: string
  context: string
}
/**
 * @type `Dash` it's
  `{ name: string,
    dashbord: {
      path: string,
      context: string
    }
  }`
 */
export interface Dash extends Str {
  dashbord: {
    path: string
    context: string
  }
}

/**
 * @type `dashbordArr: Dash[]`
 *
 * `Dash[]` it's `[
    {
      dashbord: {
      path: string,
      context: string
      }
    }
   ]`
 */
export interface DArr extends Dash {
  dashbordArr: Dash[]
}

/**
 * This is an interface for headers html's tag.
 * @prop `number`:`string`. It sets the leve `<html><h< number >>....</h2></html>`
 * @prop `classes?`: `string`. It is single a class name or multiple. Also is possible and without him.
 * @prop `title?` : `string`. It sets the titles `<html><h2>Your title</h2></html>`. Also is possible without him
 *
 */
export interface Head {
  number: number
  classes?: string
  title?: string
}
